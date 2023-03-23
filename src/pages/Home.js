import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Image,
  Alert,
  ProgressBar,
  Button,
} from "react-bootstrap";
import { NotificationManager } from "react-notifications";
import { Storage, API, graphqlOperation } from "aws-amplify";
import * as mutations from "../graphql/mutations";

function Home(props) {
  const [imageUrl, setImageUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [ppeDetected, setPPEDetected] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    setPPEDetected([]);
  }, []);

  const onSampleSelect = (sample) => {
    setPPEDetected([]);
    const url = `${process.env.PUBLIC_URL}${sample}`;
    setImageUrl(url);
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const file = new File([blob], "test.png");
        uploadFile(file);
      });
  };

  const onSelectFile = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setSelectedFile(file);
    setImageUrl(URL.createObjectURL(file));
    uploadFile(file);
  };

  const uploadFile = async (file) => {
    setPPEDetected([]);
    NotificationManager.info("File Upload Started", "Info", 2000);
    try {
      await Storage.put("test.png", file, {
        progressCallback(progress) {
          setUploadProgress(progress.loaded / progress.total);
        },
      });
      NotificationManager.success(
        "File Uploaded Successfully",
        "Success",
        5000
      );
      detectPPE();
    } catch (error) {
      console.log("Error uploading file: ", error);
      NotificationManager.warning("Error uploading file", "Warning", 5000);
    }
  };

  const detectPPE = async () => {
    NotificationManager.info("Now Detecting PPE", "Please Wait", 2000);
    try {
      const resp = await API.graphql(
        graphqlOperation(mutations.ppedetector, {
          key: "test.png",
        })
      );
      const data = JSON.parse(resp.data.ppedetector);
      setPPEDetected(data["body"]["Persons"]);
    } catch (error) {
      console.log("Error Detecting PPE: ", error);
      NotificationManager.warning("Error detecting PPE", "Warning", 5000);
    }
  };

  const sampleFiles = ["/sample1.png", "/sample2.png", "/sample3.png"];

  return (
    <Container>
      <div style={{ marginTop: "7%" }}>
        <Row
          className="mb-4 text-center"
          style={{ border: "solid", backgroundColor: "#c7c7c7" }}
        >
          <h1>WELCOME TO THE PPE DETECTOR TOOL</h1>
          <h4>
            You can upload your image and check if the worker is using PPE in
            the workspace
          </h4>
        </Row>
        <Row className="justify-content-md-center mt-10">
          <Col md="3"></Col>
          <Col md="6">
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label className="text-center">
                <b>Select your File</b>
              </Form.Label>
              <Form.Control
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={onSelectFile}
              />
            </Form.Group>
          </Col>
          <Col md="3"></Col>
        </Row>
        <Row className="justify-content-md-center mt-10">
          <Col lg={3}></Col>
          <Col lg={6} className="text-center">
            {imageUrl && (
              <Image
                className="mx-auto d-block"
                width={400}
                height={400}
                src={imageUrl}
                rounded
              />
            )}
            {uploadProgress * 100 > 0 && uploadProgress * 100 < 99 && (
              <div style={{ margin: "20px" }}>
                <p>Uploading {(uploadProgress * 100).toFixed(2)} %</p>
                <ProgressBar
                  striped
                  variant="success"
                  now={uploadProgress * 100}
                />
              </div>
            )}
          </Col>
          <Col md="3">
            <div style={{ marginTop: "10px" }}>
              <h5>Test Using Sample Files</h5>
              {sampleFiles.map((sample, index) => (
                <Button
                  key={index}
                  style={{ margin: "10px" }}
                  onClick={() => onSampleSelect(sample)}
                >
                  Use Sample {index + 1}
                </Button>
              ))}
            </div>
          </Col>
        </Row>
        <Row
          style={{ marginTop: "20px" }}
          className="justify-content-md-center mt-10"
        >
          <Col lg={6} className="text-center">
            {ppeDetected.length > 0 && <p>PPE Present in</p>}
            {ppeDetected.map((obj) =>
              obj["BodyParts"].map(
                (obj1) =>
                  obj1["EquipmentDetections"].length > 0 && (
                    <Alert key={obj1["Name"]} variant={"success"}>
                      {obj1["Name"]}
                    </Alert>
                  )
              )
            )}
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Home;

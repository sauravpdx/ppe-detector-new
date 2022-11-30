import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Image,
  Alert,
  ProgressBar,
} from "react-bootstrap";
import { NotificationManager } from "react-notifications";
import { Storage, API, graphqlOperation } from "aws-amplify";
import * as mutations from "../graphql/mutations";

function Home(props) {
  const [imageUrl, setImageUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState([]);
  const [ppeDetected, setPPEDetected] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const onSelectFile = async (e) => {
    e.preventDefault();
    // console.log(e.target.files);
    setSelectedFile(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
    uploadFile(e.target.files[0]);
  };

  const uploadFile = async (file) => {
    setPPEDetected([]);
    try {
      NotificationManager.info("File Upload Started", "Info", 2000);
      await Storage.put("test.png", file, {
        progressCallback(progress) {
          setUploadProgress(progress.loaded / progress.total);
        },
      });
      NotificationManager.success("File Upload Successfully", "Success", 5000);
      // console.log("File Uploaded Successfully ");
      await detectPPE();
    } catch (error) {
      // console.log("Error uploading file: ", error);
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
      var data = JSON.parse(resp.data.ppedetector);
      setPPEDetected(data["body"]["Persons"]);
      // console.log(data);
    } catch (error) {
      console.log("Error uploading file: ", error);
      NotificationManager.warning("Error uploading file", "Warning", 5000);
    }
  };

  return (
    <Container>
      <div style={{ marginTop: "7%" }}>
        {" "}
        <Row
          className="mb-4 text-center"
          style={{ border: "solid", backgroundColor: "#c7c7c7" }}
        >
          <h1 style={{ alignText: "center" }}>
            WELCOME TO THE PPE DETECTOR TOOL
          </h1>
          <h4>
            {" "}
            You can upload your image and check if the worker is using PPE in
            the workspace
          </h4>
        </Row>
        <Row className="justify-content-md-center mt-10">
          <Col md="auto">
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label className="text-center">
                <b>Select your File</b>
              </Form.Label>

              <Form.Control
                type="file"
                multiple={true}
                accept="image/png, image/jpeg, image/jpg"
                onChange={(e) => onSelectFile(e)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-10">
          <Col lg={6} className="text-center">
            {imageUrl && (
              <>
                <Image
                  class="mx-auto d-block"
                  width={400}
                  height={400}
                  src={imageUrl}
                  rounded
                />
              </>
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
        </Row>
        <Row
          style={{ marginTop: "20px" }}
          className="justify-content-md-center mt-10"
        >
          <Col lg={6} className="text-center">
            <>
              {ppeDetected.length > 0 && <p>PPE Present in</p>}
              {ppeDetected.map((obj) =>
                obj["BodyParts"].map(
                  (obj1) =>
                    obj1["EquipmentDetections"].length > 0 && (
                      <Alert key={obj1} variant={"success"}>
                        {obj1["Name"]}
                        {/* {obj1["EquipmentDetections"][0]["Type"]} */}
                      </Alert>
                    )
                )
              )}
            </>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Home;

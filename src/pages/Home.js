import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Image, Alert } from "react-bootstrap";

import { Storage, API, graphqlOperation } from "aws-amplify";
import * as mutations from "../graphql/mutations";

function Home(props) {
  const [imageUrl, setImageUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState([]);
  const [ppeDetected, setPPEDetected] = useState([]);

  // useEffect(() => {
  //   detectPPE();
  // });

  const onSelectFile = async (e) => {
    e.preventDefault();
    console.log(e.target.files);
    setSelectedFile(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
    uploadFile(e.target.files[0]);
  };

  const uploadFile = async (file) => {
    try {
      await Storage.put("test.png", file, {
        progressCallback(progress) {
          console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
        },
      });
      console.log("File Uploaded Successfully ");
      await detectPPE();
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  const detectPPE = async (s3key) => {
    const resp = await API.graphql(
      graphqlOperation(mutations.ppedetector, {
        key: "test.png",
      })
    );
    var data = JSON.parse(resp.data.ppedetector);
    console.log(data["body"]["Persons"]);
    setPPEDetected(data["body"]["Persons"]);
    // fetch("https://f8rtde00da.execute-api.us-east-1.amazonaws.com/dev")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     console.log(json);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // // };
    // API.get("ppedetect", "/ppedetect")
    //   .then((response) => {
    //     console.log(response);
    //     // Add your code here
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  return (
    <Container>
      <div style={{ marginTop: "7%" }}>
        {" "}
        <Row className="mb-4 text-center">
          <h1 style={{ alignText: "center" }}>Welcome to PPE Detector Tool</h1>
          <h4>
            {" "}
            You can upload your image and check if the worker is using PPE in
            the workspace
          </h4>
        </Row>
        <Row className="justify-content-md-center mt-10">
          <Col md="auto">
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label className="text-center">Select your File</Form.Label>

              <Form.Control
                type="file"
                multiple={true}
                accept="image/png, image/jpeg"
                onChange={(e) => onSelectFile(e)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-10">
          <Col lg={6} className="text-center">
            {imageUrl && (
              <Image
                class="mx-auto d-block"
                width={400}
                height={400}
                src={imageUrl}
                rounded
              />
            )}
          </Col>
        </Row>
        <Row
          style={{ marginTop: "20px" }}
          className="justify-content-md-center mt-10"
        >
          <Col lg={6} className="text-center">
            <>
              {ppeDetected.map((obj) => (
                <Alert key={obj} variant={"primary"}>
                  {obj["BodyParts"].map((obj1) => (
                    <Alert key={obj1} variant={"success"}>
                      {obj1["Name"]}
                    </Alert>
                  ))}
                </Alert>
              ))}
            </>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Home;

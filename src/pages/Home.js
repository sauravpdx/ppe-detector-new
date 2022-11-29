import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Image, Alert } from "react-bootstrap";

import { Storage } from "aws-amplify";

function Home(props) {
  const [imageUrl, setImageUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState([]);

  const onSelectFile = async (e) => {
    e.preventDefault();
    console.log(e.target.files);
    setSelectedFile(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
    uploadFile(e.target.files[0]);
  };

  const uploadFile = async (file) => {
    try {
      await Storage.put(file.name, file, {
        progressCallback(progress) {
          console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
        },
      });
      console.log("File Uploaded Successfully ");
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
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
            <Alert variant={"success"}>Head Cover Detected</Alert>
          </Col>
        </Row>
      </div>
      ;
    </Container>
  );
}

export default Home;

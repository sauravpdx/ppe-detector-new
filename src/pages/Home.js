import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home(props) {
  return (
    <Container>
      <div style={{ marginTop: "7%" }}>
        {" "}
        <h1>Welcome to PPE Detector Tool</h1>
        <h4>
          {" "}
          You can upload your image and check if the worker is using PPE in the
          workspace
        </h4>
        <Row>
          <Col></Col>
        </Row>
      </div>
      ;
    </Container>
  );
}

export default Home;

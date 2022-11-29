import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Contact(props) {
  return (
    <Container>
      <div style={{ marginTop: "7%" }}>
        {" "}
        <Row className="mb-4 text-center">
          <h1 style={{ alignText: "center" }}>
            <u>DEVELOPERS</u>
          </h1>
        </Row>
        <br></br>
        <Row className="mb-4 text-center">
          <Col>
            <h3 style={{ alignText: "center" }}>PRACHI KASHYAP</h3>
            <h5>PORTLAND STATE UNIVERSITY</h5>
            <h6>Master's in Computer Science</h6>
            <a href="https://github.com/prachi-kashyap">GITHUB</a>
            <br></br>
            <a href="https://www.linkedin.com/in/prachikashyap/">LINKEDIN</a>
          </Col>
          <Col>
            <h3 style={{ alignText: "center" }}>SAURAV KUMAR SINGH</h3>
            <h5>PORTLAND STATE UNIVERSITY</h5>
            <h6>Master's in Computer Science</h6>
            <a href="https://github.com/sauravpdx">GITHUB</a>
            <br></br>
            <a href="https://www.linkedin.com/in/saurav-kumar-singh-1539b4164/">
              LINKEDIN
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Contact;

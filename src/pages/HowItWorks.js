import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import image1 from "./Images/screenshot1.png";
import image2 from "./Images/screenshot2.png";
import image3 from "./Images/screenshot3.png";
import image4 from "./Images/screenshot4.png";

function HowItWorks(props) {
  return (
    <Container>
      <div style={{ marginTop: "8%", marginBottom: "8%" }}>
        <Row
          className="mb-4 text-center"
          style={{
            border: "solid",
            backgroundColor: "#c7c7c7",
            fontfamily: "Roboto",
          }}
        >
          <h1 style={{ alignText: "center" }}>
            <u>HOW IT WORKS?</u>
          </h1>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Card style={{ width: "18rem", marginLeft: "50%" }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Step 1</Card.Title>
                <Card.Text>
                  Click on Upload File for uploading the image.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem", marginRight: "50%" }}>
              <Card.Img variant="top" src={image2} />
              <Card.Body>
                <Card.Title>Step 2</Card.Title>
                <Card.Text>
                  Choose the image from your computer, press open to select.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "18rem", marginLeft: "50%" }}>
              <Card.Img variant="top" src={image3} />
              <Card.Body>
                <Card.Title>Step 3</Card.Title>
                <Card.Text>
                  Wait for 5 to 10 sec, then get the Results.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem", marginRight: "50%" }}>
              <Card.Img variant="top" src={image4} />
              <Card.Body>
                <Card.Title>Step 4</Card.Title>
                <Card.Text>Check out different pages of the website.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default HowItWorks;

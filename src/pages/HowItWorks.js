import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Faq from "react-faq-component";
import image1 from "./Images/screenshot1.png";
import image2 from "./Images/screenshot2.png";
import image3 from "./Images/screenshot3.png";
import image4 from "./Images/screenshot4.png";
import "../styles/HowItWorks.css";

function HowItWorks(props) {
  // Data for frequently asked questions
  const data = {
    title: "FAQs",
    rows: [
      {
        title:
          "Why do you have to check or inspect personal protective equipment?",
        content: `PPE inspections play an important role in workplace health and safety, helping minimize workers' 
                exposure to workplace hazards and reducing the severity of injuries or illnesses. Check with your local 
                regulatory body for specific PPE requirements and guidelines.`,
      },
      {
        title: "How often should PPE equipment be inspected?",
        content: `PPE intended to protect workers from exposure to toxic substances or harmful physical agents should be
                    inspected before each use for damage that could compromise safety.`,
      },
      {
        title: "How should we determine what PPE is required for a task?",
        content: `Two criteria need to be determined: the degree of protection required, and. the appropriateness of the 
                equipment to the situation (including the practicality of the equipment being used and kept in good repair).`,
      },
      {
        title: "What is the package version",
        content: `PPE detection is an emerging solution for the managers as it automates the tracking and monitoring of PPE equipment 
                wear-ability. Workforce is not required for supervision, updates and analysis. Besides offering uninterrupted monitoring
                 of workers, video analytics further detects those working without gloves or masks.1`,
      },
    ],
  };

  // Styling for the frequently asked questions
  const styles = {
    titleTextColor: "blue",
    rowTitleColor: "blue",
  };

  const config = {};

  return (
    <Container>
      <div className="containerMargin">
        <Row className="mb-4 text-center rowHeader">
          <h1 className="text-center">
            <u>HOW IT WORKS?</u>
          </h1>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Card className="cardColumn">
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
            <Card className="cardColumn">
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
        <br></br>
        <Row>
          <Col>
            <Card className="cardColumn">
              <Card.Img className="cardImage" variant="top" src={image3} />
              <Card.Body>
                <Card.Title>Step 3</Card.Title>
                <Card.Text>
                  Wait for 5 to 10 sec, then get the Results.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="cardColumn">
              <Card.Img variant="top" src={image4} />
              <Card.Body>
                <Card.Title>Step 4</Card.Title>
                <Card.Text>Check out different pages of the website.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Faq data={data} styles={styles} config={config} />
        </Row>
      </div>
    </Container>
  );
}

export default HowItWorks;

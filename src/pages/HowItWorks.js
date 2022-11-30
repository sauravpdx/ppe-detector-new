import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Faq from "react-faq-component";
import image1 from "./Images/screenshot1.png";
import image2 from "./Images/screenshot2.png";
import image3 from "./Images/screenshot3.png";
import image4 from "./Images/screenshot4.png";

function HowItWorks(props) {
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

  const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };

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
            <Card
              style={{ width: "18rem", marginLeft: "50%", height: "300px" }}
            >
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
            <Card
              style={{ width: "18rem", marginRight: "50%", height: "300px" }}
            >
              <Card.Img variant="top" src={image2} />
              <Card.Body>
                <Card.Title style={{ marginTop: "15px" }}>Step 2</Card.Title>
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
            <Card
              style={{ width: "18rem", marginLeft: "50%", height: "300px" }}
            >
              <Card.Img
                variant="top"
                src={image3}
                style={{ height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Step 3</Card.Title>
                <Card.Text>
                  Wait for 5 to 10 sec, then get the Results.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: "18rem", marginRight: "50%", height: "300px" }}
            >
              <Card.Img variant="top" src={image4} />
              <Card.Body>
                <Card.Title style={{ marginTop: "135px" }}>Step 4</Card.Title>
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

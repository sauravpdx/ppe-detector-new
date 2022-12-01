import React from "react";
import { Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import image1 from "./Images/image1.png";
import image2 from "./Images/image2.png";
import image3 from "./Images/image3.jpeg";
import image4 from "./Images/image4.jpeg";
import image5 from "./Images/image5.jpeg";

function About(props) {
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
            <u>ABOUT</u>
          </h1>
          <h5 style={{ fontfamily: "Roboto" }}>
            Our goal is to detect people wearing Personal Protective Equipment
            (PPE) in an image. This knowledge can help you increase workplace
            safety procedures. PPE detection, for instance, can be used to check
            whether construction workers are wearing head coverings or whether
            medical staff members are donning face and hand covers. Some of the
            PPE categories that can be recognized are shown in the next image.
          </h5>
        </Row>
        <br></br>
        <Row
          className="mb-4 text-center"
          style={{ backgroundColor: "#c7c7c7" }}
        >
          <h2 style={{ alignText: "center" }}>
            <u>REFERENCES</u>
          </h2>
          <h5>
            <a href="https://github.com/sauravpdx/ppe-detector-new">
              PROJECT GITHUB
            </a>
            <br></br>
            <a href="https://docs.aws.amazon.com/rekognition/latest/dg/what-is.html">
              Amazon Rekognition
            </a>
            <a href="https://docs.amplify.aws/">Amazon Amplify Framework</a>
            <br></br>
            <a href="https://www.geeksforgeeks.org/reactjs-tutorials/">React</a>
            <br></br>
            <a href="https://www.w3schools.com/bootstrap4/">Bootstrap</a>
            <br></br>
            <a href="https://dashboard.emailjs.com/admin">emailjs</a>
            <br></br>
          </h5>
        </Row>
        <br></br>
        <Row
          className="mb-4 text-center"
          style={{ backgroundColor: "#c7c7c7" }}
        >
          <h2 style={{ alignText: "center" }}>
            <u>IMAGES</u>
          </h2>
        </Row>
        <Row className="mb-4 text-center">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-50"
                class="mx-auto d-block"
                width={400}
                height={400}
                src={image1}
                alt="First slide"
              />
              <Carousel.Caption>
                <p>SLIDE 1</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                class="mx-auto d-block"
                width={400}
                height={400}
                src={image2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <p>SLIDE 2</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                class="mx-auto d-block"
                width={400}
                height={400}
                src={image3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <p>SLIDE 3</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                class="mx-auto d-block"
                width={400}
                height={400}
                src={image4}
                alt="Fourth slide"
              />

              <Carousel.Caption>
                <p>SLIDE 4</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                class="mx-auto d-block"
                width={400}
                height={400}
                src={image5}
                alt="Fifth slide"
              />

              <Carousel.Caption>
                <p>SLIDE 5</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </div>
    </Container>
  );
}

export default About;

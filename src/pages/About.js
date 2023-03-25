import React from "react";
import { Container, Row } from "react-bootstrap";
import ImageCarousel from "../components/ImageCarousel"; // Importing the ImageCarousel component
import image1 from "./Images/image1.png";
import image2 from "./Images/image2.png";
import image3 from "./Images/image3.jpeg";
import image4 from "./Images/image4.jpeg";
import image5 from "./Images/image5.jpeg";
import "../styles/About.css";

function About(props) {
  const images = [image1, image2, image3, image4, image5]; // Importing the Images

  return (
    <Container className="about-container">
      <Row className="about-row mb-4 text-center">
        <h1 className="about-heading">
          <u>ABOUT</u>
        </h1>
        <h5 className="about-text">
          Our goal is to detect people wearing Personal Protective Equipment
          (PPE) in an image. This knowledge can help you increase workplace
          safety procedures. PPE detection, for instance, can be used to check
          whether construction workers are wearing head coverings or whether
          medical staff members are donning face and hand covers. Some of the
          PPE categories that can be recognized are shown in the next image.
        </h5>
      </Row>
      <Row className="about-row mb-4 text-center">
        <h2 className="about-heading">
          <u>REFERENCES</u>
        </h2>
        <h5 className="about-text">
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
      <Row className="about-row mb-4 text-center">
        <h2 className="about-heading">
          <u>IMAGES</u>
        </h2>
      </Row>
      <Row className="about-row mb-4 text-center">
        <ImageCarousel images={images} />
      </Row>
    </Container>
  );
}

export default About;

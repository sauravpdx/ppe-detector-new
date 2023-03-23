import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/About.css";

function ImageCarousel(props) {
  return (
    <Carousel>
      {props.images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="about-image"
            src={image}
            alt={`Slide ${index + 1}`}
            width={400}
            height={400}
          />
          <Carousel.Caption>
            <p>SLIDE {index + 1}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;

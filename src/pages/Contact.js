import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Contact.css";
import DeveloperCard from "../components/DeveloperCard";

function Contact(props) {
  // Function to send an email using emailjs service

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_phjhm7g",
        "template_yel3o2b",
        e.target,
        "QQTgS0APVOjjiErXA"
      )
      .then((res) => {
        notify();
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        toast.error("Error sending message, please try again.");
      });
  };
  // Function to display a toast notification when the message is sent
  const notify = () => toast("Message Sent");

  return (
    <Container className="contact-container">
      <Row className="developers-header mb-4 text-center">
        <h1 className="developers-title">DEVELOPERS</h1>
      </Row>
      <br />
      <Row className="developer-info-row mb-4 text-center">
        <Col className="developer-info-col">
          <DeveloperCard
            name="PRACHI KASHYAP"
            university="PORTLAND STATE UNIVERSITY"
            degree="Master's in Computer Science"
            githubUrl="https://github.com/prachi-kashyap"
            linkedinUrl="https://www.linkedin.com/in/prachikashyap/"
          />
        </Col>

        <Col className="developer-info-col">
          <DeveloperCard
            name="SAURAV KUMAR SINGH"
            university="PORTLAND STATE UNIVERSITY"
            degree="Master's in Computer Science"
            githubUrl="https://github.com/sauravpdx"
            linkedinUrl="https://www.linkedin.com/in/saurav-kumar-singh-1539b4164/"
          />
        </Col>
      </Row>
      <br />
      <Row className="contact-form-row mb-5 text-center">
        <Col></Col>
        <Col className="contact-form-col">
          <div className="contact-form-wrapper">
            <h3 className="contact-form-title mb-3">Contact Us</h3>
            <form onSubmit={sendEmail}>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  required
                />
              </div>

              <button
                className="btn btn-danger submit-btn"
                type="submit"
                onClick={notify}
              >
                Submit
              </button>
              <ToastContainer />
            </form>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
export default Contact;

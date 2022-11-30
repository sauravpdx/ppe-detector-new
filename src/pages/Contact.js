import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact(props) {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_phjhm7g",
        "template_yel3o2b",
        e.target,
        "QQTgS0APVOjjiErXA"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  const notify = () => toast("Message Sent");
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
        <br></br>
        <Row className="mb-5 text-center">
          <Col></Col>
          <Col style={{ border: "solid" }}>
            <div
              style={{
                alignText: "center",
                alignItems: "center",
                boxSizing: "border-box",
              }}
            >
              <h3 className="mb-3" style={{ marginTop: "10px" }}>
                Contact Us
              </h3>
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
                  className="btn btn-danger"
                  type="submit"
                  onClick={notify}
                  style={{ marginBottom: "10px" }}
                >
                  Submit
                </button>
                <ToastContainer />
              </form>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </div>
    </Container>
  );
}
export default Contact;

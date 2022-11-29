import React, { useState, useEffect } from "react";
import {
  Button,
  Row,
  Col,
  Container,
  Form,
  Image,
  Spinner,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Auth } from "aws-amplify";

function AppNavbar(props) {
  const { pathname } = useLocation();

  console.log("pathname", pathname);
  return (
    <Container>
      <Navbar expand="lg" variant="dark" bg="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">PPE Detector</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginRight: "30%" }}>
              {
                <Nav.Link
                  active={pathname.includes("/")}
                  style={{ marginRight: "30px" }}
                  href="/"
                >
                  Home
                </Nav.Link>
              }
              <Nav.Link
                active={pathname.includes("about")}
                style={{ marginRight: "30px" }}
                href="/about"
              >
                About
              </Nav.Link>
              <Nav.Link
                active={pathname.includes("contact")}
                style={{ marginRight: "30px" }}
                href="/contact"
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* )} */}
    </Container>
  );
}

export default AppNavbar;

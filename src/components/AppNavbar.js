import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

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
                  active={pathname === "/" || pathname.includes("/home")}
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
                active={pathname.includes("howitworks")}
                style={{ marginRight: "30px" }}
                href="/howitworks"
              >
                How It Works?
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
    </Container>
  );
}

export default AppNavbar;

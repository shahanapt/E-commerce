import React from "react";
// import { Form } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm"
      >
        <Container fluid className="container">
          <Navbar.Brand href="#" className="navbar-brand fw-bold fs-4">
            {" "}
            E-FASHION HUB
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div style={{ display: "contents" }}>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{
                  maxHeight: "150px",
                }}
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/products">Products</Nav.Link>

                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>

              <div
                className="buttons d-flex"
                style={{ placeContent: "center" }}
              >
                <Login />
                <Register />
                <a href="/cart" className="btn btn-outline-dark nav-hover">
                  <i className="fa fa-shopping-cart me-1">Cart (0) </i>
                </a>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;

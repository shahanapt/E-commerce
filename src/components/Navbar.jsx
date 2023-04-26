import React from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

function NavbarComponent() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" href="#">
            E-FASHION HUB
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons d-flex">
              {/* <div className="nav-hover"> */}
              {/* <Link to="/loginmodal"> */}
              <Login />
              {/* </Link> */}
              {/* <a to="/register" className="btn btn-outline-dark me-2 nav-hover">
                <i className="fa fa-user-plus me-1">Register</i>
              </a> */}
              <Register />
              <a to="/cart" className="btn btn-outline-dark nav-hover">
                <i className="fa fa-shopping-cart me-1">Cart (0) </i>
              </a>
              {/* </div> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;

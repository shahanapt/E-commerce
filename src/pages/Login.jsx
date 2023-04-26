import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./Common.css";

function Login(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button
        // color="warning"
        className="hoverEffect"
        // className=" btn btn-outline-dark me-2 bg-white"
        onClick={toggle}
        // style={{ color: "black" }}
      >
        <i className="fa fa-sign-in me-1">Login</i>
      </button>

      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>

        <ModalBody>
          <button className="btn btn-primary w-100 mb-4">
            <span className="fa fa-google me-2"></span> Sign in With Google
          </button>
          <button className="btn btn-primary w-100 mb-4">
            <span className="fa fa-facebook me-2"></span> Sign in With Facebook
          </button>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary w-100 mt-5"
            >
              Submit
            </button>
          </form>
        </ModalBody>
        <ModalFooter>
          {/* <Button color="secondary" onClick={toggle}>
            Cancel
          </Button> */}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Login;

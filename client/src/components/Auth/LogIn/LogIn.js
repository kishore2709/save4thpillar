import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import "./LogIn.css";
import Register from "../Register/Register";

class LogIn extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );

    return (
      <div>
        <div>
          <Button
            color="danger"
            onClick={this.toggle}
            style={{ marginRight: "20px" }}
          >
            Login
          </Button>{" "}
          <NavLink to="/register">
            <Button color="danger" onClick={this.toggle}>
              Register
            </Button>
          </NavLink>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle} close={closeBtn} />
            <ModalBody>
              <div className="login-form">
                <form action="/examples/actions/confirmation.php" method="post">
                  <h2 className="text-center">Log in</h2>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-danger btn-block btnstyle"
                    >
                      Log in
                    </button>
                  </div>
                  <div className="clearfix">
                    <label className="pull-left checkbox-inline">
                      <input type="checkbox" /> Remember me
                    </label>
                    <a href="/" className="pull-right">
                      Forgot Password?
                    </a>
                  </div>
                </form>
                <p className="text-center">
                  or &nbsp; <a href="/">Create an Account</a>
                </p>
              </div>
            </ModalBody>
          </Modal>
        </div>
        <Route path="/register" component={Register} />
      </div>
    );
  }
}

export default LogIn;

import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Register.css";

class Register extends Component {
  render() {
    return (
      <div className="container">
        <div className="container logindiv">
          <div className="login-form">
            <form action="" method="post">
              <p className="h2 text-center" style={{ marginBottom: "30px" }}>
                <i className="fa fa-user-plus" aria-hidden="true">
                  &nbsp; &nbsp;
                </i>
                Register new user
              </p>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  required="required"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
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
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm your password"
                  required="required"
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-danger btn-block btnstyle"
                >
                  Register
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
              or &nbsp;
              <Link to="/login">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

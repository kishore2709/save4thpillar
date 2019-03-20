import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./LogIn.css";

class LogIn extends Component {
  loginHandler = () => {
    console.log("login handler");

    const loginCredentials = {
      email: "saif@gmail.com",
      password: "123456"
    };

    axios
      .post("/users/login", loginCredentials)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container logindiv">
        <div className="login-form">
          <form action="" method="post">
            <p className="h2 text-center" style={{ marginBottom: "30px" }}>
              <i className="fa fa-sign-in" aria-hidden="true" />
              &nbsp;&nbsp; Log in
            </p>
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
                placeholder="Enter your password"
                required="required"
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-danger btn-block btnstyle"
                onClick={this.loginHandler}
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
            or &nbsp;
            <Link to="/register">Create an Account</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default LogIn;

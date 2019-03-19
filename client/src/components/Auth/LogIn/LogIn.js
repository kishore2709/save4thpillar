import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./LogIn.css";

class LogIn extends Component {
  render() {
    return (
      <div className="container logindiv">
        <div className="login-form">
          <form action="" method="post">
            <h2 className="text-center">Log in</h2>
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

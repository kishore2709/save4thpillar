import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div className="container">
        <div className="container logindiv">
          <div className="login-form">
            <form action="" method="post">
              <h2 className="text-center">Register new user</h2>
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

              <p className="text-center">
                or &nbsp;
                <Link to="/login">Log in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

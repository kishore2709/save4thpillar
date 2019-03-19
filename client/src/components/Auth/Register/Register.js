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

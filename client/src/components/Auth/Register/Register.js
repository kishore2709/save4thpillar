import React, { Component } from "react";

// import "./Register.css";

class Register extends Component {
  render() {
    return (
      <h1 className="text-danger" style={{ marginTop: "200px" }}>
        {" "}
        hi there
      </h1>
    );
  }
}

/* <div className="container logindiv">
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
        </div>
      </div> */

export default Register;

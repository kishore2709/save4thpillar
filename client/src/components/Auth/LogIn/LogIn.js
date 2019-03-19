import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import "./LogIn.css";
import Register from "../Register/Register";

class LogIn extends Component {
  render() {
    return (
      <div className="container logindiv">
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

            <NavLink to="/register" style={{ textDecoration: "none" }}>
              <span className="align-middle">Create an Account</span>
            </NavLink>

            <p className="text-center">
              or &nbsp;
              <NavLink to="/register">Create an Account</NavLink>
            </p>
          </form>
        </div>
        <Switch>
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    );
  }
}

export default LogIn;

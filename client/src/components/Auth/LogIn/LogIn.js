import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authActions";

import "./LogIn.css";

class LogIn extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  loginHandler = e => {
    e.preventDefault();
    console.log("login handler");

    const loginCredentials = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(loginCredentials);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container logindiv">
        <div className="login-form">
          <form noValidate onSubmit={this.loginHandler}>
            <p className="h2 text-center" style={{ marginBottom: "30px" }}>
              <i className="fa fa-sign-in" aria-hidden="true" />
              &nbsp;&nbsp; Log in
            </p>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                onChange={this.onChangeHandler}
              />
              {errors.email ? (
                <p className="text-danger text-left"> {errors.email}</p>
              ) : null}
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                name="password"
                onChange={this.onChangeHandler}
              />
              {errors.password || errors.passincorrect ? (
                <p className="text-danger text-left">
                  {" "}
                  {errors.password} {errors.passincorrect}
                </p>
              ) : null}
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
LogIn.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(LogIn);

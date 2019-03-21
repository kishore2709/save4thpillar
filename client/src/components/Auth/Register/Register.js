import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/authActions";

import "./Register.css";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  registerHandler = e => {
    e.preventDefault();
    console.log("register handler");

    const registerCredentials = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(registerCredentials);

    // axios
    //   .post("/users/register", registerCredentials)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     this.setState({ errors: err.response.data });
    //     console.log(err.response.data);
    //   });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="container logindiv">
          <div className="login-form">
            <form noValidate onSubmit={this.registerHandler}>
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
                  name="name"
                  value={this.state.name}
                  onChange={this.onChangeHandler}
                />
                {errors.name ? (
                  <p className="text-danger text-left"> {errors.name}</p>
                ) : null}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  value={this.state.email}
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
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChangeHandler}
                />
                {errors.password || errors.passLength ? (
                  <p className="text-danger text-left">
                    {" "}
                    {errors.password} {errors.passLength}
                  </p>
                ) : null}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm your password"
                  name="password2"
                  value={this.state.password2}
                  onChange={this.onChangeHandler}
                />
                {errors.password2 || errors.passMatch ? (
                  <p className="text-danger text-left">
                    {" "}
                    {errors.password2} {errors.passMatch}
                  </p>
                ) : null}
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
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);

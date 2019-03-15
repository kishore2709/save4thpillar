import React from "react";
import "./LogIn.css";
const login = () => {
  return (
    <div className="container loginContainer">
      <form action="">
        <div className="rowlog">
          <h2 style={{ textAlign: "center" }}>
            Login with Social Media or Manually
          </h2>
          <div className="vl">
            <span className="vl-innertext">or</span>
          </div>

          <div className="collog">
            <a href="/" className="fb btn">
              <i className="fa fa-facebook fa-fw" /> Login with Facebook
            </a>
            <a href="/" className="twitter btn">
              <i className="fa fa-twitter fa-fw" /> Login with Twitter
            </a>
            <a href="/" className="google btn">
              <i className="fa fa-google fa-fw" /> Login with Google+
            </a>
          </div>

          <div className="collog">
            <div className="hide-md-lg">
              <p>Or sign in manually:</p>
            </div>

            <input
              type="text"
              className="inputfield"
              name="username"
              placeholder="Username"
              required
            />
            <input
              type="password"
              className="inputfield"
              name="password"
              placeholder="Password"
              required
            />
            <input type="submit" className="inputfield" value="Login" />
          </div>
        </div>
      </form>

      <div className="bottom-container">
        <div className="rowlog">
          <div className="collog">
            <a href="/" style={{ color: "white" }} className="btnlog">
              Sign up
            </a>
          </div>
          <div className="collog">
            <a href="/" style={{ color: "white" }} className="btnlog">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default login;

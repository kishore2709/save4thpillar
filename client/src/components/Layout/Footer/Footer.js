import React from "react";

import "./Footer.css";

const footer = () => {
  return (
    <div
      className="bg-dark text-light"
      style={{
        marginTop: "500px",
        paddingTop: "40px",
        paddingBottom: "40px"
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-3">
            <p className="h6 text-uppercase pb-2">Company</p>

            <p> About</p>
            <p> Fake News</p>

            <p>Career</p>
            <p>Team</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-3">
            <p className="h6 text-uppercase pb-2">Support</p>
            <p> Help </p>
            <p> Guides</p>
            <p> Contact us</p>
            <p> privacy & Policies</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-3">
            <p className="h6 text-uppercase pb-2">Social</p>
            <p>
              <i className="fa fa-twitter" />
            </p>
            <p>
              <i className="fa fa-facebook" />
            </p>
            <p>
              <i className="fa fa-envelope" />
            </p>
            <p>
              <i className="fa fa-linkedin" />
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-3">
            <p className="h6 text-uppercase pb-2">Company</p>
            <p> About</p>
            <p> Fake News</p>
            <p> Contact us</p>
            <p> Register</p>
            <p> Login</p>
          </div>
        </div>
        <div className="row" />
      </div>
    </div>
  );
};

export default footer;

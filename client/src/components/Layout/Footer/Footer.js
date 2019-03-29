import React from "react";

import "./Footer.css";

const footer = () => {
  return (
    <div
      className="bg-light"
      style={{
        marginTop: "500px",
        paddingTop: "40px"
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-auto col-md-3 col-sm-6 col-6 text-left">
            <p className="h6 text-uppercase pb-2 font-weight-bold">
              Useful Links
            </p>
            <a
              href="/"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              <p className="hoverFooter"> About</p>
            </a>

            <a
              href="/"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              <p className="hoverFooter"> Fake News</p>
            </a>
            <a
              href="/"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              <p className="hoverFooter"> Career</p>
            </a>
            <a
              href="/"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              <p className="hoverFooter"> Team</p>
            </a>
          </div>
          <div className="col-auto col-md-3 col-sm-6 col-6 text-left">
            <p className="h6 text-uppercase pb-2 font-weight-bold">Support</p>

            <a
              href="/"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              <p className="hoverFooter"> Help</p>
            </a>

            <a
              href="/"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              <p className="hoverFooter"> Guides</p>
            </a>

            <a
              href="/"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              <p className="hoverFooter"> Contact us</p>
            </a>

            <a
              href="/"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              <p className="hoverFooter">Privacy & Policies</p>
            </a>
          </div>
          <div className="col-auto col-md-3 col-sm-6 col-6 text-left">
            <p className="h6 text-uppercase pb-2 font-weight-bold">Social</p>

            <a
              href="/"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              <p className="hoverFooter">
                {" "}
                <i className="fa fa-twitter fa-lg" />
              </p>
            </a>

            <a
              href="/"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              <p className="hoverFooter">
                {" "}
                <i className="fa fa-facebook fa-lg" />
              </p>
            </a>

            <a
              href="/"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              <p className="hoverFooter">
                {" "}
                <i className="fa fa-envelope fa-lg" />
              </p>
            </a>

            <a
              href="/"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              <p className="hoverFooter">
                {" "}
                <i className="fa fa-linkedin fa-lg" />
              </p>
            </a>
          </div>
          <div className="col-auto col-md-3 col-sm-6 col-6 text-left">
            <p className="h6 text-uppercase pb-2 font-weight-bold">Featured</p>
            <a
              href="/"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              <p className="hoverFooter"> Press</p>
            </a>
            <a
              href="/"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              <p className="hoverFooter"> News Channel</p>
            </a>
            <a
              href="/"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              <p className="hoverFooter"> Magazine</p>
            </a>
            <a
              href="/"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              <p className="hoverFooter">Blog & Posts</p>
            </a>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col text-center">
            <footer className="page-footer font-small blue">
              <div className="footer-copyright text-center mt-2 mb-3">
                © 2019 Copyright:
                <a href="https://www.save4thpillar.com"> save4thpillar.com</a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;

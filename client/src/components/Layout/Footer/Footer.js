import React from "react";

import "./Footer.css";

const footer = () => {
  return (
    <div
      className="bg-dark text-light"
      style={{
        marginTop: "500px",
        paddingTop: "40px"
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-auto col-md-3 col-sm-6 col-xs-6 text-left">
            <p className="h6 text-uppercase pb-2">Company</p>

            <p> About</p>
            <p> Fake News</p>

            <p>Career</p>
            <p>Team</p>
          </div>
          <div className="col-auto col-md-3 col-sm-6 col-xs-6 text-left">
            <p className="h6 text-uppercase pb-2">Support</p>
            <p> Help </p>
            <p> Guides</p>
            <p> Contact us</p>
            <p> privacy & Policies</p>
          </div>
          <div className="col-auto col-md-3 col-sm-6 col-xs-6 text-left">
            <p className="h6 text-uppercase pb-2">Social</p>
            <p>
              <i className="fa fa-twitter fa-lg" />
            </p>
            <p>
              <i className="fa fa-facebook fa-lg" />
            </p>
            <p>
              <i className="fa fa-envelope fa-lg" />
            </p>
            <p>
              <i className="fa fa-linkedin fa-lg" />
            </p>
          </div>
          <div className="col-auto col-md-3 col-sm-6 col-xs-6 text-left">
            <p className="h6 text-uppercase pb-2">Featured</p>
            <p> Press</p>
            <p> News Channel</p>
            <p> Magzine</p>
            <p> Blog & Posts</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col text-center">
            <footer class="page-footer font-small blue">
              <div class="footer-copyright text-center mt-2 mb-3">
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

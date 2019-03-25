import React from "react";

import "./ContactUs.css";

const contactUs = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box-part text-center">
                <i className="fa fa-envelope fa-3x fa1" aria-hidden="true" />

                <div className="title">
                  <h3>Gmail</h3>
                </div>

                <div className="text">
                  <span>Click to send a mail to us</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box-part text-center">
                <i className="fa fa-twitter fa-3x fa1" aria-hidden="true" />

                <div className="title">
                  <h3>Twitter</h3>
                </div>

                <div className="text">
                  <span>Reach us on Twitter</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box-part text-center">
                <i className="fa fa-facebook fa-3x fa1" aria-hidden="true" />

                <div className="title">
                  <h3>Facebook</h3>
                </div>

                <div className="text">
                  <span>Follow us on Facebook</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box-part text-center">
                <i className="fa fa-linkedin fa-3x fa1" aria-hidden="true" />

                <div className="title">
                  <h3>LinkedIn</h3>
                </div>

                <div className="text">
                  <span>Reach us on LinkeIn</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box-part text-center">
                <i className="fa fa-google-plus fa-3x fa1" aria-hidden="true" />

                <div className="title">
                  <h3>Google</h3>
                </div>

                <div className="text">
                  <span>Reach us on Google+</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box-part text-center">
                <i className="fa fa-instagram fa-3x fa1" aria-hidden="true" />

                <div className="title">
                  <h3>Instagram</h3>
                </div>

                <div className="text">
                  <span>Reach us on Instagram</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p style={{ marginTop: "500px" }}>Footer goes here</p>
    </div>
  );
};
export default contactUs;

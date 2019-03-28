import React from "react";

import "./Footer.css";
import footerimage from "../../../assets/about/about.jpg";

const footer = () => {
  return (
    <div style={{ marginTop: "500px" }}>
      <footer id="dk-footer" className="dk-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="dk-footer-box-info">
                <a href="/" className="footer-logo">
                  <img
                    src={footerimage}
                    alt="footer_logo"
                    className="img-fluid"
                  />
                </a>
                <p className="footer-info-text">
                  save4thpillar is the platform for everyone. For updates please
                  Subscribe.
                </p>
                <div className="footer-social-link">
                  <h3>Follow us</h3>
                  <ul>
                    <li>
                      <a href="/">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-us">
                    <div className="contact-icon">
                      <i className="fa fa-map-o" aria-hidden="true" />
                    </div>

                    <div className="contact-info">
                      <h3>save4thpillar Headquarter</h3>
                      <p>New Delhi, India</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="contact-us contact-us-last">
                    <div className="contact-icon">
                      <i
                        className="fa fa-volume-control-phone"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="contact-info">
                      <h3>8929997976</h3>
                      <p>Give us a call</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="footer-widget footer-left-widget">
                    <div className="section-heading">
                      <h3>Useful Links</h3>
                      <span className="animate-border border-black" />
                    </div>
                    <ul>
                      <li>
                        <a href="/">About us</a>
                      </li>
                      <li>
                        <a href="/">Fake News</a>
                      </li>
                      <li>
                        <a href="/">Contact us</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="/">Login</a>
                      </li>
                      <li>
                        <a href="/">Register</a>
                      </li>
                      <li>
                        <a href="/">Faq</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-12 col-lg-6">
                  <div className="footer-widget">
                    <div className="section-heading">
                      <h3>Subscribe</h3>
                      <span className="animate-border border-black" />
                    </div>
                    <p>Leave your email here to get the updates.</p>
                    <form action="#">
                      <div className="form-row">
                        <div className="col dk-footer-form">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                          />
                          <button type="submit">
                            <i className="fa fa-send" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <span>Copyright © 2019, All Right Reserved save4thpillar</span>
              </div>

              <div className="col-md-6">
                <div className="copyright-menu">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/">Terms</a>
                    </li>
                    <li>
                      <a href="/">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="back-to-top" className="back-to-top">
          <button
            className="btn btn-dark"
            title="Back to Top"
            style={{ display: "block" }}
          >
            <i className="fa fa-angle-up" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default footer;

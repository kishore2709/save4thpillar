import React from "react";

import "./ContactUs.css";

const contactUs = () => {
  return (
    <div>
      <div className="container">
        <div className="box">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 ">
                <div className="box-part text-center bg-light">
                  <i className="fa fa-envelope fa-3x fa1" aria-hidden="true" />

                  <div className="title">
                    <h3>Gmail</h3>
                  </div>

                  <div className="text">
                    <span>Click to send a mail to us</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <div className="box-part text-center bg-light">
                  <i className="fa fa-twitter fa-3x fa1" aria-hidden="true" />

                  <div className="title">
                    <h3>Twitter</h3>
                  </div>

                  <div className="text">
                    <span>Reach us on Twitter</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <div className="box-part text-center bg-light">
                  <i className="fa fa-facebook fa-3x fa1" aria-hidden="true" />

                  <div className="title">
                    <h3>Facebook</h3>
                  </div>

                  <div className="text">
                    <span>Follow us on Facebook</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <div className="box-part text-center bg-light">
                  <i className="fa fa-linkedin fa-3x fa1" aria-hidden="true" />

                  <div className="title">
                    <h3>LinkedIn</h3>
                  </div>

                  <div className="text">
                    <span>Reach us on LinkeIn</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <div className="box-part text-center bg-light">
                  <i
                    className="fa fa-google-plus fa-3x fa1"
                    aria-hidden="true"
                  />

                  <div className="title">
                    <h3>Google</h3>
                  </div>

                  <div className="text">
                    <span>Reach us on Google+</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <div className="box-part text-center bg-light">
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
      </div>
      {/* Contact Form */}
      <section id="contact" className="parallax-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div
                className="wow fadeInUp section-title text-left"
                data-wow-delay="0.2s"
                style={{ color: "#363135" }}
              >
                <h2>Get in touch</h2>
                <p>
                  Fill the form and write your concern,
                  <br /> we will back soon to help you.
                </p>
              </div>
            </div>

            <div className="col-md-7 col-sm-10">
              <div className="wow fadeInUp" data-wow-delay="0.4s">
                <form id="contact-form" action="#" method="get">
                  <div className="col-md-6 col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Name"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <textarea
                      className="form-control"
                      rows="5"
                      name="message"
                      placeholder="Message"
                      required=""
                    />
                  </div>
                  <div className="col-md-offset-8 col-md-4 col-sm-offset-6 col-sm-6">
                    <button
                      id="submit"
                      type="submit"
                      className="form-control mb-5"
                      name="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-5 col-sm-8 text-left ">
              <div className="wow fadeInUp contact-info" data-wow-delay="0.4s">
                <div
                  className="section-title text-left"
                  style={{ color: "#363135" }}
                >
                  <h2>Contact Info</h2>
                  <p>
                    Send a mail or call us on phone. We will be happy to help
                    you.
                  </p>
                </div>

                <p>
                  <i className="fa fa-map-marker" /> save4thpillar Headquarter,
                  New Delhi, India
                </p>
                <p>
                  <i className="fa fa-comment" />{" "}
                  <a href="mailto:info@company.com">save4thpillar@gmail.com</a>
                </p>
                <p>
                  <i className="fa fa-phone" /> +91 8929997976
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p style={{ marginTop: "500px" }}>Footer goes here</p>
    </div>
  );
};
export default contactUs;

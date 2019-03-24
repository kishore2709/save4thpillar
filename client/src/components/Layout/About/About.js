import React, { Component } from "react";

import "./About.css";

class About extends Component {
  render() {
    return (
      <div>
        <div className="background">
          <div className="transbox">
            <div>
              <p className="h1">The world's platform for vote</p>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-auto col-sm-11">
              <p className="h2 text-left subhead">
                At save4thpillar.com, people come and vote for journalists as
                per the news they are providing
              </p>
            </div>

            <div
              className="row justify-content-center"
              style={{ marginTop: "40px" }}
            >
              <div className="col-auto col-md-11 col-sm-11">
                <p
                  className="h5 text-left"
                  style={{
                    lineHeight: "1.508",
                    fontWeight: "400"
                  }}
                >
                  We, here at save4thpillar are group of people who are trying
                  hard to make this world a better place. The name as suggessts
                  that Media is our fourth pillar of any Democracy. So, we are
                  trying hard to make a transparent open voting system. <br />{" "}
                  Basically save4thpillar is open to all platform where everyone
                  can come and vote for their favourite News Channels, News
                  Anchors, Jounalists etc. For controlling the dublicacy we are
                  trying to make a high filtering and IP aunthentication.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                marginTop: "100px",
                marginBottom: "50px",
                paddingLeft: "30px"
              }}
            >
              <p className="h5 text-left" style={{ color: "#dc3545" }}>
                Who can use save4thpillar.com
              </p>
            </div>
            <div className="row justify-content-around">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-left">
                <div className="row">
                  <div className="col-3 text-center">
                    <i
                      className="fa fa-users fa-3x text-danger "
                      aria-hidden="true"
                    />
                  </div>
                  <div className="col-9 col-sm-9 text-left ">
                    <div className="row">
                      <h4>Open to 7.7 Billion people </h4>
                    </div>
                    <div className="row">
                      <p>
                        It is a open platform for everyone around the world. It
                        let's you vote and share your opinion. It is a platform
                        which is transparent, unbiased, no partiality to any
                        religion, caste, color, region etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-left">
                <div className="row">
                  <div className=" col-3 text-center">
                    <i
                      className="fa fa-balance-scale fa-3x text-danger"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 text-left">
                    <div className="row">
                      <h4>Judiciary and Government</h4>
                    </div>
                    <div className="row">
                      <p>
                        Judiciary and Government is key to this platform because
                        at the end these two systems has to take decisions. This
                        platform lets these systems know, that how many people
                        are thinking or supporting about something.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="row justify-content-around"
            style={{ marginTop: "100px" }}
          >
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-left">
              <div className="row">
                <div className="col-3 text-center">
                  <i
                    className="fa fa-newspaper-o fa-3x text-danger "
                    aria-hidden="true"
                  />
                </div>
                <div className="col-9 col-sm-9 text-left ">
                  <div className="row">
                    <h4>News Media</h4>
                  </div>
                  <div className="row">
                    <p>
                      Open to everyone means anyone can come and vote. Becasue
                      it is everyone's right. You can also express your opinion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-left">
              <div className="row">
                <div className=" col-3 text-center">
                  <i
                    className="fa fa-building fa-3x text-danger "
                    aria-hidden="true"
                  />
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9 text-left">
                  <div className="row">
                    <h4>Company / Organizations</h4>
                  </div>
                  <div className="row">
                    <p>
                      Open to everyone means anyone can come and vote. Becasue
                      it is everyone's right. You can also express your opinion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p style={{ marginTop: "500px" }}>Footer goes here</p>
      </div>
    );
  }
}

export default About;

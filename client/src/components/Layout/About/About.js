import React, { Component } from "react";

import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="bg-light">
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
                  className="h4 text-left"
                  style={{
                    lineHeight: "1.408",
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

          <div
            className="row justify-content-around"
            style={{ marginTop: "100px" }}
          >
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-left">
              <div className="row">
                <div className="col-4">
                  <i
                    className="fa fa-users fa-4x text-danger "
                    aria-hidden="true"
                  />
                </div>
                <div className="col-8 col-sm-8 text-left ">
                  <div className="row">
                    <h4>Open to everyone</h4>
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
                <div className=" col-4">
                  <i
                    className="fa fa-balance-scale fa-4x text-danger "
                    aria-hidden="true"
                  />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 text-left">
                  <div className="row">
                    <h4>Government</h4>
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

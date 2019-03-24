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
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <p className="h2 text-left subhead">
                At save4thpillar.com, people come and vote for journalists as
                per the news they are providing
              </p>
            </div>

            <div
              className="row justify-content-center"
              style={{ marginTop: "40px" }}
            >
              <div className="col">
                <p
                  className="h4 text-left"
                  style={{
                    lineHeight: "1.408"
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
        </div>
        <p style={{ marginTop: "500px" }}>Footer goes here</p>
      </div>
    );
  }
}

export default About;

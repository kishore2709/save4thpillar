import React from "react";

import Faheem from "../../../../assets/about/faheem.png";
import Saiful from "../../../../assets/about/saiful.jpeg";

import "./Team.css";

const team = () => {
  return (
    <div>
      <section id="team" className="pb-5">
        <div className="container">
          <h5 className="section-title h1">OUR TEAM</h5>
          <div className="row justify-content-around">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div
                className="image-flip"
                onTouchStart="this.classNameList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img
                            className=" img-fluid"
                            src={Faheem}
                            alt="user-profile"
                          />
                        </p>
                        <h4 className="card-title">Faheem</h4>
                        <p className="card-text">He is a great Guy.</p>
                        <a href="/" className="btn btn-danger btn-sm">
                          <i className="fa fa-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Faheem</h4>
                        <p className="card-text">
                          He a Computer Science and Engineering Graduate. He is
                          working at save4thpillar platform as a FullStack
                          developer and architect.
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="/"
                            >
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="/"
                            >
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="/"
                            >
                              <i className="fa fa-skype" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="/"
                            >
                              <i className="fa fa-google" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div
                className="image-flip"
                onTouchStart="this.classNameList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img
                            className=" img-fluid"
                            src={Saiful}
                            alt="user-profile"
                          />
                        </p>
                        <h4 className="card-title">Saiful</h4>
                        <p className="card-text">He is a Great guy.</p>
                        <a href="/" className="btn btn-danger btn-sm">
                          <i className="fa fa-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Saiful</h4>
                        <p className="card-text">
                          He a Computer Science and Engineering Graduate. He is
                          working at save4thpillar platform as a FullStack
                          developer and architect.
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="/"
                            >
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="/"
                            >
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="/"
                            >
                              <i className="fa fa-skype" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="/"
                            >
                              <i className="fa fa-google" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default team;

import React from "react";

import "./FakeNews.css";
import Footer from "../Footer/Footer";

const fakeNews = () => {
  return (
    <div>
      <div>
        <div className="page-sidebar expandit text-left" id="sidenav">
          <div className="sidebar-inner" id="main-menu-wrapper">
            <ul className="wraplist mt-5 ml-3">
              <li>
                <a href="/">
                  <span className="sidebar-icon">
                    <i className="fa fa-home" />
                  </span>{" "}
                  <span className="menu-title">Home</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="sidebar-icon">
                    <i className="fa fa-bullseye" />
                  </span>{" "}
                  <span className="menu-title">Trending</span>
                </a>
              </li>

              <li>
                <a href="/">
                  <span className="sidebar-icon">
                    <i className="fa fa-video" />
                  </span>{" "}
                  <span className="menu-title">Video </span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="sidebar-icon">
                    <i className="fa fa-book" />
                  </span>{" "}
                  <span className="menu-title">Article</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="sidebar-icon">
                    <i className="fa fa-user" />
                  </span>{" "}
                  <span className="menu-title">you rated</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="sidebar-icon">
                    <i className="fa fa-question-circle" />
                  </span>{" "}
                  <span className="menu-title">help</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="sidebar-icon">
                    <i className="fa fa-comments" aria-hidden="true" />
                  </span>{" "}
                  <span className="menu-title">send us feedback</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content for Fake-News */}
        <section id="main-content">
          <section className="wrapper main-wrapper row">
            <div className="col-md-6 col-sm-11 col-xs-12">
              <section className="box" />
            </div>
            <div className="col-md-6 col-sm-11 col-xs-12">
              <section className="box" />
            </div>

            <div className="clearfix" />

            <div className="col-md-12">
              <section className="box" />
            </div>
          </section>
        </section>
      </div>
      <Footer style={{ marginTop: "200px" }} />
    </div>
  );
};
export default fakeNews;

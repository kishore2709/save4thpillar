import React from "react";

import "./FakeNews.css";
const fakeNews = () => {
  return (
    <div>
      <div className="page-sidebar expandit text-left">
        <div className="sidebar-inner" id="main-menu-wrapper">
          <ul className="wraplist" style={{ height: "auto" }}>
            <li className="menusection">Main</li>

            <li>
              <a href="/">
                <span className="sidebar-icon">
                  <i className="fa fa-dashboard" />
                </span>{" "}
                <span className="menu-title">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="sidebar-icon">
                  <i className="fa fa-bullseye" />
                </span>{" "}
                <span className="menu-title">Goal Management</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="sidebar-icon">
                  <i className="fa fa-users" />
                </span>{" "}
                <span className="menu-title">Manage Users</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="sidebar-icon">
                  <i className="fa fa-calendar" />
                </span>{" "}
                <span className="menu-title">Leaderboard</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="sidebar-icon">
                  <i className="fa fa-suitcase" />
                </span>{" "}
                <span className="menu-title">Meetings</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="sidebar-icon">
                  <i className="fa fa-lock" />
                </span>{" "}
                <span className="menu-title">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section id="main-content">
        <section className="wrapper main-wrapper row">
          <div className="col-md-6">
            <section className="box" />
          </div>
          <div className="col-md-6">
            <section className="box" />
          </div>

          <div className="clearfix" />

          <div className="col-md-12">
            <section className="box" />
          </div>
        </section>
      </section>
    </div>
  );
};
export default fakeNews;

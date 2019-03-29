import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import { clearCurrentRating } from "../../../actions/ratingActions";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Container,
  Nav,
  NavItem
} from "reactstrap";

import Landing from "../Landing/Landing";
import About from "../About/About";
import FakeNews from "../FakeNews/FakeNews";
import ContactUs from "../ContactUs/ContactUs";
import Search from "../Search/Search";
import Login from "../../Auth/LogIn/LogIn";
import Register from "../../Auth/Register/Register";

import "./Navbar.css";

class AppNavbar extends Component {
  state = {
    isOpen: false,
    dropdownOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  toggleDropdown = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.clearCurrentRating();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <div>
        <button
          type="button"
          onClick={this.onLogoutClick}
          className="mr-3 btn btn-danger font-weight-bold"
          style={{ textDecoration: "none", display: "inline-block" }}
        >
          Logout
        </button>

        <p style={{ display: "inline-block" }}>{this.props.auth.user.name}</p>
      </div>
    );

    const guestLinks1 = (
      <NavLink
        exact
        to="/login"
        className="text-dark mr-3"
        onClick={this.toggle}
        style={{ textDecoration: "none", paddingTop: "10px" }}
      >
        <span className="align-middle hoverp">Log in</span>
      </NavLink>
    );
    const guestLinks2 = (
      <NavLink
        exact
        to="/register"
        className="text-dark mr-3"
        onClick={this.toggle}
        style={{ textDecoration: "none", paddingTop: "10px" }}
      >
        <span className="align-middle hoverp">Register</span>
      </NavLink>
    );

    const guestLinks = (
      <div>
        <NavItem className="mr-3" style={{ display: "inline-block" }}>
          {guestLinks1}
        </NavItem>
        <NavItem className="mr-3" style={{ display: "inline-block" }}>
          {guestLinks2}
        </NavItem>
      </div>
    );

    return (
      <div>
        <Navbar
          expand="md"
          light
          className="mb-5 bg-light "
          style={{ lineHeight: "1.8" }}
        >
          <Container>
            <NavbarBrand
              className="text-danger font-bold font-weight-bold brand"
              href="/"
            >
              save4thpillar
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="mr-3">
                  <NavLink
                    to="/about"
                    className=" text-dark mr-3 "
                    onClick={this.toggle}
                    style={{ textDecoration: "none", paddingTop: "10px" }}
                  >
                    <span className="align-middle hoverp">About</span>
                  </NavLink>
                </NavItem>

                <NavItem className="mr-3">
                  <NavLink
                    to="/fake-news"
                    className="text-dark mr-3"
                    onClick={this.toggle}
                    style={{ textDecoration: "none", paddingTop: "10px" }}
                  >
                    <ul>
                      <li className="hoverp">
                        <p style={{ marginTop: "2.3px" }}>Fake News &#9662;</p>
                        <ul class="dropdown">
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
                                <i
                                  className="fa fa-comments"
                                  aria-hidden="true"
                                />
                              </span>{" "}
                              <span className="menu-title">
                                send us feedback
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </NavLink>
                </NavItem>
                <NavItem className="mr-3">
                  <NavLink
                    to="contact-us"
                    className="text-dark mr-3"
                    onClick={this.toggle}
                    style={{ textDecoration: "none", paddingTop: "10px" }}
                  >
                    <span className="align-middle hoverp">Contact us</span>
                  </NavLink>
                </NavItem>
                <NavItem className="mr-3">
                  <NavLink
                    to="/search"
                    className="text-dark mr-3"
                    onClick={this.toggle}
                    style={{ textDecoration: "none", paddingTop: "10px" }}
                  >
                    <i
                      className="fa fa-search align-middle hoverp searchicon"
                      aria-hidden="true"
                    />
                  </NavLink>
                </NavItem>
                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/fake-news" exact component={FakeNews} />
          <Route path="/contact-us" exact component={ContactUs} />
          <Route path="/search" exact component={Search} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    );
  }
}

// Navbar.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//    auth: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentRating }
)(AppNavbar);

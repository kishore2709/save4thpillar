import React, { Component } from "react";
import { Route, NavLink, Switch, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
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
import Admin from "../../Auth/Admin/Admin";
import AddData from "../../Auth/Admin/AddData/AddData";

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
    this.props.history.push("/login");
  };

  FakeNewsHandler = () => {
    this.toggle();
    this.props.history.push("/fake-news");
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <div>
        <button
          type="button"
          onClick={this.onLogoutClick}
          className="mr-3 btn btn-danger font-weight-bold"
          style={{
            textDecoration: "none",
            display: "inline-block",
            paddingTop: "10px"
          }}
        >
          Logout
        </button>

        <p style={{ display: "inline-block", paddingTop: "12px" }}>
          {this.props.auth.user.name}
        </p>
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
                  <div
                    onClick={this.FakeNewsHandler}
                    className="text-dark mr-3"
                    style={{ textDecoration: "none", paddingTop: "10px" }}
                  >
                    <ul>
                      <li className="hoverp">
                        <p style={{ marginTop: "2.3px" }}>Fake News &#9662;</p>
                        <ul className="dropdown">
                          <li>
                            <a href="/" style={{ textDecoration: "none" }}>
                              <span className="menu-title hoverp text-dark">
                                Trending
                              </span>
                            </a>
                          </li>

                          <li>
                            <a href="/" style={{ textDecoration: "none" }}>
                              <span className="menu-title hoverp text-dark">
                                Video
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/" style={{ textDecoration: "none" }}>
                              <span className="menu-title hoverp text-dark">
                                Article
                              </span>
                            </a>
                          </li>

                          <li>
                            <a href="/" style={{ textDecoration: "none" }}>
                              <span className="menu-title hoverp text-dark">
                                Help
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/" style={{ textDecoration: "none" }}>
                              <span className="menu-title hoverp text-dark">
                                Feedback
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
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
          <Route path="/about" exact component={withRouter(About)} />
          <Route path="/fake-news" exact component={withRouter(FakeNews)} />
          <Route path="/contact-us" exact component={withRouter(ContactUs)} />
          <Route path="/search" exact component={withRouter(Search)} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/admin/add-data" exact component={AddData} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser, clearCurrentRating }
  )(AppNavbar)
);

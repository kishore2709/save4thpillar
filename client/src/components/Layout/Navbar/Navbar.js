import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";

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
import TopList from "../TopList/TopList";
import ContactUs from "../ContactUs/ContactUs";
import Search from "../Search/Search";
import Login from "../../Auth/LogIn/LogIn";
import Register from "../../Auth/Register/Register";

import "./Navbar.css";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <NavItem className="mr-3">
        <a
          href="/"
          onClick={this.onLogoutClick}
          className="nav-link text-dark mr-3"
          style={{ textDecoration: "none" }}
        >
          Logout
        </a>
        <NavLink
          to="login"
          className="text-dark mr-3"
          onClick={this.toggle}
          style={{ textDecoration: "none" }}
        >
          <span className="align-middle hoverp">Log in</span>
        </NavLink>
      </NavItem>
    );

    const guestLinks = (
      <NavItem className="mr-3">
        <NavLink
          to="login"
          className="text-dark mr-3"
          onClick={this.toggle}
          style={{ textDecoration: "none" }}
        >
          <span className="align-middle hoverp">Log in</span>
        </NavLink>
      </NavItem>
    );

    return (
      <div>
        <Navbar
          expand="md"
          light
          className="mb-5 bg-light"
          style={{ lineHeight: "2.5rem" }}
        >
          <Container>
            <NavbarBrand className="text-danger text-bolder" href="/">
              save4thpillar
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="mr-3">
                  <NavLink
                    to="/about"
                    className="text-dark mr-3 "
                    onClick={this.toggle}
                    style={{ textDecoration: "none" }}
                  >
                    <span className="align-middle hoverp">About</span>
                  </NavLink>
                </NavItem>

                <NavItem className="mr-3">
                  <NavLink
                    to="/top-list"
                    className="text-dark mr-3"
                    onClick={this.toggle}
                    style={{ textDecoration: "none" }}
                  >
                    <span className="align-middle hoverp">Top List</span>
                  </NavLink>
                </NavItem>
                <NavItem className="mr-3">
                  <NavLink
                    to="contact-us"
                    className="text-dark mr-3"
                    onClick={this.toggle}
                    style={{ textDecoration: "none" }}
                  >
                    <span className="align-middle hoverp">Contact us</span>
                  </NavLink>
                </NavItem>
                <NavItem className="mr-3">
                  <NavLink
                    to="/search"
                    className="text-dark mr-3"
                    onClick={this.toggle}
                    style={{ textDecoration: "none" }}
                  >
                    {/* <span className="align-middle hoverp">Search</span> */}
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
          <Route path="/" exact component={Landing} />
          <Route path="/about" exact component={About} />
          <Route path="/top-list" exact component={TopList} />
          <Route path="/contact-us" exact component={ContactUs} />
          <Route path="/search" exact component={Search} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const maptStateToProps = state => ({
  auth: state.auth
});

export default connect(
  maptStateToProps,
  { logoutUser }
)(AppNavbar);

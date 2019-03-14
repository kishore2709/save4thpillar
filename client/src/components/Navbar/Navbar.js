import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";

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
import Login from "../LogIn/LogIn";

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

  render() {
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
                    to="search"
                    className="text-dark mr-3"
                    onClick={this.toggle}
                    style={{ textDecoration: "none" }}
                  >
                    <span className="align-middle hoverp">Search</span>
                  </NavLink>
                </NavItem>
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
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/top-list" component={TopList} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/search" component={Search} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default AppNavbar;

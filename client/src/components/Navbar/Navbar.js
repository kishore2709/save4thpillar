import React, { Component } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Container,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

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
        <Navbar expand="md" light className="mb-5">
          <Container>
            <NavbarBrand className="text-danger text-bolder" href="/">
              save4thpillar
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="mr-3">
                  <NavLink
                    className="text-dark"
                    href="#hideandseek"
                    onClick={this.toggle}
                  >
                    <span className="hoverp">About</span>
                  </NavLink>
                </NavItem>
                <NavItem className="mr-3">
                  <NavLink
                    className="text-dark"
                    href="#hideandseek0"
                    onClick={this.toggle}
                  >
                    <span className="hoverp">Top List</span>
                  </NavLink>
                </NavItem>
                <NavItem className="mr-3">
                  <NavLink
                    className="text-dark"
                    href="#hideandseek1"
                    onClick={this.toggle}
                  >
                    <span className="hoverp">Contact us</span>
                  </NavLink>
                </NavItem>
                <NavItem className="mr-3">
                  <NavLink
                    className="text-dark"
                    href="#hideandseek2"
                    onClick={this.toggle}
                  >
                    <span className="hoverp">Log in</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;

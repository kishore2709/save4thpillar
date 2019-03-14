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
                    About
                  </NavLink>
                </NavItem>
                <NavItem className="mr-3">
                  <NavLink
                    className="text-dark"
                    href="#hideandseek0"
                    onClick={this.toggle}
                  >
                    Top List
                  </NavLink>
                </NavItem>
                <NavItem className="mr-3">
                  <NavLink
                    className="text-dark"
                    href="#hideandseek1"
                    onClick={this.toggle}
                  >
                    Contact us
                  </NavLink>
                </NavItem>
                <NavItem className="mr-3">
                  <NavLink
                    className="text-dark"
                    href="#hideandseek2"
                    onClick={this.toggle}
                  >
                    Log in
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

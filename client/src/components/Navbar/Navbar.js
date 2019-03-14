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
        <Navbar expand="md" color="success" dark className="mb-5">
          <Container>
            <NavbarBrand href="/">save4thpillar</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#hideandseek" onClick={this.toggle}>
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#hideandseek" onClick={this.toggle}>
                    Top List
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#hideandseek" onClick={this.toggle}>
                    Contact us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#hideandseek" onClick={this.toggle}>
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

import React, { Component } from 'react';
import { Nav,Navbar,NavItem,NavbarBrand,NavLink } from 'reactstrap';

class AppNav extends Component {
    state = {  }
    render() {
        return (
          <div>
            <Navbar color="dark" dark  expand="md">
              <NavbarBrand href="/">Persons Application</NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/persons">Persons</NavLink>
                  </NavItem>
                </Nav>
            </Navbar>
          </div>
        );
    }
}
 
export default AppNav;
import React, { Component } from 'react';
import { Nav,Navbar,NavItem,NavbarBrand,NavLink } from 'reactstrap';

//Navigation bar
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
                    <NavLink href="/nationalities">Nationalities</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/persons">Persons</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/weatherInfo">WeatherApp</NavLink>
                  </NavItem>
                </Nav>
            </Navbar>
          </div>
        );
    }
}
 
export default AppNav;
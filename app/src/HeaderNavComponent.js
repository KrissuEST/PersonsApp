import React, { Component } from 'react';
import { Nav,Navbar,NavItem,NavbarBrand,NavLink } from 'reactstrap';

//Navigation bar, also header
class AppNav extends Component {
    state = {  }
    
    render() {
        return (
          <div>
            <Navbar className="header" color="dark" dark expand="md">
              <NavbarBrand href="/">Persons Management Application</NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/home">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/nationalities">Nationalities</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/persons">Persons</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/add-person">Add Person</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/weather-info">WeatherApp</NavLink>
                  </NavItem>
                </Nav>
            </Navbar>
          </div>
        );
    }
}

export default AppNav;
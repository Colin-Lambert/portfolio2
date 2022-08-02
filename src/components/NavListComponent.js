import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavbarToggler } from 'reactstrap';

class NavList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <Navbar
                color='dark'
                dark
                sticky='top'
                expand='md'
                className='navigate-me'
            >
                <NavbarBrand href='/'>
                    CL
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse
                    isOpen={this.state.isNavOpen}
                    navbar
                >
                    <Nav
                        className='me-auto'
                        navbar
                    >
                        <NavItem>
                            <NavLink className='nav-link' to='/about'>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/projects'>Projects</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavList; 
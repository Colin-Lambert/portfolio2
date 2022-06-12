import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'reactstrap';

const Header = () => {
    return (
        <div>
            <h1>This is the header!</h1>
            <NavList />
        </div>
    );
}

const NavList = () => {
    return (
        <Navbar dark sticky='top'>
            <div className='container'>
                <Nav navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/projects'>Projects</NavLink>
                    </NavItem>
                </Nav>
            </div>
        </Navbar>
    );
}

export default Header;
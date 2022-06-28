import React from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavbarToggler } from 'reactstrap';
import headshot from '../images/cello-headshot.JPG';

const Header = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-2 mt-auto'>
                    <img src={headshot} height='120' width='100' alt='headshot' className='headshot' />
                </div>
                <div className='col-md'>
                    <h1>colin.lambert/front-end-developer</h1>
                </div>
            </div>
            <div className='row'>
                <NavList />
            </div>
        </div>
    );
}

const NavList = () => {
    return (
        <Navbar
            color='dark'
            dark
            sticky='top'
            expand='md'
        >
            <NavbarBrand href='/'>
                CL
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() { }} />
            <Collapse
                isOpen
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

export default Header;
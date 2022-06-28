import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'reactstrap';
import headshot from '../images/cello-headshot.JPG';

const Header = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-2 mt-auto'>
                    <img src={headshot} height='120' width='100' alt='headshot' className='headshot d-md-inline-flex' />
                </div>
                <div className='col-md'>
                    <h1>colin.lambert</h1>
                </div>
            </div>
            <NavList />
        </div>
    );
}

const NavList = () => {
    return (
        <Navbar dark sticky='top' className='mr-auto'>
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
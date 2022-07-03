import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavbarToggler, Container, Row, Col } from 'reactstrap';
import headshot from '../images/cello-headshot.JPG';

const Header = () => {
    return (
        <Container>
            <Row>
                <Col className='col-md-2 mt-auto'>
                    <img src={headshot} height='120' width='100' alt='headshot' className='headshot' />
                </Col>
                <Col className='col-md'>
                    <h1>colin.lambert/front-end-developer</h1>
                </Col>
            </Row>
            <Row>
                <NavList />
            </Row>
        </Container>
    );
}

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

export default Header;
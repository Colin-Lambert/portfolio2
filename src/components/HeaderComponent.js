import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import headshot from '../images/cello-headshot.JPG';
import NavList from './NavListComponent';

const Header = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col
                        className='col-sm-2 xyz-in mr-auto p-2'
                        xyz='fade up-5 big'
                    >
                        <img src={headshot} height='120' width='100' alt='headshot' className='headshot' />
                    </Col>
                    <Col className='col-sm xyz-in p-2' xyz='fade up-5 big'>
                        <span className='header-name'>COLIN LAMBERT</span>
                    </Col>
                </Row>
                <Row>
                    <NavList />
                </Row>
            </Container>
        </div>
    );
}

export default Header;
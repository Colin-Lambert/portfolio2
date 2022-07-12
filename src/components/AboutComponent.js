import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const About = () => {
    return (
        <Container>
            <Row className='item-group' xyz='fade right-5'>
                <Col className='xyz-in d-flex justify-content-center body-content'>This is what I'm about!</Col>
            </Row>
        </Container>
    );
}

export default About;
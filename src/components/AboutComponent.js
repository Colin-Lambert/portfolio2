import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const About = () => {
    return (
        <Container>
            <Row className='item-group' xyz='fade right-5'>
                <Col className='d-md-block d-none' />
                <Col className='xyz-in d-flex justify-content-center body-content'>
                    <p className='about-me'>I am motived and self-starting software engineer with over 9 years of teaching experience, including 3 years in a public school, seeking a front-end developer role. I have a passion for learning, problem-solving, and collaborating with teammates and clients to find the best possible solutions. Experienced in HTML5, CSS3, Javascript, React, and React Native. And yes, I do play cello!</p>
                </Col>
                <Col className='d-md-block d-none' />
            </Row>
        </Container>
    );
}

export default About;
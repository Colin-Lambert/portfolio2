import React from "react";
import { Col, Container, Row } from "reactstrap";

const Home = () => {
    return (
        <Container>
            <Row className='item-group' xyz='fade left-5'>
                <Col />
                <Col className="xyz-in body-content">
                    <h2>Hello, my name is Colin.</h2>
                    <p>I am a freelance front-end web developer based in Phoenix, AZ.</p>
                </Col>
                <Col />
            </Row>
        </Container>
    );
}

export default Home; 
import React from "react";
import { Col, Container, Row } from "reactstrap";

const Home = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col className="d-sm-none col-sm-2" />
                <Col className="d-flex justify-content-center home-content col-sm-8">
                    <h2>Hello, my name is Colin.</h2>
                    <p>I am a freelance front-end web developer based in Phoenix, AZ.</p>
                </Col>
                <Col className="d-sm-none col-sm-2" />
            </Row>
        </Container>
    );
}

export default Home; 
import React from "react";
import { Button, Col, Container, Row } from "reactstrap";

const Footer = () => {
    return (
        <Container
            className="footer xyz-in"
            xyz='fade up-5'
        >
            <Row className="item-group" xyz='delay-2.5 skew-left-2 fade-100% down-5 stagger-2'>
                <Col className="d-flex justify-content-center">
                    <Button className="xyz-in" variant='outline-primary' href='mailto:colin.lambert.dev@gmail.com'>Email</Button>
                    <Button className="xyz-in" variant='outline-secondary' href='https://github.com/Colin-Lambert'>GitHub</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
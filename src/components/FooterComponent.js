import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <Container
            className="footer xyz-in"
            xyz='fade up-5'
        >
            <hr />
            <Row className="item-group" xyz='delay-2.5 skew-left-2 fade-100% down-5 stagger-2'>
                <Col className="d-flex justify-content-center">
                    <a role='button' className="xyz-in btn btn-link" href='mailto:colin.lambert.dev@gmail.com'>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <Button
                        className="xyz-in"
                        variant='outline-secondary'
                        href='https://github.com/Colin-Lambert'
                        target='_blank'
                    >
                        Github
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

{/* <a className="xyz-in" variant='outline-primary' href='mailto:colin.lambert.dev@gmail.com'><i class="fa-regular fa-envelope"></i></a> */ }

{/* <FontAwesomeIcon icon="fa-regular fa-envelope" /> */ }


export default Footer;
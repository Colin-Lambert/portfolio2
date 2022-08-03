import React from "react";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
    return (
        <Container
            className="footer xyz-in"
            xyz='fade up-5'
        >
            <hr />
            <Row className="item-group" xyz='delay-2.5 skew-left-2 fade-100% down-5 stagger-2'>
                <Col className="d-flex mr-auto">
                    <ul>
                        <li>
                            <a
                                className="xyz-in social-link"
                                href='mailto:colin.lambert.dev@gmail.com'
                            >
                                Email
                            </a>
                        </li>
                        <li>
                            <a
                                className="xyz-in social-link"
                                href='https://github.com/Colin-Lambert'
                                target='_blank'
                            >
                                Github
                            </a>
                        </li>
                        <li>
                            <a
                                className="xyz-in social-link"
                                href='https://www.linkedin.com/in/colin-lambert-952a56246/'
                                target='_blank'
                            >
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

{/* <a className="xyz-in" variant='outline-primary' href='mailto:colin.lambert.dev@gmail.com'><i class="fa-regular fa-envelope"></i></a> */ }

{/* <FontAwesomeIcon icon="fa-regular fa-envelope" /> */ }


export default Footer;
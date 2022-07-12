import React from "react";
import { Button, Container } from "reactstrap";

const Footer = () => {
    return (
        <Container
            className="footer xyz-in"
            xyz='fade up-5'
        >
            <h2>This is the footer!</h2>
            <div className="item-group d-flex justify-content-center" xyz='delay-2.5 skew-left-2 fade-100% down-5 stagger-2'>
                <Button className="xyz-in" variant='outline-primary' href='mailto:colin.lambert.dev@gmail.com'>Email</Button>
                <Button className="xyz-in" variant='outline-secondary' href='https://github.com/Colin-Lambert'>GitHub</Button>
            </div>
        </Container>
    );
}

export default Footer;
import React from "react";
import { Button } from "reactstrap";

const Footer = () => {
    return (
        <div className="footer container">
            <h2>This is the footer!</h2>
            <Button variant='outline-primary' href='mailto:colin.lambert.dev@gmail.com'>Email</Button>
            <Button variant='outline-secondary' href='https://github.com/Colin-Lambert'>GitHub</Button>
        </div>
    );
}

export default Footer;
import React from 'react';
import { NavLink } from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const ProjectCard = ({ project }) => {
    if (project) {
        const { image, name, id, description } = project;

        return (
            <Card>
                <NavLink to={`/projects/${id}`}>
                    <CardImg
                        width="100"
                        height="100"
                        src={image}
                        alt={name}
                    />
                    <CardImgOverlay>
                        <CardTitle>{name}</CardTitle>
                    </CardImgOverlay>
                    <p>{description}</p>
                </NavLink>
            </Card>
        );
    }
    return <div />;
}

export default ProjectCard; 
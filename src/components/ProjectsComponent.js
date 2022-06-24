import React from "react";
import { NavLink } from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardTitle, Col, Row } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";

const ProjectsList = (props) => {
    const projects = props.projects;

    return (
        <Row className="ms-auto">
            {projects.map((project) => {
                return (
                    <Col md='5' className="m-4" key={project.id} >
                        <ProjectCard project={project} />
                    </Col>
                )
            })}
        </Row>
    );
}

const ProjectCard = ({ project }) => {
    return (
        <Card>
            <NavLink to={`/projects/${project.id}`}>
                <CardImg
                    width="100%"
                    src={project.image}
                    alt={project.name}
                />
                <CardImgOverlay>
                    <CardTitle>{project.name}</CardTitle>
                </CardImgOverlay>
                <p>{project.description}</p>
            </NavLink>
        </Card>
    );
}

export default ProjectsList;
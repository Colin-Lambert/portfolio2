import React from "react";
import { Col, Row } from "reactstrap";
import ProjectCard from "./ProjectCardComponent";

const ProjectsList = (props) => {
    const projects = props.projects;

    return (
        <Row className="ms-auto">
            {projects.map((project) => {
                return (
                    <Col md='5' className="m-4" key={project.id} >
                        <ProjectCard project={project} />
                    </Col>
                );
            })}
        </Row>
    );
}

export default ProjectsList; 
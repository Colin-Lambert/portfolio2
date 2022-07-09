import React from "react";
import { Col, Row } from "reactstrap";
import ProjectCard from "./ProjectCardComponent";

const ProjectsList = (props) => {
    const projects = props.projects;

    return (
        <Row className="ms-auto">
            {projects.map((project) => {
                return (
                    <Col
                        md='5'
                        className="m-4 xyz-in"
                        xyz='fade up right rotate-right duration-10 ease-out-back stagger'
                        key={project.id}
                    >
                        <ProjectCard project={project} />
                    </Col>
                );
            })}
        </Row>
    );
}

export default ProjectsList; 
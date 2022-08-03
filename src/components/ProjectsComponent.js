import React from "react";
import { Col, Container, Row } from "reactstrap";
import ProjectCard from "./ProjectCardComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";

const ProjectsList = (props) => {
    const projects = props.projects;

    return (
        <Container>
            <Row className="project-zone">
                <Col>
                    <p className="d-flex justify-content-center">
                        Under construction...
                        <FontAwesomeIcon icon={faPersonDigging} />
                    </p>
                </Col>
            </Row>
            <Row className="ms-auto align-items-center">
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
        </Container>
    );
}

export default ProjectsList; 
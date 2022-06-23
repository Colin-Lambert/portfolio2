import React, { Component } from "react";
import { baseUrl } from "../shared/baseUrl";
import { PROJECTS } from "../shared/projects";

const Projects = () => {
    return (
        <div>
            <h2>These are my projects!</h2>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>Hopefully my projects will be here soon.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

class RenderProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
}

export default Projects;
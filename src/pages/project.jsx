import React from "react";
import ProjectCard from "../components/Cards/ProjectCard";
// import { Row, Col } from "react-simple-flex-grid";
import { projectData } from "../static/data/aboutme";
import _ from "lodash";
const Project = () => (
  <div id="project" className="my-3">
    <h1>Portfolios</h1>
    <div className="d-flex justify-content-between">
      {_.map(projectData, p => (
        <>
          <ProjectCard projectData={p} />
        </>
      ))}
    </div>
  </div>
);

export default Project;

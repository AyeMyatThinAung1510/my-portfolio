import React from "react";

const ProjectCard = ({ projectData }) => (
  <div className="project-card-container" key={projectData.id}>
    <a href={projectData.link}>
      <h3 className="ml-3">{projectData.title}</h3>
    </a>
  </div>
);

export default ProjectCard;

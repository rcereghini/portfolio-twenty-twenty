import React from "react";
import "./projectCard.css";

const ProjectCard = props => {
  let { project, box } = props;
  console.log("pc prop", props);
  console.log("project =>", box);
  return (
    <div className="project-card-main">
      <img className="project-card-image" src={box.projectImage}></img>
      <div className="project-card-description">
        <h2>{box.projectTitle}</h2>
        <p>{box.projectDescription}</p>
        <div className="project-card-link-container">
          <a className="project-card-link">DEMO</a>
          <a className="project-card-link">
            <i class="fab fa-github"></i>View Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

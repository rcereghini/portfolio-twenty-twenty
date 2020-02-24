import React from "react";
import "./projectCard.css";

const ProjectCard = props => {
  let { project, box } = props;
  return (
    <div className="project-card-main">
      {box.projectImage ? (
        <img className="project-card-image" src={box.projectImage}></img>
      ) : (
        <span></span>
      )}
      <div className="project-card-description">
        <h2>{box.projectTitle}</h2>
        <p>{box.projectDescription}</p>
        <div className="project-card-link-container">
          {box.projectLink ? (
            <a
              href={box.projectLink}
              target="_blank"
              className="project-card-link"
            >
              DEMO
            </a>
          ) : null}
          {box.projectGithub ? (
            <a
              href={box.projectGithub}
              target="_blank"
              className="project-card-link"
            >
              <i class="fab fa-github"></i>View Github
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import "./projectViewer.css";

const ProjectViewer = props => {
  return (
    <div className="project-viewer-main">
      Project Viewer
      <p>Viewing Box: {props.selectedBox}</p>
    </div>
  );
};

export default ProjectViewer;

import React from "react";
import "./projectViewer.css";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectViewer = props => {
  // const [displayedBox, setDisplayedBox] = useState();

  let { selectedBox, projects } = props;

  console.log("proj viewer props =>", props);
  return (
    <div className="project-viewer-main">
      {selectedBox.boxLocation ? (
        <ProjectCard box={selectedBox}></ProjectCard>
      ) : null}
    </div>
  );
};

export default ProjectViewer;

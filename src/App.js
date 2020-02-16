import React, { useState } from "react";
import Header from "./components/Header/Header";
import ProjectViewer from "./components/ProjectViewer/ProjectViewer";
import ProjectCarousel from "./components/ProjectCarousel/ProjectCarousel";
import EducationCard from "./components/EducationCard/EducationCard";
import ExperienceTicker from "./components/ExperienceTicker/ExperienceTicker";
import WorkHistory from "./components/WorkHistory/WorkHistory";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [selectedBox, setSelectedBox] = useState({});
  const [projectBoxes, setProjectBoxes] = useState([
    {
      projectTitle: "News Feed",
      projectDescription: "News Feed",
      projectImage:
        "https://www.rcereghini.com/static/newsFeed-7ea32f8f4d7f3393faf91795d4faf8df.jpg",
      projectGithub: "",
      projectLink: "https://wonderful-edison-f69832.netlify.com/",
      boxLocation: [-10, 0, 0]
    },
    {
      projectTitle: "Open Gym Finder",
      projectDescription:
        "Full-stack application inteded to be a PWA. Currently in development. Uses React w/ Firebase.",
      projectImage:
        "https://www.rcereghini.com/static/openGymFinder-02857628901a5c48bc4d40a256cfd0fa.jpg",
      projectGithub: "https://github.com/rcereghini/open-gym-finder",
      projectLink: "https://distracted-tesla-7c4b19.netlify.com/",
      boxLocation: [0, 0, 2]
    },
    {
      projectTitle: "Face Finder",
      projectDescription:
        "A facial recognition app using React, Redux, Node.js, Clarifai, Tachyons, Particles, Tilt, and Heroku.",
      projectImage:
        "https://www.rcereghini.com/static/box3-bbe769fb7162b131d01e76e38dc146a0.png",
      projectGithub: "",
      projectLink: "https://facial-recognition-counter.herokuapp.com/",
      boxLocation: [10, 0, 0]
    }
  ]);

  return (
    <div className="App">
      <Header></Header>
      <h2>Projects</h2>
      <ProjectViewer selectedBox={selectedBox} projects={projectBoxes} />
      <ProjectCarousel
        boxes={projectBoxes}
        boxClickCallback={box => {
          console.log("box => ", box);
          setSelectedBox(box);
        }}
      />
      <h2>Work History</h2>
      <WorkHistory />
      <h2>Experience</h2>
      <div className="education-cards">
        <ExperienceTicker
          count={2000}
          label={"hours of study"}
        ></ExperienceTicker>
        <EducationCard
          title="Self-Taught"
          description="Lots of documentation."
        ></EducationCard>
        <EducationCard
          title="Arizona State University"
          description="Bachelor of Interdisciplinary Sciences"
        ></EducationCard>
      </div>
      {/* <h1>About Me?</h1>
      <h1>
        For More Information... To Receive Additional Information. Schedule an
        appointment?
      </h1> */}
    </div>
  );
}

export default App;

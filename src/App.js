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
  const [selectedBox, setSelectedBox] = useState({
    projectTitle: "Select a Box",
    projectDescription: "View my Projects",
    projectImage: "",
    projectGithub: "",
    projectLink: "",
    boxLocation: [],
    boxIdNumber: -99
  });
  const [projectBoxes, setProjectBoxes] = useState([
    {
      projectTitle: "News Feed",
      projectDescription: "News Feed",
      projectImage:
        "https://www.rcereghini.com/static/newsFeed-7ea32f8f4d7f3393faf91795d4faf8df.jpg",
      projectGithub: "https://github.com/rcereghini/news-feed",
      projectLink: "https://wonderful-edison-f69832.netlify.com/",
      boxLocation: [-10, 0, 0],
      boxIdNumber: 1
    },
    {
      projectTitle: "Open Gym Finder",
      projectDescription:
        "Full-stack application inteded to be a PWA. Currently in development. Uses React w/ Firebase.",
      projectImage:
        "https://www.rcereghini.com/static/openGymFinder-02857628901a5c48bc4d40a256cfd0fa.jpg",
      projectGithub: "https://github.com/rcereghini/open-gym-finder",
      projectLink: "https://distracted-tesla-7c4b19.netlify.com/",
      boxLocation: [0, 0, 2],
      boxIdNumber: 2
    },
    {
      projectTitle: "Face Finder",
      projectDescription:
        "A facial recognition app using React, Redux, Node.js, Clarifai, Tachyons, Particles, Tilt, and Heroku.",
      projectImage:
        "https://www.rcereghini.com/static/box3-bbe769fb7162b131d01e76e38dc146a0.png",
      projectGithub: "https://github.com/rcereghini/facial-recognition-counter",
      projectLink: "https://facial-recognition-counter.herokuapp.com/",
      boxLocation: [10, 0, 0],
      boxIdNumber: 3
    }
  ]);

  // setSelectedBox(projectBoxes[0]);

  return (
    <div className="App">
      <Header className="app-header"></Header>
      <ProjectViewer
        selectedBox={selectedBox ? selectedBox : projectBoxes[0]}
        projects={projectBoxes}
      />
      <ProjectCarousel
        boxes={projectBoxes}
        selectedBox={selectedBox ? selectedBox : projectBoxes[0]}
        boxClickCallback={box => {
          console.log("box ==>", box);
          setSelectedBox(box);
        }}
      />
      <WorkHistory />
      <div className="experience">
        <h2 className="section-title">Education</h2>
        <div className="education-cards">
          <ExperienceTicker
            count={2000}
            label={"hours of study"}
          ></ExperienceTicker>
          <EducationCard
            title="Self-Taught"
            description="To include benefits of a self-taught education and my purpose/goals as a software engineer."
          ></EducationCard>
          <EducationCard
            title="Arizona State University"
            description="Bachelor of Interdisciplinary Sciences"
          ></EducationCard>
        </div>
      </div>
      {/* //About Me Section? */}
    </div>
  );
}

export default App;

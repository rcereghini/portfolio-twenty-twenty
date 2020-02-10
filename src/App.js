import React from "react";
import Header from "./components/Header/Header";
import CarouselThree from "./components/CarouselThree/CarouselThree";
import EducationCard from "./components/EducationCard/EducationCard";
import ExperienceTicker from "./components/ExperienceTicker/ExperienceTicker";
import WorkHistory from "./components/WorkHistory/WorkHistory";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h2>Projects</h2>
      <CarouselThree />
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

import React from "react";
import Header from "./components/Header/Header";
import CarouselThree from "./components/CarouselThree/CarouselThree";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CarouselThree />
      <h1>Education</h1>
      <h1>Experience</h1>
      <h1>About Me?</h1>
      <h1>
        For More Information... To Receive Additional Information. Schedule an
        appointment?
      </h1>
    </div>
  );
}

export default App;

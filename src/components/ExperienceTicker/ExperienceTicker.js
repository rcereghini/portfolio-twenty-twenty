import React, { useState, useEffect } from "react";
import "./experienceTicker.css";

const ExperienceTicker = props => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < props.count)
      setTimeout(() => {
        setCount(count + 1);
      }, props.speed);
  });

  return (
    <div className="exp-ticker-main">
      <div className="exp-ticker-inner">
        <p className="exp-ticker-count">
          {count}
          {!(count < props.count) ? <span>+</span> : null}
        </p>
        <p className="exp-ticker-label">{props.label}</p>
      </div>
    </div>
  );
};

export default ExperienceTicker;

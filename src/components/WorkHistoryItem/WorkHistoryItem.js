import React, { useState } from "react";
import "./workHistoryItem.css";

const WorkHistoryItem = props => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  return (
    <div className="work-history-item">
      <h3
        className="work-history-title"
        onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
      >
        {props.title}
      </h3>
      {isDescriptionVisible ? (
        <p className="work-history-description">{props.description}</p>
      ) : (
        <span className="work-history-description-hidden"></span>
      )}
    </div>
  );
};

export default WorkHistoryItem;

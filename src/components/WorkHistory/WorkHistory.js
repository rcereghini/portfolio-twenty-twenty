import React from "react";
import WorkHistoryItem from "../WorkHistoryItem/WorkHistoryItem";
import "./workHistory.css";

const workHistoryRecords = [
  {
    title: "Petroleum Rx, Web Developer",
    description: "Did wonderful things and greatness."
  },
  {
    title: "Neureka, Web Developer",
    description: "Did wonderful things and greatness."
  },
  {
    title: "Clear Title, Digital Marketing",
    description: "Did wonderful things and greatness."
  }
];

const WorkHistory = () => {
  return (
    <div className="work-history-main">
      {workHistoryRecords.map(record => {
        const { title, description } = record;
        return (
          <WorkHistoryItem
            title={title}
            description={description}
          ></WorkHistoryItem>
        );
      })}
    </div>
  );
};

export default WorkHistory;

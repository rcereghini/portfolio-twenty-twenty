import React from "react";
import "./educationCard.css";

const EducationCard = props => {
  const { title, description } = props;
  return (
    <div className="education-card-main">
      <h2 className="education-card-title">{title}</h2>
      <p className="education-card-description">{description}</p>
    </div>
  );
};

export default EducationCard;

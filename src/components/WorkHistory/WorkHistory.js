import React from "react";
import WorkHistoryItem from "../WorkHistoryItem/WorkHistoryItem";
import "./workHistory.css";

const workHistoryRecords = [
  {
    title: "Petroleum Rx, Web Developer",
    description:
      "Working on accounting web application for petroleum jobbers.  Angular.js to Angular Conversion - Web Components - Vue, VueX, Vue Router - DataTables - AG Grid - Highcharts - ES6 JavaScript - SQL "
  },
  {
    title: "Freelance Web Development",
    description: "React, Shopify"
  },
  {
    title: "Neureka, Web Developer",
    description:
      "Python/Django and React Native Full-Stack development for a restaurant review and dinner scheduling application. Coordinated remotely with team. "
  },
  {
    title: "Clear Title, Digital Marketing",
    description:
      "HTML - CSS - JavaScript - React - WordPress - Wix - HTML Emails - Salesforce Customizations - Process Automation - SEO - Facebook Ads - Social Media - Adobe Photoshop/Illustrator/InDesign - Copywriting - SproutSocial - Zapier"
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

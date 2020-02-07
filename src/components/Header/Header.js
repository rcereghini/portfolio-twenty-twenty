import React from "react";
import ContactInfo from "../ContactInfo/ContactInfo";
import "./header.css";

import avatar from "../../assets/avatar.jpg";

const Header = () => {
  return (
    <div className="header-main">
      <img src={avatar} className="avatar-image"></img>
      <div className="logo-main">
        <p>R</p>
        <p>R</p>
        <p>R</p>
        <p>R</p>
        <p>R</p>
        <p>R</p>
        <p>R</p>
        <p>R</p>
        <p>R</p>
        <p>R</p>
        <p>R</p>
        <p>R</p>
        <p>R</p>
        <p>R</p>
      </div>
      <ContactInfo></ContactInfo>
    </div>
  );
};

export default Header;

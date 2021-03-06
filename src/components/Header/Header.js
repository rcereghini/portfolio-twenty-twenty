import React from "react";
import ContactInfo from "../ContactInfo/ContactInfo";
import htmlLogo from "../../assets/logos/html.png";
import sqlLogo from "../../assets/logos/mysql.svg";
import cssLogo from "../../assets/logos/css.svg";
import csharpLogo from "../../assets/logos/csharp.png";
import firebaseLogo from "../../assets/logos/firebase.png";
import jsLogo from "../../assets/logos/js.png";
import vueLogo from "../../assets/logos/vue.png";
import nodeLogo from "../../assets/logos/node.png";
import reactLogo from "../../assets/logos/react.png";
import reduxLogo from "../../assets/logos/Redux.png";
import "./header.css";

import avatar from "../../assets/avatar.jpg";

const Header = () => {
  return (
    <div className="header-main">
      <img src={avatar} className="avatar-image"></img>
      <div className="logo-main">
        <img className="logo" src={htmlLogo}></img>
        <img className="logo" src={cssLogo}></img>
        <img className="logo" src={jsLogo}></img>
        <img className="logo" src={reactLogo}></img>
        <img className="logo" src={reduxLogo}></img>
        <img className="logo" src={vueLogo}></img>
        <img className="logo" src={nodeLogo}></img>
        <img className="logo" src={firebaseLogo}></img>
        <img className="logo" src={csharpLogo}></img>
        <img className="logo" src={sqlLogo}></img>
        {/* <img className="logo-main" src={vueLogo}></img>
        <img className="logo-main" src={vueLogo}></img>
        <img className="logo-main" src={vueLogo}></img>
        <img className="logo-main" src={vueLogo}></img>
        <img className="logo-main" src={vueLogo}></img>
        <img className="logo-main" src={vueLogo}></img>
        <img className="logo-main" src={vueLogo}></img> */}
      </div>
      <div className="header-contact-info">
        <ContactInfo></ContactInfo>
      </div>
    </div>
  );
};

export default Header;

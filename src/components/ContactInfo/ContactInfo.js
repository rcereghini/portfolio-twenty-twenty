import React from "react";
import "./contactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info-main">
      {/* <h2 className="contact-info-title">Contact Info</h2> */}
      {/* <hr></hr> */}
      <div className="contact-table">
        <div>
          <div style={{ display: "flex" }}>
            <a
              style={{ width: "100%", marginRight: ".3em" }}
              href="tel:4804449873"
            >
              <i class="fas fa-phone"></i>
            </a>
          </div>

          <div>
            <p>480.444.9873</p>
          </div>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <a
              style={{ width: "100%", marginRight: ".3em" }}
              href="mailto:rcereghini@gmail.com"
            >
              <i class="fas fa-envelope"></i>
            </a>
          </div>
          <div>
            <p>rcereghini@gmail.com</p>
          </div>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <a
              style={{ width: "100%", marginRight: ".3em" }}
              href="github.com/rcereghini"
            >
              <i class="fab fa-github"></i>
            </a>
          </div>
          <div>
            <p>github.com/rcereghini</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

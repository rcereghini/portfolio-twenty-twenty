import React from "react";
import "./contactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info-main">
      {/* <h2 className="contact-info-title">Contact Info</h2> */}
      {/* <hr></hr> */}
      <table className="contact-table">
        <tbody>
          <tr>
            <td>
              <i class="fas fa-phone"></i>
            </td>
            <td>
              <p>480.444.9873</p>
            </td>
          </tr>
          <tr>
            <td>
              <i class="fas fa-envelope"></i>
            </td>
            <td>
              <p>rcereghini@gmail.com</p>
            </td>
          </tr>
          <tr>
            <td>
              <i class="fab fa-github"></i>
            </td>
            <td>
              <p>github.com/rcereghini</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactInfo;

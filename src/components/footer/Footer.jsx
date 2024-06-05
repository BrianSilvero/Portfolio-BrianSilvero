import React from "react";
import "../footer/Footer.css";
import logo from "../../assets/logo-portfolio.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo_navbar">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Footer;

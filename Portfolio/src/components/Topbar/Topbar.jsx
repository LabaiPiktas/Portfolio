import React from "react";
import { Link } from "react-router-dom";
import { topbarNavigationItems } from "../../routes/const";
import { FaPhone, FaEnvelope, FaFacebook } from "react-icons/fa";
import LogoImage from "../Logo/LogoImage";
import "./Topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar-wrapper">
      <div className="animated-gradient-background"></div>
      <nav className="navigation">
        <div className="logo-container">
          <LogoImage />
        </div>
        <div className="navigation-items">
          {topbarNavigationItems.map((navItem) => (
            <Link to={navItem.route} key={navItem.title}>
              {navItem.title}
            </Link>
          ))}
        </div>
        <div className="contact-links">
          <a href="tel:+370 686 53020" className="contact-link">
            <FaPhone />
          </a>
          <a href="mailto:labaipiktas@gmail.com" className="contact-link">
            <FaEnvelope />
          </a>
          <a
            href="https://www.facebook.com/Teodoras.Gulbis"
            className="contact-link"
          >
            <FaFacebook />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;

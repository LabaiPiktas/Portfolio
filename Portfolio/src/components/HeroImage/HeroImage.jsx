import React from "react";
import heroImage from "../img/Web_Photo_Editor.jpg";
import "../HeroImage/HeroImage.css";

const HeroImage = () => {
  return <img className="hero" src={heroImage} alt="Hero" />;
};

export default HeroImage;

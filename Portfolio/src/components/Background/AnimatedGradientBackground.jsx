import React from "react";
import "./AnimatedGradientBackground.css";
import HeroImage from "../HeroImage/HeroImage";
import Text from "./Text";

class AnimatedGradientBackground extends React.Component {
  render() {
    return (
      <div className="animated-gradient-background">
        <div className="content-wrapper">
          <div>
            <HeroImage />
          </div>
          <Text />
        </div>
      </div>
    );
  }
}

export default AnimatedGradientBackground;

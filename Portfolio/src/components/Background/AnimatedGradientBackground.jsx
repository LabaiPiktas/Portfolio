import React from "react";
import PropTypes from "prop-types";
import "./AnimatedGradientBackground.scss";
import HeroImage from "../HeroImage/HeroImage";
import Text from "./Text";

class AnimatedGradientBackground extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="animated-gradient-background">
        <div className="content-wrapper">
          
          
          {children}
        </div>
      </div>
    );
  }
}

AnimatedGradientBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AnimatedGradientBackground;

import React from "react";
import "../Main/Main.scss";
import AnimatedGradientBackground from "../../components/Background/AnimatedGradientBackground";
import HeroImage from "../../components/HeroImage/HeroImage";
import Text from "../../components/Text/Text";

const Main = () => {
  return (
    <div>
      <AnimatedGradientBackground>
        <Text />
        <HeroImage />
      </AnimatedGradientBackground>
    </div>
  );
};

export default Main;

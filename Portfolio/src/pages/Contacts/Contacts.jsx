import React from "react";
import "../Contacts/Contacts.scss";
import AnimatedGradientBackground from "../../components/Background/AnimatedGradientBackground";

const Contacts = () => {
  return (
    <div>
      <AnimatedGradientBackground>
        <div className="kontaktai">
          <h1>Kontaktai</h1>
          <h2>Tel.: +370 686 53020</h2>
          <h3>El.Paštas: labaipiktas@gmail.com</h3>
        </div>
        
      </AnimatedGradientBackground>
    </div>
  );
};

export default Contacts;

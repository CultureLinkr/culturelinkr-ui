import React from 'react';
import '../styles/HeroSection.css'; // Create this CSS file for styling

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Transform Your Workplace Culture with CultureLinkr</h1>
        <p>Enhance employee engagement, inclusivity, and productivity with our innovative platform.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;

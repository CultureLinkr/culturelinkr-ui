import React from 'react';
import '../styles/HowItWorksSection.css'; // Create this CSS file for styling

const HowItWorksSection = () => {
  return (
    <div className="how-it-works-container">
      <h2>How It Works</h2>
      <ol className="steps-list">
        <li>Step 1: Sign up and create your account.</li>
        <li>Step 2: Set up your engagement programs and inclusivity surveys.</li>
        <li>Step 3: Track progress and view insights in real-time.</li>
        <li>Step 4: Enhance and adapt your strategies based on data.</li>
      </ol>
    </div>
  );
};

export default HowItWorksSection;

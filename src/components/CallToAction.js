import React from 'react';
import '../styles/CallToAction.css'; // Create this CSS file for styling

const CallToAction = () => {
  return (
    <div className="cta-container">
      <h2>Ready to Revolutionize Your Workplace?</h2>
      <button className="cta-button"><a href="/schedule-demo">Book a Demo</a></button>
    </div>
  );
};

export default CallToAction;

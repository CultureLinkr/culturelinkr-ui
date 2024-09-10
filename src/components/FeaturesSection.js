import React from 'react';
import '../styles/FeaturesSection.css'; // Create this CSS file for styling

const features = [
  { id: 1, title: 'Engagement Programs', description: 'Create and manage programs to boost employee engagement.' },
  { id: 2, title: 'Inclusivity Insights', description: 'Analyze and enhance workplace inclusivity with our advanced tools.' },
  { id: 3, title: 'Real-time Analytics', description: 'Track and measure the impact of your programs with real-time data.' },
];

const FeaturesSection = () => {
  return (
    <div className="features-container">
      <h2>Core Features</h2>
      <div className="features-grid">
        {features.map(feature => (
          <div key={feature.id} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;

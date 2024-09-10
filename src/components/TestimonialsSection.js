import React from 'react';
import '../styles/TestimonialsSection.css'; // Create this CSS file for styling

const testimonials = [
  { id: 1, name: 'Jane Doe', feedback: 'CultureLinkr has significantly improved our team’s engagement and morale.' },
  { id: 2, name: 'John Smith', feedback: 'An essential tool for any company looking to enhance their workplace culture.' },
];

const TestimonialsSection = () => {
  return (
    <div className="testimonials-container">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <p>"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;

import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Tagline Section */}
        <div className="footer-brand">
          <h2>CultureLinkr</h2>
          <p>Connecting Culture, Empowering Teams</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/schedule-demo">Schedule a Demo</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@culturelinkr.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 1234 Market Street, San Francisco, CA</p>
        </div>

        {/* Social Media Links Section */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CultureLinkr. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

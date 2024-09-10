import React from "react";
import "../styles/AboutPage.css";
import Layout from "./Layout";

const AboutPage = () => {
  return (
    <Layout>
      <div className="about-page">
        {/* About Header Section */}
        <header className="about-header">
          <h1>About CultureLinkr</h1>
          <p>
            We help organizations create inclusive workplaces where employees
            thrive. Learn more about our journey and values.
          </p>
        </header>

        {/* Mission Statement Section */}
        <section className="mission-statement">
          <h2>Our Mission</h2>
          <p>
            At CultureLinkr, our mission is to bridge the gap between employees
            and organizations by fostering a culture of inclusivity, engagement,
            and mutual growth.
          </p>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="team-member-1.jpg" alt="Team Member 1" />
              <h3>Pragati Kumar</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="team-member-2.jpg" alt="Team Member 2" />
              <h3>John Doe</h3>
              <p>Head of Product</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>

        {/* How We Work Section */}
        <section className="how-we-work">
          <h2>How We Work</h2>
          <p>
            We combine technology with empathy, creating solutions that are not
            just functional but also intuitive and user-friendly. Our team is
            dedicated to continuously improving the experience for both
            employees and employers.
          </p>
        </section>

        {/* Call to Action Section */}
        <section className="call-to-action">
          <h2>Join Us on Our Journey</h2>
          <button className="cta-button">Get Started</button>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;

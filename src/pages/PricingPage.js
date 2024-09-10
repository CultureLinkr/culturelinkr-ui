import React from "react";
import "../styles/PricingPage.css";
import Layout from "./Layout";

const PricingPage = () => {
  return (
    <Layout>
      <div className="pricing-page">
        <header className="pricing-header">
          <h1>Choose the Right Plan for You</h1>
          <p>
            Find the perfect plan that meets your needs and start boosting your
            workplace culture today.
          </p>
        </header>

        <section className="pricing-cards">
          <div className="pricing-card">
            <h3>Standard</h3>
            <p className="price">$99 / month</p>
            <ul>
              <li>Access to core features</li>
              <li>Basic analytics</li>
              <li>Email support</li>
            </ul>
            <button className="select-plan">Select Plan</button>
          </div>

          <div className="pricing-card highlighted">
            <h3>Premium</h3>
            <p className="price">$199 / month</p>
            <ul>
              <li>All Standard features</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
              <li>Custom surveys</li>
            </ul>
            <button className="select-plan">Select Plan</button>
          </div>

          <div className="pricing-card">
            <h3>Enterprise Premium</h3>
            <p className="price">$699 / month</p>
            <ul>
              <li>All Premium features</li>
              <li>Dedicated account manager</li>
              <li>Advanced customization</li>
              <li>24/7 support</li>
            </ul>
            <button className="select-plan">Select Plan</button>
          </div>
        </section>

        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h4>What is the difference between Standard and Premium?</h4>
            <p>
              Premium offers advanced analytics, priority support, and custom
              surveys, which are not available in the Standard plan.
            </p>
          </div>
          <div className="faq-item">
            <h4>Can I change my plan later?</h4>
            <p>
              Yes, you can upgrade or downgrade your plan at any time from your
              account settings.
            </p>
          </div>
        </section>

        <section className="call-to-action">
          <h2>Ready to get started?</h2>
          <button className="cta-button">Get Started Today</button>
        </section>
      </div>
    </Layout>
  );
};

export default PricingPage;

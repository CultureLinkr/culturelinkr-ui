import React from "react";
import "../styles/PrivacyPolicy.css";
import Layout from "./Layout";

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <div className="privacy-policy">
        {/* Header Section */}
        <header className="privacy-header">
          <h1>Privacy Policy</h1>
          <p>
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your information.
          </p>
        </header>

        {/* Content Sections */}
        <section className="privacy-section">
          <h2>Introduction</h2>
          <p>
            Welcome to CultureLinkr. We are committed to protecting your
            personal information and your right to privacy. This policy explains
            what information we collect and how we use it.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Data Collection</h2>
          <p>
            We collect information that you provide directly to us, such as when
            you create an account, fill out a form, or contact us. We also
            collect information automatically as you navigate through our site.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Use of Information</h2>
          <p>
            We use your information to provide, maintain, and improve our
            services, to communicate with you, and for security and fraud
            prevention purposes.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Sharing of Information</h2>
          <p>
            We do not share your personal information with third parties except
            as necessary to provide our services, comply with the law, or
            protect our rights.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Data Security</h2>
          <p>
            We take data security seriously and use industry-standard measures
            to protect your information from unauthorized access, use, or
            disclosure.
          </p>
        </section>

        <section className="privacy-section">
          <h2>User Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal
            information, as well as the right to object to or restrict our use
            of your information.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new policy on our site.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Contact Information</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at support@culturelinkr.com.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;

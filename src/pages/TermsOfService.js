import React from "react";
import "../styles/TermsOfService.css";
import Layout from "./Layout";

const terms = [
  {
    id: 1,
    name: "Introduction",
    feedback: `Welcome to CultureLinkr. By accessing or using our services, you
            agree to comply with and be bound by these Terms of Service. Please
            read them carefully`,
  },
  {
    id: 2,
    name: "User Responsibilities",
    feedback: `Users must ensure that any information provided is accurate and kept
            up-to-date. Misuse of the site or its resources is strictly
            prohibited.`,
  },
  {
    id: 3,
    name: "Account Terms",
    feedback: `To access certain features of our services, you may need to create
            an account. You are responsible for safeguarding your account
            credentials and all activities under your account.`,
  },
  {
    id: 4,
    name: "Service Availability",
    feedback: `We aim to keep our services available 24/7, but we cannot guarantee
        uninterrupted access due to maintenance, updates, or unforeseen
        circumstances.`,
  },
  {
    id: 5,
    name: "Limitations of Liability",
    feedback: `CultureLinkr is not liable for any damages resulting from the use or
            inability to use our services. Use our services at your own risk.`,
  },
  {
    id: 6,
    name: "Termination",
    feedback: `We reserve the right to terminate or suspend your access to our
            services at any time, with or without notice, for violating these
            terms.`,
  },
  {
    id: 7,
    name: "Changes to the Terms",
    feedback: `We may update these Terms of Service from time to time. Any changes
            will be posted on this page, and your continued use of our services
            will constitute acceptance of the new terms.`,
  },
  {
    id: 8,
    name: "Contact Information",
    feedback: `If you have any questions about these Terms of Service, please
            contact us at support@culturelinkr.com.`,
  },
];

const TermsOfService = () => {
  return (
    <Layout>
      <div className="terms-of-service">
        {/* Header Section */}
        <header className="terms-header">
          <h1>Terms of Service</h1>
          <p>
            These Terms of Service outline the rules and regulations for the use
            of CultureLinkr's website and services.
          </p>
        </header>
        {terms.map((testimonial) => (
          <section key={testimonial.id} className="terms-section">
            <h2>{testimonial.name}</h2>
            <p>{testimonial.feedback}</p>
          </section>
        ))}
      </div>
    </Layout>
  );
};

export default TermsOfService;

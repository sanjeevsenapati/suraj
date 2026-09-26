import React from 'react';
import './CTABanner.css';

const CTABanner: React.FC = () => {
  return (
    <section className="cta-banner-section">
      <div className="cta-banner-container">
        <div className="cta-glow-bg"></div>
        <div className="cta-banner-content">
          <h2 className="cta-title">
            READY TO UNLOCK <br />
            <span className="text-gradient">YOUR POTENTIAL?</span>
          </h2>
          <p className="cta-subtitle">
            Join Suraj today and transform your physique, your mindset, and your life.
          </p>
          <a href="#contact" className="btn btn-primary btn-large btn-glow">
            START YOUR JOURNEY
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;

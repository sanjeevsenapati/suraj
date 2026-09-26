import React from 'react';
import { siteConfig } from '../data/config';
import './Benefits.css';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="section benefits-section">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="section-title mb-2">FITNESS CHANGES MORE THAN YOUR BODY</h2>
        </div>

        <div className="benefits-grid">
          {siteConfig.benefits.map((benefit, index) => (
            <div key={index} className="benefit-card glass-card">
              <h4 className="benefit-title">{benefit.title}</h4>
              <p className="benefit-desc">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

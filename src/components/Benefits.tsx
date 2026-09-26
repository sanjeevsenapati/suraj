import React from 'react';
import { siteConfig } from '../data/config';
import './Benefits.css';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="section benefits-section">
      <div className="benefits-bg"></div>
      <div className="container relative z-1">
        <div className="text-center mb-8">
          <h2 className="section-title mb-2">FITNESS CHANGES MORE THAN YOUR BODY</h2>
          <p className="benefits-subtitle">It transforms your mind, your confidence, and your life.</p>
        </div>

        <div className="benefits-grid">
          {siteConfig.benefits.map((benefit, index) => (
            <div key={index} className="benefit-card cinematic-glass-card">
              <div className="benefit-number">0{index + 1}</div>
              <div className="benefit-content">
                <h4 className="benefit-title">{benefit.title}</h4>
                <p className="benefit-desc">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

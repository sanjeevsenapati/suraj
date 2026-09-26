import React from 'react';
import './Transformations.css';

const Transformations: React.FC = () => {
  return (
    <section id="transformations" className="section transform-section">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="section-title mb-2">YOUR JOURNEY STARTS WITH ONE DECISION</h2>
          <p className="text-secondary">Real people. Real effort. Real results.</p>
        </div>

        <div className="transform-placeholder glass-card">
          <div className="transform-grid">
            <div className="transform-images">
              <div className="image-placeholder before">
                <span>BEFORE</span>
              </div>
              <div className="image-placeholder after">
                <span>AFTER</span>
              </div>
            </div>
            
            <div className="transform-content">
              <h3 className="text-accent mb-2">CLIENT STORY</h3>
              <p className="mb-4">
                <em>"Replace this with a real client transformation, with permission."</em>
              </p>
              
              <ul className="transform-details">
                <li><strong>Goal:</strong> [Client Goal]</li>
                <li><strong>Duration:</strong> [Timeframe]</li>
                <li><strong>Progress:</strong> [Key Achievement]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformations;

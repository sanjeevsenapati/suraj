import React, { useState } from 'react';
import { siteConfig } from '../data/config';
import './Goals.css';

const Goals: React.FC = () => {
  const [activeGoal, setActiveGoal] = useState<string | null>(null);

  const toggleGoal = (id: string) => {
    if (activeGoal === id) {
      setActiveGoal(null);
    } else {
      setActiveGoal(id);
    }
  };

  return (
    <section id="goals" className="section goals-section">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="section-title mb-2">WHAT'S YOUR GOAL?</h2>
          <p className="text-secondary">Select a goal to learn more about our approach.</p>
        </div>

        <div className="goals-grid">
          {siteConfig.goals.map((goal) => (
            <div key={goal.id} className="goal-card glass-card">
              <div className="goal-icon text-accent">{goal.icon}</div>
              <h3 className="goal-title">{goal.title}</h3>
              <p className="goal-desc">{goal.description}</p>
              
              <button 
                className="btn btn-outline goal-btn mt-3"
                onClick={() => toggleGoal(goal.id)}
              >
                {activeGoal === goal.id ? 'Close' : 'Learn More'}
              </button>

              <div className={`goal-details ${activeGoal === goal.id ? 'active' : ''}`}>
                <div className="goal-details-content">
                  <h4 className="text-accent mb-2">Recommended Approach</h4>
                  <p>{goal.details}</p>
                  <p className="disclaimer mt-3">
                    <em>*General educational information.</em>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;

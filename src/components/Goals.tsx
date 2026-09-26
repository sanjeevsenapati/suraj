import React, { useState } from 'react';
import { siteConfig } from '../data/config';
import './Goals.css';

import chestImg from '../assets/chest.jpg';
import backImg from '../assets/back.jpg';
import legsImg from '../assets/legs.jpg';
import shouldersImg from '../assets/shoulders.jpg';
import coreImg from '../assets/core.jpg';
import generalImg from '../assets/trainer-about.jpg';

const goalImages: Record<string, string> = {
  'fat-loss': coreImg,
  'muscle-building': chestImg,
  'strength': legsImg,
  'general-fitness': generalImg,
  'weight-gain': backImg,
  'flexibility-mobility': shouldersImg
};

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
          <p className="text-secondary">Select a path to unlock your potential.</p>
        </div>

        <div className="goals-grid">
          {siteConfig.goals.map((goal) => (
            <div 
              key={goal.id} 
              className={`goal-card cinematic-card ${activeGoal === goal.id ? 'expanded' : ''}`}
              onClick={() => toggleGoal(goal.id)}
            >
              <div 
                className="goal-bg-image" 
                style={{ backgroundImage: `url(${goalImages[goal.id] || chestImg})` }}
              ></div>
              <div className="goal-overlay"></div>
              
              <div className="goal-content">
                <div className="goal-icon-glow">{goal.icon}</div>
                <h3 className="goal-title">{goal.title}</h3>
                <p className="goal-desc">{goal.description}</p>
                
                <div className="goal-details-hidden">
                  <div className="goal-divider"></div>
                  <h4 className="text-accent mb-2 text-sm">THE APPROACH</h4>
                  <p className="text-sm">{goal.details}</p>
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

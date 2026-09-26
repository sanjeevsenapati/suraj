import React from 'react';
import { siteConfig } from '../data/config';
import './WorkoutSection.css';

const WorkoutSection: React.FC = () => {
  return (
    <section id="workouts" className="section workouts-section">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="section-title mb-2">TRAIN WITH PURPOSE</h2>
          <p className="text-secondary">Basic workout structures to start your journey.</p>
        </div>

        <div className="workouts-grid">
          {siteConfig.workouts.map((workout, index) => (
            <div key={index} className="workout-card glass-card">
              <h3 className="mb-3 text-accent">{workout.focus.toUpperCase()} {workout.level.toUpperCase()}</h3>
              <div className="workout-meta mb-3">
                <span className="meta-tag">Level: {workout.level}</span>
                <span className="meta-tag">Focus: {workout.focus}</span>
                <span className="meta-tag">Volume: {workout.sets}</span>
              </div>
              <ul className="exercise-list mb-4">
                {workout.exercises.map((ex, i) => (
                  <li key={i}>{ex}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <h4 className="mb-3">NEED A PERSONALIZED PLAN?</h4>
          <a href="#contact" className="btn btn-primary">Contact Suraj</a>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSection;

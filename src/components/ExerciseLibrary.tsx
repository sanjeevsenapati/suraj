import React, { useState } from 'react';
import { siteConfig } from '../data/config';
import './ExerciseLibrary.css';

// Import the generated images
import chestImg from '../assets/chest.jpg';
import backImg from '../assets/back.jpg';
import legsImg from '../assets/legs.jpg';
import shouldersImg from '../assets/shoulders.jpg';
import coreImg from '../assets/core.jpg';

const groupImages: Record<string, string> = {
  'Chest': chestImg,
  'Back': backImg,
  'Legs': legsImg,
  'Shoulders': shouldersImg,
  'Core': coreImg
};

const ExerciseLibrary: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const muscleGroups = ['All', ...Array.from(new Set(siteConfig.exercises.map(ex => ex.group)))];

  const filteredExercises = filter === 'All' 
    ? siteConfig.exercises 
    : siteConfig.exercises.filter(ex => ex.group === filter);

  return (
    <section id="exercises" className="section exercise-section">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="section-title mb-2">EXERCISE LIBRARY</h2>
          <p className="text-secondary">Explore basic movements and mechanics.</p>
        </div>

        <div className="filter-container mb-4 text-center">
          {muscleGroups.map(group => (
            <button 
              key={group}
              className={`filter-btn ${filter === group ? 'active' : ''}`}
              onClick={() => setFilter(group)}
            >
              {group}
            </button>
          ))}
        </div>

        <div className="exercise-grid">
          {filteredExercises.map((ex, index) => (
            <div key={index} className="exercise-card glass-card">
              <div className="exercise-image-wrapper mb-3">
                <img src={groupImages[ex.group] || chestImg} alt={ex.name} className="exercise-image" />
              </div>
              <h4 className="exercise-name">{ex.name}</h4>
              <div className="exercise-tags mb-3">
                <span className="tag group-tag">{ex.group}</span>
                <span className="tag diff-tag">{ex.difficulty}</span>
                <span className="tag equip-tag">{ex.equipment}</span>
              </div>
              <div className="exercise-info">
                <p><strong>Benefits:</strong> {ex.benefits}</p>
                <p><strong>Form:</strong> {ex.instructions}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExerciseLibrary;

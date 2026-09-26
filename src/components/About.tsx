import React from 'react';
import './About.css';
import trainerImg from '../assets/trainer.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img src={trainerImg} alt="Suraj - Gym Trainer" className="about-image" />
            <div className="experience-badge glass-card">
              <span className="badge-title">100%</span>
              <span className="badge-subtitle">Personal Attention</span>
            </div>
          </div>
          
          <div className="about-content">
            <h3 className="section-subtitle text-accent">Meet Your Trainer</h3>
            <h2 className="section-title mb-4">Gym Trainer & Nutritionist</h2>
            
            <p className="about-quote mb-4">
              "I believe fitness is not about becoming someone else. It's about becoming a stronger, healthier and more confident version of yourself."
            </p>
            
            <p className="about-text mb-4">
              I specialize in helping clients transform their bodies and minds through disciplined training and smart nutrition. Whether your goal is to build muscle, lose fat, or improve your overall lifestyle, I provide the guidance and support you need to succeed.
            </p>
            
            <ul className="specialties-list mb-6">
              <li>Workout planning</li>
              <li>Strength training</li>
              <li>Fat loss</li>
              <li>Muscle building</li>
              <li>General fitness</li>
              <li>Nutrition guidance</li>
              <li>Lifestyle improvement</li>
              <li>Sustainable fitness habits</li>
            </ul>
            
            <div className="about-cta">
              <a href="#contact" className="btn btn-outline">Book a Session</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { siteConfig } from '../data/config';
import './Hero.css';
import heroImg from '../assets/trainer-hero.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background" style={{ backgroundImage: `url(${heroImg})` }}></div>
      <div className="hero-overlay"></div>
      
      <div className="container hero-content animate-fade-in-up">
        <h1 className="hero-title text-accent mb-2">
          {siteConfig.heroHeading.split('.').map((line, i, arr) => (
            <React.Fragment key={i}>
              {line}{i < arr.length - 1 ? '.' : ''}<br/>
            </React.Fragment>
          ))}
        </h1>
        
        <h2 className="hero-subtitle mb-3">{siteConfig.heroSubheading}</h2>
        
        <p className="hero-desc mb-4">{siteConfig.heroDescription}</p>
        
        <div className="hero-cta mb-6">
          <a href="#contact" className="btn btn-primary">Start Training</a>
          <a href="#about" className="btn btn-secondary">Explore Fitness</a>
        </div>
        
        <div className="hero-stats">
          {siteConfig.heroStats.map((stat, i) => (
            <div key={i} className="stat-item glass-card">
              <span className="stat-value text-accent">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="scroll-indicator animate-pulse">
        <span>↓</span>
      </div>
    </section>
  );
};

export default Hero;

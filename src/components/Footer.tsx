import React from 'react';
import { siteConfig } from '../data/config';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo mb-2">SURAJ FITNESS</h2>
            <p className="footer-tagline text-accent mb-4">TRAIN • EAT • RECOVER • GROW</p>
            
            <div className="social-links">
              <a href={siteConfig.contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
              <a href={siteConfig.contact.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">YT</a>
              <a href={siteConfig.contact.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">FB</a>
              <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">WA</a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="mb-3">Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#workouts">Workouts</a></li>
              <li><a href="#exercises">Exercises</a></li>
              <li><a href="#nutrition">Nutrition</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-disclaimer">
            <p className="text-secondary text-sm">
              "Fitness and nutrition information on this website is for general educational purposes. Individual results vary. Consult an appropriate healthcare professional where necessary."
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Suraj Fitness. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

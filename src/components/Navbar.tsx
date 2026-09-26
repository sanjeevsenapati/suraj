import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/config';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Goals', href: '#goals' },
    { name: 'Workouts', href: '#workouts' },
    { name: 'Exercises', href: '#exercises' },
    { name: 'Nutrition', href: '#nutrition' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          <span className="logo-main">{siteConfig.trainerName}</span>
          <span className="logo-sub">{siteConfig.tagline}</span>
        </a>
        
        <div className="nav-right">
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setMobileMenuOpen(false)}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

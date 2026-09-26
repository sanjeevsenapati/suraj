import React, { useState } from 'react';
import { siteConfig } from '../data/config';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    goal: '',
    preference: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thanks for your interest! Suraj will contact you soon.");
    setFormData({ name: '', phone: '', email: '', goal: '', preference: '', message: '' });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="section-title mb-2">READY TO START?</h2>
            <h3 className="text-accent mb-4">Let's build a plan around your goal.</h3>
            
            <p className="mb-6">
              Take the first step towards a stronger, healthier you. Fill out the form or reach out directly through the options below.
            </p>
            
            <div className="quick-contacts">
              <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="contact-card glass-card">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>WhatsApp</h4>
                  <p className="text-secondary">Message directly</p>
                </div>
              </a>
              
              <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="contact-card glass-card">
                <span className="contact-icon">📞</span>
                <div>
                  <h4>Call</h4>
                  <p className="text-secondary">{siteConfig.contact.phone}</p>
                </div>
              </a>
              
              <a href={siteConfig.contact.instagram} target="_blank" rel="noreferrer" className="contact-card glass-card">
                <span className="contact-icon">📸</span>
                <div>
                  <h4>Instagram</h4>
                  <p className="text-secondary">@surajfitness</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="contact-form-wrapper glass-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Your email address" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your phone number" />
                </div>
                <div className="form-group">
                  <label htmlFor="goal">Main Goal</label>
                  <select id="goal" name="goal" required value={formData.goal} onChange={handleChange}>
                    <option value="" disabled>Select your goal</option>
                    <option value="Fat Loss">Fat Loss</option>
                    <option value="Muscle Building">Muscle Building</option>
                    <option value="Strength">Strength</option>
                    <option value="Weight Gain">Weight Gain</option>
                    <option value="General Fitness">General Fitness</option>
                    <option value="Nutrition">Nutrition</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="preference">Training Preference</label>
                <select id="preference" name="preference" required value={formData.preference} onChange={handleChange}>
                  <option value="" disabled>Select preference</option>
                  <option value="Gym">Gym Facility</option>
                  <option value="Online">Online Coaching</option>
                  <option value="Personal Training">1-on-1 Personal Training</option>
                  <option value="Nutrition Guidance">Nutrition & Diet Only</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Tell me about your fitness journey so far..."></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-100">START MY FITNESS JOURNEY</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

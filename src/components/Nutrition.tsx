import React from 'react';
import { siteConfig } from '../data/config';
import './Nutrition.css';

import proteinImg from '../assets/protein.jpg';
import carbsImg from '../assets/carbs.jpg';
import fatsImg from '../assets/fats.jpg';
import hydrationImg from '../assets/hydration.jpg';

const categoryImages: Record<string, string> = {
  'PROTEIN': proteinImg,
  'CARBOHYDRATES': carbsImg,
  'HEALTHY FATS': fatsImg,
  'HYDRATION': hydrationImg,
};

const Nutrition: React.FC = () => {
  return (
    <section id="nutrition" className="section nutrition-section">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="section-title mb-2">FOOD IS PART OF THE TRAINING</h2>
          <p className="text-secondary">Basic nutrition guidelines to support your goals.</p>
        </div>

        <div className="nutrition-grid">
          {siteConfig.nutrition.map((item, index) => (
            <div key={index} className="nutrition-card glass-card">
              <div className="nutrition-image-wrapper mb-3">
                <img src={categoryImages[item.category.replace('\n', '')] || proteinImg} alt={item.category.replace('\n', '')} className="nutrition-image" />
              </div>
              <h3 className="mb-2 text-accent" style={{ whiteSpace: 'pre-line' }}>{item.category}</h3>
              <p className="mb-3">{item.description}</p>
              <div className="nutrition-examples">
                <strong>Sources:</strong>
                <ul>
                  {item.examples.map((ex, i) => (
                    <li key={i}>{ex}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="smart-habits glass-card mt-6">
          <h3 className="mb-4 text-center">SMART FOOD HABITS</h3>
          <ul className="habits-list">
            <li>Eat mostly minimally processed foods</li>
            <li>Include adequate protein</li>
            <li>Eat vegetables and fruits</li>
            <li>Stay hydrated</li>
            <li>Maintain consistency</li>
            <li>Avoid extreme diets</li>
            <li>Match food intake to your goal</li>
          </ul>
        </div>
        
        <div className="disclaimer-box text-center mt-6">
          <p className="text-secondary text-sm">
            <em>"Nutrition requirements vary by individual. The information provided here is general education and should not replace advice from a qualified healthcare professional."</em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Nutrition;

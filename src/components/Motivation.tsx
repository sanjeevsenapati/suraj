import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/config';
import './Motivation.css';

const Motivation: React.FC = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % siteConfig.motivationalQuotes.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section motivation-section">
      <div className="container">
        <div className="motivation-content text-center">
          <h2 className="motivation-title mb-3">
            DON'T WAIT FOR MOTIVATION.<br/>
            <span className="text-accent">BUILD DISCIPLINE.</span>
          </h2>
          <p className="motivation-subtitle mb-6">
            "Small actions repeated consistently create meaningful change."
          </p>
          
          <div className="quote-carousel">
            {siteConfig.motivationalQuotes.map((quote, index) => (
              <div 
                key={index} 
                className={`quote-slide ${index === quoteIndex ? 'active' : ''}`}
              >
                {quote}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motivation;

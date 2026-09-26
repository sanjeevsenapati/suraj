import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Goals from './components/Goals';
import WorkoutSection from './components/WorkoutSection';
import ExerciseLibrary from './components/ExerciseLibrary';
import Nutrition from './components/Nutrition';
import Benefits from './components/Benefits';
import Transformations from './components/Transformations';
import Motivation from './components/Motivation';
import Contact from './components/Contact';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

function App() {
  // Intersection Observer for fade-in animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll('.section').forEach((el) => {
      // Temporarily set opacity to 0 via inline style to prevent flash before observer adds class
      // In a real app we'd use a more robust animation library or more specific CSS
      // el.setAttribute('style', 'opacity: 0'); 
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <div className="ambient-glow" style={{ top: '10%', left: '-10%' }}></div>
      <div className="ambient-glow" style={{ top: '40%', right: '-10%' }}></div>
      <div className="ambient-glow" style={{ top: '70%', left: '-5%' }}></div>
      <Navbar />
      <Hero />
      <About />
      <Goals />
      <WorkoutSection />
      <ExerciseLibrary />
      <Nutrition />
      <Benefits />
      <Transformations />
      <Motivation />
      <Contact />
      <CTABanner />
      <Footer />
    </div>
  );
}

export default App;

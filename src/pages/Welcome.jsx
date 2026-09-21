import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';
import { ArrowRight, Leaf } from 'lucide-react';

export default function Welcome() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations shortly after mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`welcome-container ${isLoaded ? 'loaded' : ''}`}>
      {/* Abstract Background Shapes */}
      <div className="bg-shape shape-top-left"></div>
      <div className="bg-shape shape-top-right"></div>
      <div className="bg-shape shape-bottom-left"></div>
      <div className="bg-shape shape-bottom-right"></div>

      <div className="welcome-content">
        {/* Brand Header */}
        <div className="brand-header">
          <div className="brand-logo">
            <Leaf size={24} className="brand-leaf-icon" strokeWidth={2.5} />
            <h1>CraftLink</h1>
          </div>
          <p className="brand-tagline">Made by artisans. Found by you.</p>
        </div>

        {/* Hero Artisan Object */}
        <div className="hero-visual-container">
          <div className="hero-backdrop-circle"></div>
          <div className="hero-decorative-leaf">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
          </div>
          <div className="hero-decorative-dots"></div>
          <img 
            src="/hero_basket.jpg" 
            alt="Handwoven artisan basket" 
            className="hero-image" 
          />
        </div>

        {/* Floating Content Card */}
        <div className="floating-welcome-card">
          <h2 className="card-headline">
            <span className="text-dark">Welcome to</span> <span className="text-blue">CraftLink</span>
          </h2>
          <p className="card-copy">
            Discover authentic handmade products directly from artisans.
          </p>
          
          <button 
            onClick={() => navigate('/role-selection')}
            className="get-started-btn"
          >
            <span>Get Started</span>
            <ArrowRight size={18} className="btn-arrow" />
          </button>
          
          <div className="pagination-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

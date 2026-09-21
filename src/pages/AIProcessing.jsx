import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import './AIProcessing.css';

const STEPS = [
  "Product image received",
  "Identifying product type",
  "Understanding material",
  "Preparing product description",
  "Creating product tags"
];

const AIProcessing = () => {
  const navigate = useNavigate();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    if (currentStepIndex >= STEPS.length) {
      const timer = setTimeout(() => {
        navigate('/artisan/products/add/draft');
      }, 800);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCurrentStepIndex(prev => prev + 1);
    }, 1200); // Progress every 1.2s

    return () => clearTimeout(timer);
  }, [currentStepIndex, navigate]);

  return (
    <div className="ai-processing-page">
      <header className="add-header processing-header">
        <button onClick={() => navigate(-1)} className="back-button" style={{ marginBottom: 0, padding: 0 }}>
          <ArrowLeft size={20} />
          Back
        </button>
        <div className="step-indicator">
          <span className="step-text">Step 2 of 3</span>
          <span className="step-label">Creating listing</span>
        </div>
      </header>

      <div className="processing-image-container">
        <img src="/images/basket.jpg" alt="Uploaded product" className="processing-image" />
      </div>

      <div className="processing-content">
        <h2 className="processing-title">Understanding your product...</h2>
        <p className="processing-subtitle">We're preparing a draft listing for you.</p>

        <div className="checklist">
          {STEPS.map((step, index) => {
            let status = 'pending';
            if (index < currentStepIndex) status = 'completed';
            if (index === currentStepIndex) status = 'current';

            return (
              <div key={index} className="checklist-item">
                <div className={`check-circle check-${status}`}>
                  {status === 'completed' && <Check size={14} strokeWidth={3} />}
                </div>
                <span className={`check-text ${status}`}>{step}</span>
              </div>
            );
          })}
        </div>

        <p className="transparency-footer">
          AI creates suggestions only. You can review and change everything before publishing.
        </p>
      </div>
    </div>
  );
};

export default AIProcessing;

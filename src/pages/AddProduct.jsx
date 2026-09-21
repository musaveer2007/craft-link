import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera, Check, Sparkles } from 'lucide-react';
import './AddProduct.css';
import './Login.css'; // For primary-button / secondary-button / text-link

const AddProduct = () => {
  const navigate = useNavigate();
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = () => {
    // Simulate photo upload processing
    setUploaded(true);
  };

  const handleContinueWithAI = () => {
    navigate('/artisan/products/add/ai');
  };

  return (
    <div className="add-product-page">
      <header className="add-header">
        <button onClick={() => navigate(-1)} className="back-button" style={{ marginBottom: 0, padding: 0 }}>
          <ArrowLeft size={20} />
          Back
        </button>
        <div className="step-indicator">
          <span className="step-text">Step 1 of 3</span>
          <span className="step-label">Product photo</span>
        </div>
      </header>

      {!uploaded ? (
        <>
          <div className="main-message">
            <h1 className="main-heading">Show us your product</h1>
            <p className="main-subheading">Take a photo or choose one from your gallery. AI will help create the listing.</p>
          </div>

          <div className="upload-area" onClick={handleUpload}>
            <div className="camera-icon-large">
              <Camera size={32} />
            </div>
            <span className="upload-title">Take a photo</span>
            <span className="upload-subtitle">or choose from gallery</span>
            
            <div className="upload-actions">
              <button className="primary-button" onClick={(e) => { e.stopPropagation(); handleUpload(); }}>
                Upload Photo
              </button>
              <button className="secondary-button" onClick={(e) => { e.stopPropagation(); handleUpload(); }}>
                Use Camera
              </button>
            </div>
          </div>

          <div className="photo-tips">
            <h3 className="tips-title">Photo tips</h3>
            <div className="tip-item">
              <Check size={16} className="check-icon" /> Use good natural light
            </div>
            <div className="tip-item">
              <Check size={16} className="check-icon" /> Keep the whole product visible
            </div>
            <div className="tip-item">
              <Check size={16} className="check-icon" /> Use a simple background
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="uploaded-preview">
            <img src="/images/basket.jpg" alt="Uploaded product preview" className="uploaded-img" />
            <div className="success-badge">
              Photo added <Check size={18} strokeWidth={3} />
            </div>
          </div>

          <div className="ai-ready-card">
            <h2 className="ai-ready-title">Ready for AI assistance</h2>
            <p className="ai-ready-desc">
              AI can suggest the product name, category, material, description and tags.
            </p>
            <button className="primary-button" onClick={handleContinueWithAI} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <Sparkles size={20} />
              Continue with AI
            </button>
          </div>

          <div className="manual-entry-section">
            <p className="manual-entry-text">Prefer to enter details yourself?</p>
            <button className="text-link" onClick={() => navigate('/artisan/products/add/manual')}>
              Add details manually
            </button>
          </div>
        </>
      )}

    </div>
  );
};

export default AddProduct;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, Mic } from 'lucide-react';
import './ProductDraft.css';
import './Login.css'; // For primary-button
import './MyProducts.css'; // For dialog styles

const ProductDraft = () => {
  const navigate = useNavigate();
  const [showVoiceModal, setShowVoiceModal] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [showStartOverConfirm, setShowStartOverConfirm] = useState(false);

  const handleMicClick = () => {
    if (!isRecording) {
      setIsRecording(true);
      setTimeout(() => {
        setIsRecording(false);
        setShowVoiceModal(false);
      }, 3000); // Simulate 3s recording then auto close
    }
  };

  return (
    <div className="draft-page">
      <header className="add-header draft-header">
        <button onClick={() => navigate(-1)} className="back-button" style={{ marginBottom: 0, padding: 0 }}>
          <ArrowLeft size={20} />
          Back
        </button>
        <div className="step-indicator">
          <span className="step-text">Step 2 of 3</span>
          <span className="step-label">Your product draft</span>
        </div>
      </header>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
        <div className="ai-badge">
          <Sparkles size={12} strokeWidth={2.5} /> AI Draft
        </div>
      </div>

      <div className="draft-image-container">
        <img src="/images/basket.jpg" alt="Handcrafted Palm Leaf Basket" className="draft-image" />
      </div>

      <div className="draft-card">
        <div className="draft-section">
          <div className="draft-label">Product Name</div>
          <div className="draft-value">Handcrafted Palm Leaf Basket</div>
        </div>

        <div className="draft-section">
          <div className="draft-label">Category</div>
          <div className="draft-value">Home Décor</div>
        </div>

        <div className="draft-section">
          <div className="draft-label">Material</div>
          <div className="draft-value">Palm Leaf</div>
        </div>

        <div className="draft-section">
          <div className="draft-label">Tags</div>
          <div className="draft-tags">
            <span className="draft-tag">Handmade</span>
            <span className="draft-tag">Traditional</span>
            <span className="draft-tag">Eco-friendly</span>
            <span className="draft-tag">Natural</span>
          </div>
        </div>

        <div className="draft-section">
          <div className="draft-label">Description</div>
          <div className="draft-value">
            A traditionally handcrafted palm-leaf basket made using natural materials and traditional weaving techniques. Each piece is carefully woven by hand, giving it a unique character.
          </div>
        </div>
      </div>

      <div className="transparency-section">
        <div className="transparency-title">
          <Sparkles size={16} /> AI suggestions
        </div>
        <div className="transparency-desc">
          Review the details before publishing.
        </div>
      </div>

      <div className="actions-container">
        <button className="voice-btn" onClick={() => setShowVoiceModal(true)}>
          <Mic size={20} /> Tell us more about your product
        </button>
        
        <button 
          className="primary-button"
          onClick={() => navigate('/artisan/products/add/edit')}
        >
          Review & Edit
        </button>

        <button 
          className="start-over-btn text-link"
          onClick={() => setShowStartOverConfirm(true)}
        >
          Start over
        </button>
      </div>

      {/* Voice Input Modal */}
      {showVoiceModal && (
        <div className="bottom-sheet-overlay" onClick={() => setShowVoiceModal(false)}>
          <div className="bottom-sheet" onClick={e => e.stopPropagation()}>
            <div className="sheet-handle"></div>
            <h2 className="sheet-title">Speak naturally</h2>
            <p className="sheet-desc">Describe your product in your own words.</p>
            
            <div className={`mic-container ${isRecording ? 'recording' : ''}`} onClick={handleMicClick}>
              <Mic size={32} />
            </div>
            
            <button 
              className="primary-button" 
              onClick={handleMicClick}
              disabled={isRecording}
            >
              {isRecording ? 'Listening...' : 'Start Recording'}
            </button>
          </div>
        </div>
      )}

      {/* Start Over Confirmation */}
      {showStartOverConfirm && (
        <div className="dialog-overlay" onClick={() => setShowStartOverConfirm(false)}>
          <div className="dialog-box" onClick={e => e.stopPropagation()}>
            <h3 className="dialog-title">Start this product again?</h3>
            <p className="dialog-desc">Your current AI draft will be discarded.</p>
            <div className="dialog-actions">
              <button className="dialog-btn dialog-cancel" onClick={() => setShowStartOverConfirm(false)}>Cancel</button>
              <button className="dialog-btn dialog-delete" onClick={() => navigate('/artisan/products/add')}>Start Over</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProductDraft;

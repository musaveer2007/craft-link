import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit2, Check, MapPin, Package, Tag } from 'lucide-react';
import './ProductPreview.css';

const ProductPreview = () => {
  const navigate = useNavigate();
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handlePublish = () => {
    setShowConfirmModal(false);
    navigate('/artisan/products/add/success');
  };

  return (
    <div className="preview-page">
      <header className="add-header preview-header">
        <button onClick={() => navigate(-1)} className="back-button" style={{ marginBottom: 0, padding: 0 }}>
          <ArrowLeft size={20} />
          Back
        </button>
        <div className="step-indicator">
          <span className="step-text">Final Step</span>
        </div>
      </header>

      <div style={{ marginBottom: '24px' }}>
        <h1 className="main-heading" style={{ fontSize: '24px' }}>Preview Your Product</h1>
        <p className="main-subheading">Check everything before you publish.</p>
      </div>

      <button className="edit-action-link" onClick={() => navigate('/artisan/products/add/edit')} style={{ background: 'none', border: 'none', padding: 0, marginBottom: '16px' }}>
        <Edit2 size={16} /> Edit Product
      </button>

      {/* The Product Card as a customer would see it */}
      <div className="customer-preview-card">
        <img src="/images/basket.jpg" alt="Product" className="preview-hero-img" />
        
        <div className="preview-content">
          <div className="preview-title-row">
            <h2 className="preview-name">Handcrafted Palm Leaf Basket</h2>
            <span className="preview-price">₹650</span>
          </div>

          <div className="preview-meta-row">
            <div className="preview-meta-item"><Tag size={14} /> Home Décor</div>
            <div className="preview-meta-item"><Package size={14} /> 10 available</div>
            <div className="preview-meta-item" style={{ color: 'var(--color-primary)' }}>Palm Leaf</div>
          </div>

          <div className="draft-tags" style={{ marginBottom: '20px' }}>
            <span className="draft-tag">Handmade</span>
            <span className="draft-tag">Traditional</span>
            <span className="draft-tag">Eco-friendly</span>
            <span className="draft-tag">Natural</span>
          </div>

          <h3 className="preview-section-title">Description</h3>
          <p className="preview-description">
            A traditionally handcrafted palm-leaf basket made using natural materials and traditional weaving techniques. Each piece is carefully woven by hand, giving it a unique character.
          </p>

          <div className="artisan-info-section">
            <img src="/images/artisan_profile.jpg" alt="Artisan" className="artisan-preview-avatar" />
            <div className="artisan-preview-details">
              <div className="artisan-made-by">Made by</div>
              <div className="artisan-preview-name">Lakshmi Devi</div>
              <div className="artisan-preview-role">Traditional Palm-Leaf Artisan</div>
              <div className="artisan-preview-location">
                <MapPin size={10} /> Madurai, Tamil Nadu
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Check Card */}
      <div className="final-check-card">
        <h3 className="final-check-title">Before you publish</h3>
        <div className="check-list-grid">
          <div className="check-item"><Check size={16} strokeWidth={3} /> Product photo added</div>
          <div className="check-item"><Check size={16} strokeWidth={3} /> Product name added</div>
          <div className="check-item"><Check size={16} strokeWidth={3} /> Category selected</div>
          <div className="check-item"><Check size={16} strokeWidth={3} /> Price added</div>
          <div className="check-item"><Check size={16} strokeWidth={3} /> Quantity added</div>
          <div className="check-item"><Check size={16} strokeWidth={3} /> Description added</div>
        </div>
        <div className="ai-control-message">
          You are in control. AI only helped prepare suggestions. You reviewed and approved the final details.
        </div>
      </div>

      <div className="bottom-cta-bar">
        <button className="primary-button" onClick={() => setShowConfirmModal(true)}>
          Publish Product
        </button>
      </div>

      {/* Publish Confirmation Modal */}
      {showConfirmModal && (
        <div className="bottom-sheet-overlay" onClick={() => setShowConfirmModal(false)}>
          <div className="bottom-sheet" onClick={e => e.stopPropagation()}>
            <div className="sheet-handle"></div>
            <h2 className="sheet-title">Ready to publish?</h2>
            <p className="sheet-desc" style={{ marginBottom: '32px' }}>
              Your product will become visible to customers on CraftLink.
            </p>
            
            <div className="modal-actions" style={{ flexDirection: 'column' }}>
              <button className="primary-button" style={{ width: '100%' }} onClick={handlePublish}>
                Publish Product
              </button>
              <button 
                className="secondary-button" 
                style={{ width: '100%', border: 'none', background: 'transparent' }} 
                onClick={() => navigate('/artisan/products/add/edit')}
              >
                Go Back & Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPreview;

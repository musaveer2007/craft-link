import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera, Mic, X, Sparkles } from 'lucide-react';
import './ReviewEditProduct.css';
import './Login.css';
import './ProductDraft.css'; // for bottom sheet

const CATEGORIES = [
  "Home Décor", "Fashion", "Jewellery", "Pottery", 
  "Woodcraft", "Textiles", "Accessories", "Other"
];

const ReviewEditProduct = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: 'Handcrafted Palm Leaf Basket',
    category: 'Home Décor',
    material: 'Palm Leaf',
    price: '650',
    quantity: '10',
    description: 'A traditionally handcrafted palm-leaf basket made using natural materials and traditional weaving techniques. Each piece is carefully woven by hand, giving it a unique character.',
    story: ''
  });
  
  const [tags, setTags] = useState(['Handmade', 'Traditional', 'Eco-friendly', 'Natural']);
  const [errorMsg, setErrorMsg] = useState('');
  
  // Voice Modal State
  const [voiceField, setVoiceField] = useState(null); // 'description' or 'story'
  const [isRecording, setIsRecording] = useState(false);
  
  // AI Modal State
  const [showAiModal, setShowAiModal] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrorMsg('');
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(t => t !== tagToRemove));
  };

  const handleMicClick = () => {
    if (!isRecording) {
      setIsRecording(true);
      setTimeout(() => {
        setIsRecording(false);
        // Simulate speech to text
        const simulatedText = voiceField === 'description' 
          ? formData.description + " It takes about two days to complete."
          : "I make this basket using palm leaves gathered from local farmers.";
        
        handleInputChange(voiceField, simulatedText);
        setVoiceField(null);
      }, 3000);
    }
  };

  const handleAiSuggestion = () => {
    const suggestion = "Experience the timeless beauty of our Handcrafted Palm Leaf Basket. Masterfully woven by traditional artisans using sustainably sourced natural materials, this eco-friendly piece adds authentic rustic charm to any home décor while preserving generations of craft heritage.";
    handleInputChange('description', suggestion);
    setShowAiModal(false);
  };

  const handleContinue = () => {
    const { name, category, price, quantity, description } = formData;
    if (!name.trim() || !category.trim() || !price.trim() || !quantity.trim() || !description.trim()) {
      setErrorMsg('Please fill in all required fields (Name, Category, Price, Quantity, Description).');
      return;
    }
    // Navigate to next product preview page placeholder
    navigate('/artisan/products/add/preview');
  };

  return (
    <div className="edit-page">
      <header className="add-header draft-header">
        <button onClick={() => navigate(-1)} className="back-button" style={{ marginBottom: 0, padding: 0 }}>
          <ArrowLeft size={20} />
          Back
        </button>
        <div className="step-indicator">
          <span className="step-text">Step 3 of 3</span>
        </div>
      </header>

      <div style={{ marginBottom: '24px' }}>
        <h1 className="main-heading" style={{ fontSize: '24px' }}>Review your product</h1>
        <p className="main-subheading">Make any changes before publishing.</p>
      </div>

      <div className="edit-image-container">
        <img src="/images/basket.jpg" alt="Product" className="edit-image" />
        <button className="change-photo-btn" onClick={() => navigate('/artisan/products/add')}>
          <Camera size={16} /> Change photo
        </button>
      </div>

      <div className="edit-form-card">
        
        <div className="form-field">
          <label className="field-label">Product name</label>
          <input 
            type="text" 
            className="field-input" 
            value={formData.name}
            onChange={e => handleInputChange('name', e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="field-label">Category</label>
          <select 
            className="field-input select-input" 
            style={{ paddingRight: '40px' }}
            value={formData.category}
            onChange={e => handleInputChange('category', e.target.value)}
          >
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label className="field-label">Material</label>
          <input 
            type="text" 
            className="field-input" 
            value={formData.material}
            onChange={e => handleInputChange('material', e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <div className="form-field" style={{ flex: 1 }}>
            <label className="field-label">Price</label>
            <div className="price-input-container">
              <span className="currency-symbol">₹</span>
              <input 
                type="number" 
                className="price-input" 
                value={formData.price}
                onChange={e => handleInputChange('price', e.target.value)}
              />
            </div>
          </div>

          <div className="form-field" style={{ flex: 1 }}>
            <label className="field-label">Quantity</label>
            <input 
              type="number" 
              className="field-input" 
              value={formData.quantity}
              onChange={e => handleInputChange('quantity', e.target.value)}
            />
          </div>
        </div>

        <div className="section-divider"></div>

        <div className="form-field">
          <label className="field-label">Description</label>
          <div className="input-with-mic">
            <textarea 
              className="field-input textarea-input" 
              value={formData.description}
              onChange={e => handleInputChange('description', e.target.value)}
            />
            <button className="mic-btn-small" onClick={() => setVoiceField('description')}>
              <Mic size={20} />
            </button>
          </div>
          <button className="ai-assist-btn" onClick={() => setShowAiModal(true)}>
            <Sparkles size={14} strokeWidth={2.5} /> Improve description
          </button>
        </div>

        <div className="form-field">
          <label className="field-label">Tags</label>
          <div className="tags-container">
            {tags.map(tag => (
              <span key={tag} className="edit-tag">
                {tag}
                <button className="remove-tag-btn" onClick={() => removeTag(tag)}>
                  <X size={14} />
                </button>
              </span>
            ))}
            <button className="add-tag-btn">+ Add tag</button>
          </div>
        </div>

        <div className="section-divider"></div>

        <div className="form-field">
          <label className="field-label">
            Add a story about this product
            <span className="optional-text">(Optional)</span>
          </label>
          <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
            Tell customers what makes this piece special.
          </p>
          <div className="input-with-mic">
            <textarea 
              className="field-input textarea-input" 
              placeholder="e.g. I make this basket using..."
              value={formData.story}
              onChange={e => handleInputChange('story', e.target.value)}
            />
            <button className="mic-btn-small" onClick={() => setVoiceField('story')}>
              <Mic size={20} />
            </button>
          </div>
        </div>

      </div>

      <div className="bottom-cta-bar">
        {errorMsg && <div className="error-message">{errorMsg}</div>}
        <button className="primary-button" onClick={handleContinue}>
          Continue
        </button>
      </div>

      {/* Voice Bottom Sheet */}
      {voiceField && (
        <div className="bottom-sheet-overlay" onClick={() => setVoiceField(null)}>
          <div className="bottom-sheet" onClick={e => e.stopPropagation()}>
            <div className="sheet-handle"></div>
            <h2 className="sheet-title">Speak naturally</h2>
            <p className="sheet-desc">Tell us what you want to add.</p>
            
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

      {/* AI Suggestion Modal */}
      {showAiModal && (
        <div className="bottom-sheet-overlay" onClick={() => setShowAiModal(false)}>
          <div className="bottom-sheet" onClick={e => e.stopPropagation()}>
            <div className="sheet-handle"></div>
            <h2 className="sheet-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={20} color="var(--color-primary)" /> Suggested improvement
            </h2>
            
            <div className="suggestion-box">
              <p className="suggestion-text">
                Experience the timeless beauty of our Handcrafted Palm Leaf Basket. Masterfully woven by traditional artisans using sustainably sourced natural materials, this eco-friendly piece adds authentic rustic charm to any home décor while preserving generations of craft heritage.
              </p>
            </div>
            
            <div className="modal-actions">
              <button className="secondary-button" style={{ flex: 1 }} onClick={() => setShowAiModal(false)}>
                Keep mine
              </button>
              <button className="primary-button" style={{ flex: 1 }} onClick={handleAiSuggestion}>
                Use suggestion
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ReviewEditProduct;

import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera, X, Upload } from 'lucide-react';
import './ManualAddProduct.css';
import './ReviewEditProduct.css'; // Reuse form styles
import './Login.css';

const CATEGORIES = [
  "Home Décor", "Fashion", "Jewellery", "Pottery", 
  "Woodcraft", "Textiles", "Accessories", "Other"
];

const ManualAddProduct = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    category: 'Home Décor',
    material: '',
    price: '',
    quantity: '',
    description: '',
    story: ''
  });
  
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [productImage, setProductImage] = useState(null);
  
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrorMsg('');
  };

  const handleAddTag = (e) => {
    if (e.key === 'Enter' && newTag.trim()) {
      e.preventDefault();
      if (!tags.includes(newTag.trim())) {
        setTags([...tags, newTag.trim()]);
      }
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(t => t !== tagToRemove));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProductImage(imageUrl);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleContinue = () => {
    const { name, category, price, quantity, description } = formData;
    if (!productImage) {
      setErrorMsg('Please upload a product photo.');
      return;
    }
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
          <span className="step-text">Manual Add</span>
        </div>
      </header>

      <div style={{ marginBottom: '24px' }}>
        <h1 className="main-heading" style={{ fontSize: '24px' }}>Add Product Details</h1>
        <p className="main-subheading">Enter all details for your new listing.</p>
      </div>

      <div className="edit-form-card">
        {/* Image Upload Section */}
        <div className="form-field">
          <label className="field-label">Product Photo</label>
          <input 
            type="file" 
            accept="image/*" 
            ref={fileInputRef} 
            onChange={handleImageUpload} 
            style={{ display: 'none' }} 
          />
          {productImage ? (
            <div className="edit-image-container manual-image-container">
              <img src={productImage} alt="Product" className="edit-image" />
              <button className="change-photo-btn" onClick={triggerFileInput}>
                <Camera size={16} /> Change photo
              </button>
            </div>
          ) : (
            <div className="manual-upload-placeholder" onClick={triggerFileInput}>
              <Upload size={32} className="upload-icon" />
              <span className="upload-text">Click to upload product photo</span>
            </div>
          )}
        </div>

        <div className="form-field">
          <label className="field-label">Product name</label>
          <input 
            type="text" 
            className="field-input" 
            placeholder="e.g. Handcrafted Palm Leaf Basket"
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
            placeholder="e.g. Palm Leaf"
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
                placeholder="650"
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
              placeholder="10"
              value={formData.quantity}
              onChange={e => handleInputChange('quantity', e.target.value)}
            />
          </div>
        </div>

        <div className="section-divider"></div>

        <div className="form-field">
          <label className="field-label">Description</label>
          <textarea 
            className="field-input textarea-input" 
            placeholder="Describe your product, its making process, and unique features..."
            value={formData.description}
            onChange={e => handleInputChange('description', e.target.value)}
          />
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
            <input 
              type="text" 
              className="tag-input" 
              placeholder="Press Enter to add tag"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyDown={handleAddTag}
            />
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
          <textarea 
            className="field-input textarea-input" 
            placeholder="e.g. I make this basket using..."
            value={formData.story}
            onChange={e => handleInputChange('story', e.target.value)}
          />
        </div>

      </div>

      <div className="bottom-cta-bar">
        {errorMsg && <div className="error-message">{errorMsg}</div>}
        <button className="primary-button" onClick={handleContinue}>
          Preview Product
        </button>
      </div>

    </div>
  );
};

export default ManualAddProduct;

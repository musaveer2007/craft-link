import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './Login.css'; // Reusing base auth styles
import './CreateAccount.css';

const CreateAccount = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    craft: '',
    language: 'English',
    termsAccepted: false
  });

  const handleBack = () => {
    navigate(`/${role}/auth`);
  };

  const isFormValid = () => {
    const isBasicValid = formData.name.trim() !== '' && 
                         formData.phone.trim().length >= 10 && 
                         formData.termsAccepted;
                         
    if (role === 'artisan') {
      return isBasicValid && formData.craft.trim() !== '';
    }
    
    return isBasicValid;
  };

  const handleCreate = () => {
    if (isFormValid()) {
      if (role === 'artisan') {
        navigate('/artisan/home');
      } else {
        navigate('/customer/home');
      }
    }
  };

  return (
    <div className="create-account-page">
      <header className="auth-header">
        <button onClick={handleBack} className="back-button">
          <ArrowLeft size={20} />
          Back
        </button>
        <h1 className="auth-title">Create your account</h1>
        <p className="auth-subtitle">Set up your CraftLink account in a few simple steps.</p>
        
        <div className="role-badge">
          {role === 'artisan' ? 'Creating an Artisan account' : 'Creating a Customer account'}
        </div>
      </header>

      <div className="auth-form" style={{ paddingBottom: '32px' }}>
        <div className="form-group">
          <label className="form-label">Full name</label>
          <input 
            type="text" 
            className="text-input" 
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Phone number</label>
          <div className="phone-input-container">
            <span className="country-code">+91</span>
            <input 
              type="tel" 
              className="phone-input" 
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10)})}
            />
          </div>
        </div>
        
        <div className="form-group">
          <label className="form-label">Email address</label>
          <input 
            type="email" 
            className="text-input" 
            placeholder="Optional"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        {role === 'artisan' && (
          <div className="form-group">
            <label className="form-label">Craft / Profession</label>
            <input 
              type="text" 
              className="text-input" 
              placeholder="What do you make?"
              value={formData.craft}
              onChange={(e) => setFormData({...formData, craft: e.target.value})}
            />
          </div>
        )}

        <div className="form-group">
          <label className="form-label">Preferred language</label>
          <select 
            className="select-input"
            value={formData.language}
            onChange={(e) => setFormData({...formData, language: e.target.value})}
          >
            <option value="English">English</option>
            <option value="Tamil">Tamil</option>
            <option value="Hindi">Hindi</option>
            <option value="Telugu">Telugu</option>
            <option value="Kannada">Kannada</option>
            <option value="Malayalam">Malayalam</option>
          </select>
        </div>

        <label className="checkbox-container">
          <input 
            type="checkbox" 
            className="checkbox-input"
            checked={formData.termsAccepted}
            onChange={(e) => setFormData({...formData, termsAccepted: e.target.checked})}
          />
          <span className="checkbox-label">I agree to the Terms of Service and Privacy Policy</span>
        </label>

        <button 
          className="primary-button" 
          disabled={!isFormValid()}
          onClick={handleCreate}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;

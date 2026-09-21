import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Scissors, ShoppingBag, CheckCircle2 } from 'lucide-react';
import './RoleSelection.css';

const RoleSelection = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const handleBack = () => {
    // Navigate back to the Welcome Screen
    navigate('/');
  };

  const handleContinue = () => {
    if (selectedRole === 'artisan') {
      navigate('/artisan/auth');
    } else if (selectedRole === 'customer') {
      navigate('/customer/auth');
    }
  };

  return (
    <div className="role-selection-page">
      <header className="header">
        <button onClick={handleBack} className="back-button">
          <ArrowLeft size={20} />
          Back
        </button>
        <h1 className="title">Welcome to CraftLink</h1>
        <p className="subtitle">How would you like to use CraftLink?</p>
      </header>

      <div className="cards-container">
        {/* Artisan Card */}
        <button 
          className={`role-card ${selectedRole === 'artisan' ? 'selected' : ''}`}
          onClick={() => setSelectedRole('artisan')}
        >
          {selectedRole === 'artisan' && (
            <CheckCircle2 className="checkmark-icon" size={24} fill="currentColor" color="white" />
          )}
          <div className="icon-container">
            <Scissors size={24} />
          </div>
          <div>
            <h2 className="card-title">I'm an Artisan</h2>
            <p className="card-description">Create your digital shop, showcase your products and receive orders.</p>
            <div className="card-label">Sell your craft</div>
          </div>
        </button>

        {/* Customer Card */}
        <button 
          className={`role-card ${selectedRole === 'customer' ? 'selected' : ''}`}
          onClick={() => setSelectedRole('customer')}
        >
          {selectedRole === 'customer' && (
            <CheckCircle2 className="checkmark-icon" size={24} fill="currentColor" color="white" />
          )}
          <div className="icon-container">
            <ShoppingBag size={24} />
          </div>
          <div>
            <h2 className="card-title">I'm a Customer</h2>
            <p className="card-description">Discover handmade products and buy directly from artisans.</p>
            <div className="card-label">Discover & shop</div>
          </div>
        </button>
      </div>

      <div className="footer">
        <button 
          className={`continue-button ${selectedRole ? 'enabled' : 'disabled'}`}
          disabled={!selectedRole}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default RoleSelection;

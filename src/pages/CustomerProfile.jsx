import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon, Search as SearchIcon, ShoppingBag, User } from 'lucide-react';
import './CustomerProfile.css';
import './CustomerOrders.css';
import './Login.css';

const CustomerProfile = () => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    navigate('/role-selection');
  };

  return (
    <div className="cust-profile-page">
      <header className="cust-profile-header-bar">
        <h1 className="cust-section-title-text" style={{ fontSize: '18px', textTransform: 'none', letterSpacing: 'normal' }}>My Profile</h1>
        <button className="cust-address-action-btn">Edit</button>
      </header>

      <div className="cust-profile-hero">
        <div className="cust-avatar">
          <User size={40} />
        </div>
        <h2 className="cust-profile-name">Arjun Kumar</h2>
        <span className="cust-profile-contact">+91 98765 43210</span>
        <span className="cust-profile-contact">arjun@example.com</span>
        
        <div className="cust-profile-completion">
          Profile 80% complete
        </div>
      </div>

      <div className="cust-profile-content">
        
        {/* Order Shortcut */}
        <div className="cust-order-shortcut">
          <div className="cust-shortcut-info">
            <span className="cust-shortcut-title">My Orders</span>
            <span className="cust-shortcut-desc">View your purchases and track deliveries.</span>
          </div>
          <button className="primary-button" style={{ padding: '8px 16px', width: 'auto', fontSize: '13px' }} onClick={() => navigate('/customer/orders')}>
            View Orders
          </button>
        </div>

        {/* Personal Information */}
        <div className="cust-profile-section">
          <div className="cust-section-title-row">
            <h3 className="cust-section-title-text">Personal Information</h3>
          </div>
          <div className="cust-info-grid">
            <div className="cust-info-item">
              <span className="cust-info-label">Full Name</span>
              <span className="cust-info-value">Arjun Kumar</span>
            </div>
            <div className="cust-info-item">
              <span className="cust-info-label">Phone</span>
              <span className="cust-info-value">+91 98765 43210</span>
            </div>
            <div className="cust-info-item">
              <span className="cust-info-label">Email</span>
              <span className="cust-info-value">arjun@example.com</span>
            </div>
            <div className="cust-info-item">
              <span className="cust-info-label">Location</span>
              <span className="cust-info-value">Chennai, Tamil Nadu</span>
            </div>
          </div>
          <button className="cust-btn-outline">Edit Profile</button>
        </div>

        {/* Delivery Addresses */}
        <div className="cust-profile-section">
          <div className="cust-section-title-row">
            <h3 className="cust-section-title-text">Saved Addresses</h3>
          </div>
          
          <div className="cust-address-card">
            <span className="cust-address-badge">Default</span>
            <span className="cust-address-type">Home</span>
            <div className="cust-address-text">
              12, Anna Nagar<br/>
              Chennai, Tamil Nadu<br/>
              600040
            </div>
            <div className="cust-address-actions">
              <button className="cust-address-action-btn">Edit</button>
            </div>
          </div>

          <button className="cust-address-action-btn" style={{ textAlign: 'left', marginTop: '4px' }}>
            + Add New Address
          </button>
        </div>

        {/* Language */}
        <div className="cust-profile-section">
          <div className="cust-section-title-row">
            <h3 className="cust-section-title-text">Language</h3>
          </div>
          <select className="login-input" style={{ backgroundColor: 'var(--color-background)' }} defaultValue="English">
            <option value="English">English</option>
            <option value="Tamil">Tamil</option>
            <option value="Hindi">Hindi</option>
            <option value="Telugu">Telugu</option>
            <option value="Kannada">Kannada</option>
            <option value="Malayalam">Malayalam</option>
          </select>
        </div>

        {/* Account Settings */}
        <div className="cust-profile-section">
          <h3 className="cust-section-title-text">Account Settings</h3>
          <div className="cust-account-list">
            <button className="cust-account-item">
              Notifications <ChevronRight size={18} color="var(--color-text-secondary)" />
            </button>
            <button className="cust-account-item">
              Privacy <ChevronRight size={18} color="var(--color-text-secondary)" />
            </button>
            <button className="cust-account-item">
              Help & Support <ChevronRight size={18} color="var(--color-text-secondary)" />
            </button>
            <button className="cust-account-item">
              Terms & Conditions <ChevronRight size={18} color="var(--color-text-secondary)" />
            </button>
          </div>
        </div>

        <button className="cust-logout-btn" onClick={() => setShowLogoutModal(true)}>
          Log Out
        </button>
      </div>

      {showLogoutModal && (
        <div className="dialog-overlay" onClick={() => setShowLogoutModal(false)}>
          <div className="dialog-box" onClick={e => e.stopPropagation()}>
            <h3 className="dialog-title">Log out of CraftLink?</h3>
            <p className="dialog-desc">You will need to sign in again to view your orders.</p>
            <div className="dialog-actions">
              <button className="dialog-btn dialog-cancel" onClick={() => setShowLogoutModal(false)}>Cancel</button>
              <button className="dialog-btn dialog-delete" onClick={handleLogout}>Log Out</button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button className="nav-item" onClick={() => navigate('/customer/home')}>
          <HomeIcon className="nav-icon" size={24} />
          Home
        </button>
        <button className="nav-item">
          <SearchIcon className="nav-icon" size={24} />
          Search
        </button>
        <button className="nav-item" onClick={() => navigate('/customer/orders')}>
          <ShoppingBag className="nav-icon" size={24} />
          Orders
        </button>
        <button className="nav-item active">
          <User className="nav-icon" size={24} />
          Profile
        </button>
      </nav>
    </div>
  );
};

export default CustomerProfile;

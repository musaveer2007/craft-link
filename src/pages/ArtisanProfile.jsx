import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Home, Package, ShoppingBag, User, ChevronRight, CheckCircle } from 'lucide-react';
import './ArtisanProfile.css';
import './ArtisanHome.css'; // For shared bottom nav styles
import './Login.css'; // For primary-button, secondary-button

const ArtisanProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-page" style={{ paddingBottom: '100px' }}>
      <header className="profile-header-bar">
        <h1 className="page-title">My Profile</h1>
        <button className="text-btn-action">Edit</button>
      </header>

      <div className="user-info-section">
        <img 
          src="/images/artisan_profile.jpg" 
          alt="Lakshmi Devi" 
          className="profile-avatar-large" 
        />
        <h2 className="profile-name">Lakshmi Devi</h2>
        <p className="profile-role">Traditional Palm-Leaf Artisan</p>
        <div className="profile-location">
          <MapPin size={14} /> Madurai, Tamil Nadu
        </div>
        
        {/* Profile Completion inside header area */}
        <div style={{ marginTop: '24px', width: '100%', maxWidth: '300px' }}>
          <div className="profile-header" style={{ marginBottom: '8px' }}>
            <span className="profile-title" style={{ fontSize: '13px', fontWeight: '700' }}>80% complete</span>
          </div>
          <div className="progress-bar" style={{ marginBottom: '12px' }}>
            <div className="progress-fill" style={{ width: '80%' }}></div>
          </div>
          <p className="profile-desc" style={{ textAlign: 'center', marginBottom: '16px' }}>
            Complete your profile to help customers know your craft.
          </p>
          <button className="primary-button" style={{ padding: '10px 16px', fontSize: '14px' }}>
            Complete Profile
          </button>
        </div>
      </div>

      <div className="profile-content">
        
        {/* Public Profile Preview */}
        <div className="info-card">
          <h3 className="section-title-small">How customers see you</h3>
          <div className="public-profile-card">
            <div className="public-profile-details">
              <span className="artisan-story-name">Lakshmi Devi</span>
              <span className="artisan-story-role">Traditional Palm-Leaf Artisan</span>
              <span className="artisan-story-location" style={{ marginTop: '4px' }}>
                <MapPin size={12} /> Madurai, Tamil Nadu
              </span>
            </div>
            <button className="secondary-button" style={{ padding: '8px 16px', fontSize: '13px' }}>
              View Public Profile
            </button>
          </div>
        </div>

        {/* My Craft */}
        <div className="info-card">
          <h3 className="section-title-small">My Craft</h3>
          <div className="info-row">
            <span className="info-label">Craft</span>
            <span className="info-value">Palm-leaf handicrafts</span>
          </div>
          <div className="info-row">
            <span className="info-label">Experience</span>
            <span className="info-value">18 years</span>
          </div>
          <div className="info-row">
            <span className="info-label">Specialization</span>
            <span className="info-value">Traditional palm-leaf weaving</span>
          </div>
        </div>

        {/* Languages */}
        <div className="info-card">
          <h3 className="section-title-small">Languages</h3>
          <div className="language-tags">
            <span className="lang-tag">Tamil</span>
            <span className="lang-tag">English</span>
          </div>
        </div>

        {/* Craft Story */}
        <div className="info-card">
          <h3 className="section-title-small">My Craft Story</h3>
          <p className="story-text">
            "I learned palm-leaf weaving from my grandmother and have continued the tradition for over 18 years. Each piece is carefully woven by hand using traditional techniques."
          </p>
          <div className="ai-label">
            Your story
          </div>
        </div>

        {/* Account Section */}
        <div className="info-card">
          <h3 className="section-title-small">Account</h3>
          <div className="account-list">
            <button className="account-list-item" style={{ background: 'none', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
              Personal Information <ChevronRight size={18} color="var(--color-text-secondary)" />
            </button>
            <button className="account-list-item" style={{ background: 'none', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
              Language Preferences <ChevronRight size={18} color="var(--color-text-secondary)" />
            </button>
            <button className="account-list-item" style={{ background: 'none', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
              Notifications <ChevronRight size={18} color="var(--color-text-secondary)" />
            </button>
            <button className="account-list-item" style={{ background: 'none', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
              Help & Support <ChevronRight size={18} color="var(--color-text-secondary)" />
            </button>
            <button className="account-list-item" style={{ background: 'none', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
              Privacy <ChevronRight size={18} color="var(--color-text-secondary)" />
            </button>
            <button className="account-list-item" style={{ background: 'none', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
              Terms <ChevronRight size={18} color="var(--color-text-secondary)" />
            </button>
            
            <button className="account-list-item destructive" style={{ background: 'none' }} onClick={() => navigate('/role-selection')}>
              Log Out
            </button>
          </div>
        </div>
        
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button className="nav-item" onClick={() => navigate('/artisan/home')}>
          <Home className="nav-icon" size={24} />
          Home
        </button>
        <button className="nav-item" onClick={() => navigate('/artisan/products')}>
          <Package className="nav-icon" size={24} />
          Products
        </button>
        <button className="nav-item" onClick={() => navigate('/artisan/orders')}>
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

export default ArtisanProfile;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Sparkles, Plus, Home, Package, ShoppingBag, User } from 'lucide-react';
import './ArtisanHome.css';

const ArtisanHome = () => {
  const navigate = useNavigate();

  return (
    <div className="artisan-dashboard">
      <header className="dashboard-header">
        <div>
          <h1 className="greeting">Good morning, Lakshmi 👋</h1>
          <p className="greeting-sub">Let's bring your craft online.</p>
        </div>
        <div className="header-icons">
          <button className="icon-button" onClick={() => navigate('/notifications')}>
            <Bell size={24} />
          </button>
          <img src="/images/artisan_profile.jpg" alt="Profile" className="artisan-avatar-small" />
        </div>
      </header>

      <div className="dashboard-content">
        
        {/* Profile Completion */}
        <div className="dash-card profile-card">
          <div className="profile-header">
            <span className="profile-title">Complete your artisan profile</span>
            <span className="profile-progress-text">60%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '60%' }}></div>
          </div>
          <p className="profile-desc">Add your craft story and profile photo.</p>
          <button 
            className="outline-btn"
            onClick={() => navigate('/artisan/profile')}
          >
            Complete Profile
          </button>
        </div>

        {/* Primary Action */}
        <button 
          className="dash-card add-product-card"
          onClick={() => navigate('/artisan/products/add')}
        >
          <span className="add-btn-large">
            <Plus size={24} />
            Add Product
          </span>
          <span className="add-desc">Create a professional product listing with AI assistance.</span>
        </button>

        {/* AI Assistant */}
        <div className="dash-card ai-card">
          <div className="ai-title">
            <Sparkles size={20} />
            Need help creating a listing?
          </div>
          <p className="ai-desc">
            Upload a product photo and let AI suggest the name, description, category and tags.
          </p>
          <button 
            className="text-btn"
            onClick={() => navigate('/artisan/products/add')}
          >
            Create Product
          </button>
        </div>

        {/* Product Summary */}
        <div>
          <div className="section-header">
            <div>
              <h2 className="section-title">My Products</h2>
              <span className="section-stats">12 Products • 3 Published • 2 Drafts</span>
            </div>
            <button className="text-link view-all" onClick={() => navigate('/artisan/products')}>View All</button>
          </div>
          
          <div className="products-list">
            <div className="product-item">
              <img src="/images/saree.jpg" alt="Handwoven Cotton Saree" className="product-img" />
              <div className="product-info">
                <span className="product-name">Handwoven Cotton Saree</span>
                <span className="product-price">₹1,850</span>
              </div>
              <span className="status-badge status-published">Published</span>
            </div>

            <div className="product-item">
              <img src="/images/basket.jpg" alt="Palm Leaf Basket" className="product-img" />
              <div className="product-info">
                <span className="product-name">Palm Leaf Basket</span>
                <span className="product-price">₹650</span>
              </div>
              <span className="status-badge status-published">Published</span>
            </div>

            <div className="product-item">
              <img src="/images/vase.jpg" alt="Terracotta Vase" className="product-img" />
              <div className="product-info">
                <span className="product-name">Terracotta Vase</span>
                <span className="product-price">₹900</span>
              </div>
              <span className="status-badge status-draft">Draft</span>
            </div>
          </div>
        </div>

        {/* Orders Summary */}
        <div>
          <div className="section-header">
            <h2 className="section-title">Recent Orders</h2>
            <button className="text-link view-all" onClick={() => navigate('/artisan/orders')}>View Orders</button>
          </div>
          
          <div className="order-item">
            <div className="order-header">
              <span className="order-id">Order #CL1024</span>
              <span className="status-badge status-preparing">Preparing</span>
            </div>
            <div className="order-details">
              <span className="order-product">Palm Leaf Basket</span>
              <span className="order-price">₹650</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button className="nav-item active">
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
        <button className="nav-item" onClick={() => navigate('/artisan/profile')}>
          <User className="nav-icon" size={24} />
          Profile
        </button>
      </nav>
    </div>
  );
};

export default ArtisanHome;

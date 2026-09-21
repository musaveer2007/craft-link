import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, MapPin, Tag, Package, Check, Home as HomeIcon, Search as SearchIcon, ShoppingBag, User } from 'lucide-react';
import './CustomerProduct.css';
import './CustomerHome.css';
import './ProductDraft.css';

const CustomerProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="customer-product-page">
      <header className="customer-product-header">
        <button onClick={() => navigate('/customer/home')} className="icon-button">
          <ArrowLeft size={20} />
        </button>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="icon-button"><Heart size={20} /></button>
          <button className="icon-button"><Share2 size={20} /></button>
        </div>
      </header>

      <div className="customer-product-img-container">
        <img src="/images/basket.jpg" alt="Product" className="customer-product-img" />
      </div>

      <div className="customer-product-content">
        <div className="customer-product-status">
          <Check size={12} strokeWidth={3} /> In stock
        </div>

        <div className="customer-product-title-row">
          <h1 className="customer-product-name">Handcrafted Palm Leaf Basket</h1>
          <span className="customer-product-price">₹650</span>
        </div>

        <div className="customer-meta-row">
          <div className="customer-meta-item"><Package size={14} /> 10 available</div>
          <div className="customer-meta-item"><Tag size={14} /> Home Décor</div>
          <div className="customer-meta-item" style={{ color: 'var(--color-primary)' }}>Palm Leaf</div>
        </div>

        <div className="draft-tags" style={{ marginBottom: '24px' }}>
          <span className="draft-tag">Handmade</span>
          <span className="draft-tag">Traditional</span>
          <span className="draft-tag">Eco-friendly</span>
          <span className="draft-tag">Natural</span>
        </div>

        <div className="customer-section">
          <h2 className="customer-section-title">About this product</h2>
          <p className="customer-description">
            A traditionally handcrafted palm-leaf basket made using natural materials and traditional weaving techniques. Each piece is carefully woven by hand, giving it a unique character.
          </p>
        </div>

        <div className="customer-section">
          <h2 className="customer-section-title">Meet the Artisan</h2>
          <div className="meet-artisan-card">
            <div className="meet-artisan-header">
              <img src="/images/artisan_profile.jpg" alt="Lakshmi Devi" className="meet-artisan-avatar" />
              <div className="meet-artisan-details">
                <div className="meet-artisan-name">Lakshmi Devi</div>
                <div className="meet-artisan-role">Traditional Palm-Leaf Artisan</div>
                <div className="meet-artisan-location"><MapPin size={10} /> Madurai, Tamil Nadu</div>
              </div>
            </div>
            <p className="meet-artisan-story">
              "I learned palm-leaf weaving from my grandmother and have continued the tradition for over 18 years."
            </p>
            <button className="meet-artisan-link" style={{ background: 'none', border: 'none', padding: 0 }}>
              View Artisan
            </button>
          </div>
        </div>

        <div className="trust-section">
          <h2 className="trust-title">Why buy on CraftLink?</h2>
          <div className="trust-list">
            <div className="trust-item"><Check size={16} strokeWidth={3} /> Directly from artisans</div>
            <div className="trust-item"><Check size={16} strokeWidth={3} /> Authentic handmade products</div>
            <div className="trust-item"><Check size={16} strokeWidth={3} /> Secure checkout</div>
            <div className="trust-item"><Check size={16} strokeWidth={3} /> Order tracking</div>
          </div>
        </div>
      </div>

      {/* Sticky Purchase Bar */}
      <div className="purchase-bar">
        <div className="purchase-price-qty">
          <span className="purchase-price">₹650</span>
          <div className="qty-selector">
            <button className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
            <span className="qty-val">{qty}</span>
            <button className="qty-btn" onClick={() => setQty(qty + 1)}>+</button>
          </div>
        </div>
        <div className="purchase-actions">
          <button className="purchase-btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="purchase-btn-gold" onClick={() => navigate('/customer/cart')}>
            Buy Now
          </button>
        </div>
      </div>

      {showToast && (
        <div className="toast">
          Added to your cart
          <span className="toast-link" onClick={() => navigate('/customer/cart')}>
            View Cart
          </span>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button className="nav-item active" onClick={() => navigate('/customer/home')}>
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
        <button className="nav-item" onClick={() => navigate('/customer/profile')}>
          <User className="nav-icon" size={24} />
          Profile
        </button>
      </nav>
    </div>
  );
};

export default CustomerProduct;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, ShieldCheck, Home as HomeIcon, Search as SearchIcon, ShoppingBag, User, ShoppingCart } from 'lucide-react';
import './CustomerCart.css';
import './CustomerHome.css';
import './Login.css';

const CustomerCart = () => {
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  
  // Basic mock state
  const hasItems = qty > 0;

  return (
    <div className="customer-cart-page">
      <header className="customer-cart-header">
        <button onClick={() => navigate(-1)} className="back-button" style={{ marginBottom: 0, padding: 0 }}>
          <ArrowLeft size={20} />
          Back
        </button>
        <h1 className="cart-title">My Cart</h1>
        <span className="cart-item-count">{hasItems ? '1 item' : ''}</span>
      </header>

      {hasItems ? (
        <div className="cart-content">
          <div className="cart-item-card">
            <img src="/images/basket.jpg" alt="Product" className="cart-item-img" />
            <div className="cart-item-details">
              <div className="cart-item-name">Handcrafted Palm Leaf Basket</div>
              <div className="cart-item-price">₹650</div>
              
              <div className="cart-item-actions">
                <div className="cart-qty-selector">
                  <button className="cart-qty-btn" onClick={() => setQty(qty - 1)}>−</button>
                  <span className="cart-qty-val">{qty}</span>
                  <button className="cart-qty-btn" onClick={() => setQty(qty + 1)}>+</button>
                </div>
                <button className="cart-remove-btn" onClick={() => setQty(0)}>
                  Remove
                </button>
              </div>
            </div>
          </div>

          <div className="cart-summary-card">
            <h2 className="cart-summary-title">Order Summary</h2>
            <div className="summary-row">
              <span className="summary-label">Subtotal</span>
              <span className="summary-value">₹{650 * qty}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Delivery</span>
              <span className="summary-value" style={{ fontWeight: 500 }}>Calculated at checkout</span>
            </div>
            <div className="summary-row total">
              <span className="summary-label">Total</span>
              <span className="summary-value">₹{650 * qty}</span>
            </div>
          </div>

          <div className="cart-cta-section">
            <button className="primary-button" onClick={() => navigate('/customer/checkout')}>
              Proceed to Checkout
            </button>
            <button className="secondary-button" onClick={() => navigate('/customer/home')}>
              Continue Shopping
            </button>
          </div>
          
          <div className="cart-trust-msg">
            <Lock size={12} /> Secure checkout • Direct from artisans
          </div>
        </div>
      ) : (
        <div className="empty-cart-state">
          <div className="empty-cart-icon">
            <ShoppingCart size={32} />
          </div>
          <h2 className="empty-cart-title">Your cart is empty</h2>
          <p className="empty-cart-desc">
            Discover handmade products from artisans and add something you love.
          </p>
          <button className="primary-button" style={{ width: 'auto', padding: '12px 32px' }} onClick={() => navigate('/customer/home')}>
            Explore Products
          </button>
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
        <button className="nav-item">
          <ShoppingBag className="nav-icon" size={24} />
          Orders
        </button>
        <button className="nav-item">
          <User className="nav-icon" size={24} />
          Profile
        </button>
      </nav>
    </div>
  );
};

export default CustomerCart;

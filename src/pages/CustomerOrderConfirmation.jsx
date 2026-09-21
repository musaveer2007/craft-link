import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Truck, Home as HomeIcon, Search as SearchIcon, ShoppingBag, User } from 'lucide-react';
import './CustomerOrderConfirmation.css';
import './CustomerHome.css';
import './Login.css';

const CustomerOrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="order-confirmation-page">
      <div className="confirmation-header">
        <div className="success-icon-large">
          <Check size={40} strokeWidth={3} />
        </div>
        <h1 className="confirmation-title">Order placed successfully! 🎉</h1>
        <p className="confirmation-subtitle">Thank you for supporting independent artisans.</p>
        <div className="confirmation-order-id">Order #CL1028</div>
        <div className="confirmation-payment-status">Paid</div>
      </div>

      <div className="confirmation-content">
        
        {/* Order Card */}
        <div className="confirmation-section">
          <div className="confirmation-prod-row">
            <img src="/images/basket.jpg" alt="Product" className="confirmation-prod-thumb" />
            <div className="confirmation-prod-info">
              <span className="confirmation-prod-name">Handcrafted Palm Leaf Basket</span>
              <div className="confirmation-prod-meta">
                <span>Qty: 1</span>
                <span className="confirmation-prod-price">₹650</span>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Information */}
        <div className="confirmation-section">
          <h2 className="confirmation-section-title">Delivering to</h2>
          <div className="delivery-info-text">
            <span className="delivery-info-name">Arjun Kumar</span>
            <span>12, Anna Nagar</span>
            <span>Chennai, Tamil Nadu</span>
            <span>600040</span>
          </div>
        </div>

        {/* Delivery Estimate */}
        <div className="confirmation-estimate">
          <Truck size={20} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '12px', color: 'var(--color-primary)', fontWeight: 500, opacity: 0.8 }}>Estimated delivery</span>
            <span>3–5 business days</span>
          </div>
        </div>

        {/* Order Status */}
        <div className="confirmation-section">
          <h2 className="confirmation-section-title">Order Status</h2>
          
          <div className="confirmation-status-timeline">
            <div className="conf-timeline-item active">
              <div className="conf-timeline-icon"><Check size={8} strokeWidth={4} /></div>
              <div className="conf-timeline-content">
                <div className="conf-timeline-title">Order placed</div>
                <div className="conf-timeline-desc">The artisan has received your order.</div>
              </div>
            </div>
            <div className="conf-timeline-item">
              <div className="conf-timeline-icon"></div>
              <div className="conf-timeline-content">
                <div className="conf-timeline-title">Preparing</div>
              </div>
            </div>
            <div className="conf-timeline-item">
              <div className="conf-timeline-icon"></div>
              <div className="conf-timeline-content">
                <div className="conf-timeline-title">Shipped</div>
              </div>
            </div>
            <div className="conf-timeline-item">
              <div className="conf-timeline-icon"></div>
              <div className="conf-timeline-content">
                <div className="conf-timeline-title">Delivered</div>
              </div>
            </div>
          </div>
        </div>

        <div className="confirmation-actions">
          <button className="primary-button" onClick={() => { /* Track Order Placeholder */ }}>
            Track Order
          </button>
          <button className="secondary-button" onClick={() => navigate('/customer/home')}>
            Continue Shopping
          </button>
        </div>

        <div className="support-message">
          Your purchase directly supports the artisan who created this product.
        </div>

      </div>

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
        <button className="nav-item active">
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

export default CustomerOrderConfirmation;

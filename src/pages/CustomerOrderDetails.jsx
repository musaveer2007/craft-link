import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Truck, MapPin, Home as HomeIcon, Search as SearchIcon, ShoppingBag, User } from 'lucide-react';
import './CustomerOrderDetails.css';
import './CustomerOrders.css';
import './CustomerOrderConfirmation.css'; // Shared timeline styles
import './Login.css';

const CustomerOrderDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Default to Preparing for CL1028, or Delivered for others
  const isDelivered = id !== 'CL1028';
  const [status, setStatus] = useState(isDelivered ? 'Delivered' : 'Preparing');
  const [showCancelModal, setShowCancelModal] = useState(false);

  const handleCancel = () => {
    setStatus('Cancelled');
    setShowCancelModal(false);
  };

  return (
    <div className="cust-order-details-page">
      <header className="cust-order-details-header">
        <button onClick={() => navigate(-1)} className="back-button" style={{ marginBottom: 0, padding: 0 }}>
          <ArrowLeft size={20} />
          Back
        </button>
        <span className="cust-section-title" style={{ margin: 0, color: 'var(--color-text-secondary)' }}>Order Details</span>
        <div style={{ width: 60 }}></div>
      </header>

      <div className="cust-order-content">
        <div className="cust-status-banner">
          <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>#{id || 'CL1028'}</span>
          <h1 className="cust-status-title">{status}</h1>
          <p className="cust-status-subtitle">
            {status === 'Preparing' ? 'The artisan is preparing your order.' : 
             status === 'Delivered' ? 'Your order has been delivered.' : 
             status === 'Cancelled' ? 'This order was cancelled.' : ''}
          </p>
        </div>

        {/* Timeline */}
        {status !== 'Cancelled' && (
          <div className="cust-section-card">
            <div className="cust-status-timeline">
              <div className="cust-timeline-item completed">
                <div className="cust-timeline-icon"><Check size={8} strokeWidth={4} /></div>
                <div className="cust-timeline-content">
                  <div className="cust-timeline-title">Order placed</div>
                  <div className="cust-timeline-desc">18 Sep 2026</div>
                </div>
              </div>
              <div className="cust-timeline-item completed">
                <div className="cust-timeline-icon"><Check size={8} strokeWidth={4} /></div>
                <div className="cust-timeline-content">
                  <div className="cust-timeline-title">Order confirmed</div>
                  <div className="cust-timeline-desc">18 Sep 2026</div>
                </div>
              </div>
              <div className={`cust-timeline-item ${status === 'Preparing' ? 'current' : 'completed'}`}>
                <div className="cust-timeline-icon">
                  {status !== 'Preparing' && <Check size={8} strokeWidth={4} />}
                </div>
                <div className="cust-timeline-content">
                  <div className="cust-timeline-title">Preparing</div>
                  {status === 'Preparing' && <div className="cust-timeline-desc">Current status</div>}
                </div>
              </div>
              <div className={`cust-timeline-item ${status === 'Delivered' ? 'completed' : ''}`}>
                <div className="cust-timeline-icon">
                  {status === 'Delivered' && <Check size={8} strokeWidth={4} />}
                </div>
                <div className="cust-timeline-content">
                  <div className="cust-timeline-title">Shipped</div>
                </div>
              </div>
              <div className={`cust-timeline-item ${status === 'Delivered' ? 'current' : ''}`}>
                <div className="cust-timeline-icon"></div>
                <div className="cust-timeline-content">
                  <div className="cust-timeline-title">Delivered</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product */}
        <div className="cust-section-card">
          <div className="cust-prod-row">
            <img src="/images/basket.jpg" alt="Product" className="cust-prod-thumb" />
            <div className="cust-prod-info">
              <span className="cust-prod-name">Handcrafted Palm Leaf Basket</span>
              <div className="cust-prod-meta">
                <span>Qty: 1</span>
                <span className="cust-prod-price">₹650</span>
              </div>
              <button className="cust-view-prod-link" onClick={() => navigate('/customer/product/2')}>
                View Product
              </button>
            </div>
          </div>
        </div>

        {/* Artisan */}
        <div className="cust-section-card">
          <h2 className="cust-section-title">Made by</h2>
          <div className="cust-artisan-info">
            <span className="cust-artisan-name">Lakshmi Devi</span>
            <span className="cust-artisan-role">Traditional Palm-Leaf Artisan</span>
            <span className="cust-artisan-loc"><MapPin size={12} /> Madurai, Tamil Nadu</span>
          </div>
        </div>

        {/* Delivery Address */}
        <div className="cust-section-card">
          <h2 className="cust-section-title">Delivering to</h2>
          <div className="cust-delivery-addr">
            <span className="cust-delivery-name">Arjun Kumar</span>
            <span>12, Anna Nagar</span>
            <span>Chennai, Tamil Nadu</span>
            <span>600040</span>
          </div>
        </div>

        {/* Order Summary */}
        <div className="cust-section-card">
          <div className="cust-summary-row">
            <span className="cust-summary-label">Subtotal</span>
            <span className="cust-summary-value">₹650</span>
          </div>
          <div className="cust-summary-row">
            <span className="cust-summary-label">Delivery</span>
            <span className="cust-summary-value">Free</span>
          </div>
          <div className="cust-summary-row total">
            <span className="cust-summary-label">Total</span>
            <span className="cust-summary-value">₹650</span>
          </div>
          <div className="cust-summary-row payment">
            <span className="cust-summary-label">Payment</span>
            <span className="cust-summary-value">Paid</span>
          </div>
        </div>

        {/* Delivery Estimate */}
        {status !== 'Delivered' && status !== 'Cancelled' && (
          <div className="cust-delivery-estimate-card">
            <Truck size={24} color="var(--color-primary)" />
            <div className="cust-estimate-details">
              <span className="cust-estimate-title">Estimated delivery</span>
              <span className="cust-estimate-value">3–5 business days</span>
              <span className="cust-estimate-desc">We'll update you when your order is shipped.</span>
            </div>
          </div>
        )}

        {/* Help */}
        <div className="cust-help-section">
          <span className="cust-help-title">Need help with this order?</span>
          <div className="cust-help-actions">
            <button className="secondary-button" style={{ flex: 1, padding: '10px 8px' }}>
              Get Help
            </button>
            <button className="secondary-button" style={{ flex: 1, padding: '10px 8px' }}>
              Contact Artisan
            </button>
          </div>
        </div>

        {/* Cancel */}
        {status === 'Preparing' && (
          <div className="cust-cancel-action">
            <button className="cust-cancel-btn" onClick={() => setShowCancelModal(true)}>
              Cancel Order
            </button>
          </div>
        )}

      </div>

      {showCancelModal && (
        <div className="dialog-overlay" onClick={() => setShowCancelModal(false)}>
          <div className="dialog-box" onClick={e => e.stopPropagation()}>
            <h3 className="dialog-title">Cancel this order?</h3>
            <p className="dialog-desc">Are you sure you want to cancel this order?</p>
            <div className="dialog-actions">
              <button className="dialog-btn dialog-cancel" onClick={() => setShowCancelModal(false)}>Keep Order</button>
              <button className="dialog-btn dialog-delete" onClick={handleCancel}>Cancel Order</button>
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
        <button className="nav-item active">
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

export default CustomerOrderDetails;

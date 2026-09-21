import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, User, MapPin, Calendar, CreditCard, ShoppingBag, Check } from 'lucide-react';
import './OrderDetails.css';
import './ArtisanOrders.css'; // For status badges
import './Login.css'; // For primary-button

const OrderDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Using id to maybe fetch order, but we'll mock it based on id or just a static one

  // Mock initial state based on "CL1024" but flexible
  const [orderStatus, setOrderStatus] = useState(id === 'CL1021' ? 'New Order' : 'Preparing');
  const [showShipModal, setShowShipModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const handleActionClick = () => {
    if (orderStatus === 'New Order') {
      setOrderStatus('Preparing');
    } else if (orderStatus === 'Preparing') {
      setShowShipModal(true);
    }
  };

  const confirmShip = () => {
    setOrderStatus('Shipped');
    setShowShipModal(false);
  };

  const getStatusClass = (status) => {
    if (status === 'New Order') return 'status-new';
    if (status === 'Preparing') return 'status-preparing';
    if (status === 'Shipped') return 'status-shipped';
    if (status === 'Delivered') return 'status-delivered';
    return '';
  };

  return (
    <div className="order-details-page">
      <header className="order-details-header">
        <button onClick={() => navigate('/artisan/orders')} className="back-button" style={{ marginBottom: 0, padding: 0 }}>
          <ArrowLeft size={20} />
          Back
        </button>
        <span className="order-status-banner-title">Order Details</span>
        <div style={{ width: 60 }}></div> {/* Spacer */}
      </header>

      <div className="order-details-content">
        <div className="order-status-banner">
          <h1 className="order-header-id">#{id || 'CL1024'}</h1>
          <span className={`order-status-badge ${getStatusClass(orderStatus)}`}>
            {orderStatus}
          </span>
        </div>

        {/* Product Section */}
        <div className="order-section-card">
          <div className="order-prod-summary">
            <img src="/images/basket.jpg" alt="Product" className="order-prod-thumb" />
            <div className="order-prod-info">
              <div className="order-prod-name">Handcrafted Palm Leaf Basket</div>
              <div className="order-prod-price-row">
                <span className="order-prod-qty">Qty: 1</span>
                <span className="order-prod-price">₹650</span>
              </div>
            </div>
          </div>
          <div className="order-subtotal-row">
            <span>Subtotal</span>
            <span>₹650</span>
          </div>
        </div>

        {/* Customer Section */}
        <div className="order-section-card">
          <h2 className="order-section-title">Customer</h2>
          <div className="order-info-grid">
            <div className="order-info-item">
              <span className="order-info-label"><User size={16} /> Name</span>
              <span className="order-info-value">Arjun Kumar</span>
            </div>
          </div>
        </div>

        {/* Delivery Section */}
        <div className="order-section-card">
          <h2 className="order-section-title">Delivery</h2>
          <div className="order-info-grid">
            <div className="order-info-item">
              <span className="order-info-label"><MapPin size={16} /> Location</span>
              <span className="order-info-value">Anna Nagar, Chennai</span>
            </div>
          </div>
        </div>

        {/* Order Information Section */}
        <div className="order-section-card">
          <div className="order-info-grid">
            <div className="order-info-item">
              <span className="order-info-label"><Calendar size={16} /> Order placed</span>
              <span className="order-info-value">18 Sep 2026</span>
            </div>
            <div className="order-info-item">
              <span className="order-info-label"><CreditCard size={16} /> Payment</span>
              <span className="order-info-value highlight">Paid</span>
            </div>
            <div className="order-info-item" style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid var(--color-border)' }}>
              <span className="order-info-label" style={{ fontWeight: 700, color: 'var(--color-primary)' }}>Order total</span>
              <span className="order-info-value" style={{ fontSize: '16px', color: 'var(--color-primary)' }}>₹650</span>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="order-section-card">
          <h2 className="order-section-title">Order Status</h2>
          <div className="status-timeline">
            
            <div className="timeline-item completed">
              <div className="timeline-icon-wrapper"><Check size={8} strokeWidth={4} /></div>
              <div className="timeline-content">
                <div className="timeline-title">Order placed</div>
                <div className="timeline-desc">18 Sep</div>
              </div>
            </div>

            <div className={`timeline-item ${orderStatus !== 'New Order' ? 'completed' : 'current'}`}>
              <div className="timeline-icon-wrapper">
                {orderStatus !== 'New Order' && <Check size={8} strokeWidth={4} />}
              </div>
              <div className="timeline-content">
                <div className="timeline-title">Order confirmed</div>
                <div className="timeline-desc">18 Sep</div>
              </div>
            </div>

            <div className={`timeline-item ${orderStatus === 'Shipped' || orderStatus === 'Delivered' ? 'completed' : orderStatus === 'Preparing' ? 'current' : ''}`}>
              <div className="timeline-icon-wrapper">
                {(orderStatus === 'Shipped' || orderStatus === 'Delivered') && <Check size={8} strokeWidth={4} />}
              </div>
              <div className="timeline-content">
                <div className="timeline-title">Preparing</div>
                {orderStatus === 'Preparing' && <div className="timeline-desc">Current status</div>}
              </div>
            </div>

            <div className={`timeline-item ${orderStatus === 'Delivered' ? 'completed' : orderStatus === 'Shipped' ? 'current' : ''}`}>
              <div className="timeline-icon-wrapper">
                {orderStatus === 'Delivered' && <Check size={8} strokeWidth={4} />}
              </div>
              <div className="timeline-content">
                <div className="timeline-title">Shipped</div>
                {orderStatus === 'Shipped' && <div className="timeline-desc">Current status</div>}
              </div>
            </div>

            <div className={`timeline-item ${orderStatus === 'Delivered' ? 'current' : ''}`}>
              <div className="timeline-icon-wrapper"></div>
              <div className="timeline-content">
                <div className="timeline-title">Delivered</div>
              </div>
            </div>

          </div>
        </div>

        {/* Action Button */}
        {orderStatus === 'New Order' && (
          <button className="primary-button" onClick={handleActionClick}>
            Accept Order & Start Preparing
          </button>
        )}
        {orderStatus === 'Preparing' && (
          <button className="primary-button" onClick={handleActionClick}>
            Mark as Shipped
          </button>
        )}
        {orderStatus === 'Shipped' && (
          <button className="primary-button" style={{ opacity: 0.7 }} disabled>
            Waiting for Delivery
          </button>
        )}
        {orderStatus === 'Delivered' && (
          <div style={{ textAlign: 'center', color: 'var(--color-success)', fontWeight: 600, padding: '16px' }}>
            <Check size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            Order Delivered
          </div>
        )}

        {/* Cancel Order Link */}
        {(orderStatus === 'New Order' || orderStatus === 'Preparing') && (
          <div className="cancel-action">
            <button className="cancel-link" onClick={() => setShowCancelModal(true)}>
              Need to cancel this order?
            </button>
          </div>
        )}
      </div>

      {/* Ship Confirmation Modal */}
      {showShipModal && (
        <div className="dialog-overlay" onClick={() => setShowShipModal(false)}>
          <div className="dialog-box" onClick={e => e.stopPropagation()}>
            <h3 className="dialog-title">Ready to ship this order?</h3>
            <p className="dialog-desc">This will update the customer that their order has been shipped.</p>
            <div className="dialog-actions">
              <button className="dialog-btn dialog-cancel" onClick={() => setShowShipModal(false)}>Cancel</button>
              <button className="dialog-btn primary-button" style={{ width: 'auto', padding: '10px 16px' }} onClick={confirmShip}>Confirm</button>
            </div>
          </div>
        </div>
      )}

      {/* Cancel Modal */}
      {showCancelModal && (
        <div className="dialog-overlay" onClick={() => setShowCancelModal(false)}>
          <div className="dialog-box" onClick={e => e.stopPropagation()}>
            <h3 className="dialog-title">Cancel this order?</h3>
            <p className="dialog-desc">This will notify the customer and issue a refund if applicable.</p>
            <div className="dialog-actions">
              <button className="dialog-btn dialog-cancel" onClick={() => setShowCancelModal(false)}>Keep Order</button>
              <button className="dialog-btn dialog-delete" onClick={() => { setShowCancelModal(false); navigate('/artisan/orders'); }}>Cancel Order</button>
            </div>
          </div>
        </div>
      )}

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
        <button className="nav-item active">
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

export default OrderDetails;

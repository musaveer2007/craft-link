import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Home as HomeIcon, Search as SearchIcon, ShoppingBag, User } from 'lucide-react';
import './CustomerOrders.css';
import './CustomerHome.css';
import './Login.css';

const CustomerOrders = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');

  // Hardcoded for prototype as per prompt
  const hasOrders = true;

  return (
    <div className="customer-orders-page">
      <header className="customer-orders-header">
        <h1 className="customer-orders-title">My Orders</h1>
        <span className="customer-orders-subtitle">Track your purchases and order history.</span>
      </header>

      <div className="orders-filter-tabs">
        <button 
          className={`order-tab ${activeTab === 'All' ? 'active' : ''}`}
          onClick={() => setActiveTab('All')}
        >
          All
        </button>
        <button 
          className={`order-tab ${activeTab === 'Active' ? 'active' : ''}`}
          onClick={() => setActiveTab('Active')}
        >
          Active
        </button>
        <button 
          className={`order-tab ${activeTab === 'Delivered' ? 'active' : ''}`}
          onClick={() => setActiveTab('Delivered')}
        >
          Delivered
        </button>
      </div>

      {hasOrders ? (
        <div className="customer-orders-list">
          
          {/* Active Order */}
          {(activeTab === 'All' || activeTab === 'Active') && (
            <div className="cust-order-card">
              <div className="cust-order-header">
                <span className="cust-order-id">Order #CL1028</span>
                <span className="cust-order-date">18 Sep 2026</span>
              </div>
              <div className="cust-order-prod">
                <img src="/images/basket.jpg" alt="Basket" className="cust-order-thumb" />
                <div className="cust-order-info">
                  <span className="cust-order-name">Handcrafted Palm Leaf Basket</span>
                  <span className="cust-order-meta">Qty: 1</span>
                </div>
              </div>
              
              <div className="cust-order-status-row">
                <span className="cust-order-status-badge status-prep">Preparing</span>
                <span className="cust-order-total">₹650</span>
              </div>

              <div className="micro-timeline">
                <div className="micro-node completed">
                  <div className="micro-icon"><Check size={10} strokeWidth={4} /></div>
                  <span className="micro-label">Order placed</span>
                </div>
                <div className="micro-node active">
                  <div className="micro-icon"></div>
                  <span className="micro-label">Preparing</span>
                </div>
                <div className="micro-node">
                  <div className="micro-icon"></div>
                  <span className="micro-label">Shipped</span>
                </div>
                <div className="micro-node">
                  <div className="micro-icon"></div>
                  <span className="micro-label">Delivered</span>
                </div>
              </div>

              <div className="cust-order-actions">
                <button className="cust-track-btn" onClick={() => navigate('/customer/orders/CL1028')}>
                  Track Order
                </button>
              </div>
            </div>
          )}

          {/* Delivered Order 1 */}
          {(activeTab === 'All' || activeTab === 'Delivered') && (
            <div className="cust-order-card">
              <div className="cust-order-header">
                <span className="cust-order-id">Order #CL1021</span>
                <span className="cust-order-date">14 Sep 2026</span>
              </div>
              <div className="cust-order-prod">
                <img src="/images/basket.jpg" alt="Box" className="cust-order-thumb" />
                <div className="cust-order-info">
                  <span className="cust-order-name">Traditional Palm Leaf Storage Box</span>
                  <span className="cust-order-meta">Qty: 1</span>
                </div>
              </div>
              <div className="cust-order-status-row">
                <span className="cust-order-status-badge status-deliv">Delivered</span>
                <span className="cust-order-total">₹850</span>
              </div>
              <div className="cust-order-actions">
                <button className="cust-view-btn" onClick={() => navigate('/customer/orders/CL1021')}>
                  View Order
                </button>
              </div>
            </div>
          )}

          {/* Delivered Order 2 */}
          {(activeTab === 'All' || activeTab === 'Delivered') && (
            <div className="cust-order-card">
              <div className="cust-order-header">
                <span className="cust-order-id">Order #CL1015</span>
                <span className="cust-order-date">08 Sep 2026</span>
              </div>
              <div className="cust-order-prod">
                <img src="/images/saree.jpg" alt="Saree" className="cust-order-thumb" />
                <div className="cust-order-info">
                  <span className="cust-order-name">Handwoven Cotton Saree</span>
                  <span className="cust-order-meta">Qty: 1</span>
                </div>
              </div>
              <div className="cust-order-status-row">
                <span className="cust-order-status-badge status-deliv">Delivered</span>
                <span className="cust-order-total">₹2,400</span>
              </div>
              <div className="cust-order-actions">
                <button className="cust-view-btn" onClick={() => navigate('/customer/orders/CL1015')}>
                  View Order
                </button>
              </div>
            </div>
          )}

        </div>
      ) : (
        <div className="cust-empty-orders">
          <ShoppingBag size={48} color="var(--color-border)" style={{ marginBottom: '16px' }} />
          <h2 className="cust-empty-title">No orders yet</h2>
          <p className="cust-empty-desc">When you purchase a handmade product, your orders will appear here.</p>
          <button className="primary-button" style={{ width: 'auto', padding: '12px 24px' }} onClick={() => navigate('/customer/home')}>
            Explore Handmade Products
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

export default CustomerOrders;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, Home, Package, ShoppingBag, User } from 'lucide-react';
import './ArtisanOrders.css';
import './Login.css';

const MOCK_ORDERS = [
  { id: 'CL1024', name: 'Handcrafted Palm Leaf Basket', qty: 1, customer: 'Arjun Kumar', amount: '₹650', status: 'Preparing', date: '18 Sep 2026', img: '/images/basket.jpg' },
  { id: 'CL1021', name: 'Traditional Palm Leaf Storage Box', qty: 1, customer: 'Priya S.', amount: '₹850', status: 'New Order', date: '17 Sep 2026', img: '/images/basket.jpg' },
  { id: 'CL1018', name: 'Handmade Palm Leaf Tray', qty: 2, customer: 'Rahul M.', amount: '₹1,500', status: 'Shipped', date: '15 Sep 2026', img: '/images/tray.jpg' },
  { id: 'CL1009', name: 'Decorative Palm Leaf Wall Art', qty: 1, customer: 'Meera R.', amount: '₹1,200', status: 'Delivered', date: '11 Sep 2026', img: '/images/vase.jpg' },
];

const getStatusClass = (status) => {
  if (status === 'New Order') return 'status-new';
  if (status === 'Preparing') return 'status-preparing';
  if (status === 'Shipped') return 'status-shipped';
  if (status === 'Delivered') return 'status-delivered';
  return '';
};

const ArtisanOrders = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const filteredOrders = MOCK_ORDERS.filter(o => {
    if (filter === 'All') return true;
    if (filter === 'New') return o.status === 'New Order';
    return o.status === filter;
  });

  return (
    <div className="orders-page">
      <header className="orders-header">
        <div className="orders-header-text">
          <h1 className="orders-title">My Orders</h1>
          <span className="orders-subtitle">Manage orders from your customers.</span>
        </div>
        <button className="icon-btn">
          <Filter size={20} />
        </button>
      </header>

      <div className="orders-summary">
        8 Total Orders
      </div>

      <div className="orders-filters-container">
        {['All', 'New', 'Preparing', 'Shipped', 'Delivered'].map(f => (
          <button 
            key={f}
            className={`order-filter-chip ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {filteredOrders.length > 0 ? (
        <div className="orders-list">
          {filteredOrders.map(order => (
            <div key={order.id} className="order-card" onClick={() => navigate(`/artisan/orders/${order.id}`)}>
              <div className="order-card-header">
                <span className="order-id">Order #{order.id}</span>
                <span className="order-date">{order.date}</span>
              </div>
              
              <div className="order-product-row">
                <img src={order.img} alt={order.name} className="order-thumb" />
                <div className="order-prod-details">
                  <div className="order-prod-name">{order.name}</div>
                  <div className="order-prod-qty">Qty: {order.qty}</div>
                </div>
              </div>

              <div className="order-meta-grid">
                <div className="order-meta-item">
                  <span className="order-meta-label">Customer</span>
                  <span className="order-meta-value">{order.customer}</span>
                </div>
                <div className="order-meta-item">
                  <span className="order-meta-label">Amount</span>
                  <span className="order-meta-value">{order.amount}</span>
                </div>
              </div>

              <div className="order-card-footer">
                <span className={`order-status-badge ${getStatusClass(order.status)}`}>
                  {order.status}
                </span>
                <button 
                  className="view-order-btn"
                  onClick={(e) => { e.stopPropagation(); navigate(`/artisan/orders/${order.id}`); }}
                >
                  View Order
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="orders-empty-state">
          <ShoppingBag size={48} color="var(--color-border)" style={{ marginBottom: '16px' }} />
          <h2 className="orders-empty-title">No orders yet</h2>
          <p className="orders-empty-desc">Once customers purchase your products, their orders will appear here.</p>
          <button className="primary-button" style={{ width: 'auto', padding: '12px 24px' }} onClick={() => navigate('/artisan/products')}>
            View My Products
          </button>
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

export default ArtisanOrders;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, ShoppingBag, CheckCircle, Package, User } from 'lucide-react';
import './Notifications.css';

const Notifications = () => {
  const navigate = useNavigate();
  // For the sake of the prototype, we can toggle between roles here
  const [role, setRole] = useState('artisan'); 
  const [hasRead, setHasRead] = useState(false);

  const handleMarkAllRead = () => {
    setHasRead(true);
  };

  return (
    <div className="notifications-page">
      
      {/* Prototype specific role toggle (Hidden in real app, useful for demo) */}
      <div className="demo-role-toggle">
        <label style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <input type="radio" checked={role === 'artisan'} onChange={() => setRole('artisan')} />
          View as Artisan
        </label>
        <label style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <input type="radio" checked={role === 'customer'} onChange={() => setRole('customer')} />
          View as Customer
        </label>
      </div>

      <header className="notifications-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={() => navigate(-1)} className="back-button" style={{ marginBottom: 0, padding: 0 }}>
            <ArrowLeft size={20} />
          </button>
          <h1 className="notifications-title">Notifications</h1>
        </div>
        <button className="mark-read-btn" onClick={handleMarkAllRead}>
          Mark all as read
        </button>
      </header>

      <div className="notifications-list">
        
        {role === 'artisan' && (
          <>
            <div className={`notification-item ${!hasRead ? 'unread' : ''}`} onClick={() => navigate('/artisan/orders/CL1028')}>
              {!hasRead && <div className="unread-dot"></div>}
              <div className="notification-icon-wrapper">
                <ShoppingBag size={20} />
              </div>
              <div className="notification-content">
                <span className="notification-title">New order received</span>
                <span className="notification-desc">Arjun Kumar ordered your Handcrafted Palm Leaf Basket.</span>
                <span className="notification-time">2 min ago</span>
              </div>
            </div>

            <div className={`notification-item ${!hasRead ? 'unread' : ''}`} onClick={() => navigate('/artisan/products/manage/2')}>
              {!hasRead && <div className="unread-dot"></div>}
              <div className="notification-icon-wrapper">
                <CheckCircle size={20} />
              </div>
              <div className="notification-content">
                <span className="notification-title">Your product is live</span>
                <span className="notification-desc">Handcrafted Palm Leaf Basket is now visible to customers.</span>
                <span className="notification-time">1 hour ago</span>
              </div>
            </div>

            <div className="notification-item" onClick={() => navigate('/artisan/orders/CL1021')}>
              <div className="notification-icon-wrapper">
                <Package size={20} />
              </div>
              <div className="notification-content">
                <span className="notification-title">Order ready to ship</span>
                <span className="notification-desc">Order #CL1021 is waiting for shipment.</span>
                <span className="notification-time">Yesterday</span>
              </div>
            </div>

            <div className="notification-item" onClick={() => navigate('/artisan/profile')}>
              <div className="notification-icon-wrapper">
                <User size={20} />
              </div>
              <div className="notification-content">
                <span className="notification-title">Complete your profile</span>
                <span className="notification-desc">Add a few more details to help customers learn about your craft.</span>
                <span className="notification-time">2 days ago</span>
              </div>
            </div>
          </>
        )}

        {role === 'customer' && (
          <>
            <div className={`notification-item ${!hasRead ? 'unread' : ''}`} onClick={() => navigate('/customer/orders/CL1028')}>
              {!hasRead && <div className="unread-dot"></div>}
              <div className="notification-icon-wrapper">
                <Package size={20} />
              </div>
              <div className="notification-content">
                <span className="notification-title">Order update</span>
                <span className="notification-desc">Your Handcrafted Palm Leaf Basket is being prepared by the artisan.</span>
                <span className="notification-time">2 min ago</span>
              </div>
            </div>

            <div className={`notification-item ${!hasRead ? 'unread' : ''}`} onClick={() => navigate('/customer/orders/CL1028')}>
              {!hasRead && <div className="unread-dot"></div>}
              <div className="notification-icon-wrapper">
                <CheckCircle size={20} />
              </div>
              <div className="notification-content">
                <span className="notification-title">Order confirmed</span>
                <span className="notification-desc">Your order #CL1028 has been confirmed.</span>
                <span className="notification-time">1 hour ago</span>
              </div>
            </div>

            <div className="notification-item" onClick={() => navigate('/customer/home')}>
              <div className="notification-icon-wrapper">
                <ShoppingBag size={20} />
              </div>
              <div className="notification-content">
                <span className="notification-title">Discover handmade products</span>
                <span className="notification-desc">Explore unique products made by artisans on CraftLink.</span>
                <span className="notification-time">Yesterday</span>
              </div>
            </div>
          </>
        )}

      </div>

    </div>
  );
};

export default Notifications;

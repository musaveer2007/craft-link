import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WifiOff, PackageX, ShoppingBag, AlertCircle } from 'lucide-react';
import './SharedStates.css';

export const LoadingState = ({ text = "Loading..." }) => (
  <div className="shared-state-container">
    <div className="subtle-loader"></div>
    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>{text}</span>
  </div>
);

export const NetworkErrorState = () => {
  const navigate = useNavigate();
  return (
    <div className="shared-state-container">
      <div className="shared-state-icon"><WifiOff size={24} /></div>
      <h2 className="shared-state-title">Something went wrong</h2>
      <p className="shared-state-desc">We couldn't load this right now. Please check your connection and try again.</p>
      <div className="shared-state-actions">
        <button className="primary-button" onClick={() => window.location.reload()}>Try Again</button>
        <button className="secondary-button" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export const EmptyProductsState = ({ role = 'artisan' }) => {
  const navigate = useNavigate();
  return (
    <div className="shared-state-container">
      <div className="shared-state-icon"><PackageX size={24} /></div>
      <h2 className="shared-state-title">
        {role === 'artisan' ? 'No products yet' : 'No products found'}
      </h2>
      <p className="shared-state-desc">
        {role === 'artisan' 
          ? 'Start by adding your first handmade product.' 
          : 'Try a different search or explore another category.'}
      </p>
      <div className="shared-state-actions">
        {role === 'artisan' ? (
          <button className="primary-button" onClick={() => navigate('/artisan/products/add')}>Add Product</button>
        ) : (
          <button className="primary-button" onClick={() => navigate('/customer/home')}>Explore Products</button>
        )}
      </div>
    </div>
  );
};

export const EmptyOrdersState = ({ role = 'customer' }) => {
  const navigate = useNavigate();
  return (
    <div className="shared-state-container">
      <div className="shared-state-icon"><ShoppingBag size={24} /></div>
      <h2 className="shared-state-title">No orders yet</h2>
      <p className="shared-state-desc">
        {role === 'customer' 
          ? 'Your purchases will appear here.' 
          : 'Orders from customers will appear here.'}
      </p>
      <div className="shared-state-actions">
        {role === 'customer' ? (
          <button className="primary-button" onClick={() => navigate('/customer/home')}>Explore Handmade Products</button>
        ) : (
          <button className="primary-button" onClick={() => navigate('/artisan/products')}>View My Products</button>
        )}
      </div>
    </div>
  );
};

export const ProductNotFoundState = () => {
  const navigate = useNavigate();
  return (
    <div className="shared-state-container">
      <div className="shared-state-icon"><AlertCircle size={24} /></div>
      <h2 className="shared-state-title">Product unavailable</h2>
      <p className="shared-state-desc">This product may have been removed or is temporarily unavailable.</p>
      <div className="shared-state-actions">
        <button className="primary-button" onClick={() => navigate('/customer/home')}>Back to Marketplace</button>
      </div>
    </div>
  );
};

export const SessionExpiredModal = ({ onLogin }) => {
  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <h3 className="dialog-title">Your session has expired</h3>
        <p className="dialog-desc">Please log in again to continue.</p>
        <div className="dialog-actions">
          <button className="dialog-btn dialog-delete" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }} onClick={onLogin}>Log In</button>
        </div>
      </div>
    </div>
  );
};

export const ConfirmationModal = ({ title, description, primaryActionText, onConfirm, onCancel, isDestructive = true }) => {
  return (
    <div className="dialog-overlay" onClick={onCancel}>
      <div className="dialog-box" onClick={e => e.stopPropagation()}>
        <h3 className="dialog-title">{title}</h3>
        <p className="dialog-desc">{description}</p>
        <div className="dialog-actions">
          <button className="dialog-btn dialog-cancel" onClick={onCancel}>Cancel</button>
          <button 
            className={`dialog-btn ${isDestructive ? 'dialog-delete' : ''}`} 
            style={!isDestructive ? { backgroundColor: 'var(--color-primary)', color: 'white' } : {}}
            onClick={onConfirm}
          >
            {primaryActionText}
          </button>
        </div>
      </div>
    </div>
  );
};

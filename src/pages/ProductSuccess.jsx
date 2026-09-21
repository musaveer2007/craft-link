import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Sparkles, Home, Package, ShoppingBag, User } from 'lucide-react';
import './ProductSuccess.css';
import './MyProducts.css'; // For status badge

const ProductSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <header className="add-header" style={{ padding: '24px 24px 0 24px', marginBottom: 0 }}>
        <button onClick={() => navigate('/artisan/home')} className="back-button" style={{ marginBottom: 0, padding: 0 }}>
          <ArrowLeft size={20} />
          Home
        </button>
      </header>

      <div className="success-content">
        <div className="success-icon-container">
          <Check size={40} strokeWidth={3} />
        </div>
        
        <h1 className="success-title">Your product is live! 🎉</h1>
        <p className="success-subtitle">
          Handcrafted Palm Leaf Basket is now available for customers to discover on CraftLink.
        </p>

        <div className="success-product-card">
          <img src="/images/basket.jpg" alt="Product" className="success-product-img" />
          <div className="success-product-details">
            <span className="success-product-name">Handcrafted Palm Leaf Basket</span>
            <span className="success-product-price">₹650</span>
            <div>
              <span className="status-badge status-published">Published</span>
            </div>
          </div>
        </div>

        <div className="success-actions">
          <button className="primary-button" onClick={() => navigate('/artisan/products/manage/1')}>
            View Product
          </button>
          <button className="secondary-button" onClick={() => navigate('/artisan/products/add')}>
            Add Another Product
          </button>
          <button className="tertiary-btn" onClick={() => navigate('/artisan/products')}>
            Back to Products
          </button>
        </div>

        <div className="ai-transparency-card">
          <div className="ai-transparency-title">
            <Sparkles size={14} /> Created with AI assistance
          </div>
          <p className="ai-transparency-text">
            AI helped prepare suggestions for your product listing. You reviewed and approved the final details before publishing.
          </p>
          <div className="ai-transparency-highlight">
            AI assists. Artisan decides.
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button className="nav-item" onClick={() => navigate('/artisan/home')}>
          <Home className="nav-icon" size={24} />
          Home
        </button>
        <button className="nav-item active" onClick={() => navigate('/artisan/products')}>
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

export default ProductSuccess;

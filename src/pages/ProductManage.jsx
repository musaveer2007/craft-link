import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MoreHorizontal, MapPin, Home, Package, ShoppingBag, User, Tag } from 'lucide-react';
import './ProductManage.css';
import './MyProducts.css'; // For status badge styles
import './ProductDraft.css'; // For tags style

const ProductManage = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showUnpublishModal, setShowUnpublishModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [status, setStatus] = useState('Published');

  const handleUnpublish = () => {
    setStatus('Draft / Unpublished');
    setShowUnpublishModal(false);
  };

  const handleDelete = () => {
    navigate('/artisan/products');
  };

  return (
    <div className="manage-page" onClick={() => setShowMenu(false)}>
      <header className="manage-header">
        <button onClick={() => navigate('/artisan/products')} className="back-button" style={{ marginBottom: 0, padding: 0 }}>
          <ArrowLeft size={20} />
          Back
        </button>
        <h1 className="page-title" style={{ fontSize: '18px' }}>Product Details</h1>
        <button 
          className="text-btn-action" 
          onClick={(e) => { e.stopPropagation(); setShowMenu(!showMenu); }}
        >
          <MoreHorizontal size={24} />
        </button>

        {showMenu && (
          <div className="overflow-menu" onClick={e => e.stopPropagation()}>
            <button className="dropdown-item" onClick={() => { navigate('/artisan/products/add/edit'); setShowMenu(false); }}>
              Edit Product
            </button>
            <button className="dropdown-item" onClick={() => { setShowUnpublishModal(true); setShowMenu(false); }}>
              Unpublish Product
            </button>
            <button className="dropdown-item destructive-text" onClick={() => { setShowDeleteModal(true); setShowMenu(false); }}>
              Delete Product
            </button>
          </div>
        )}
      </header>

      <img src="/images/basket.jpg" alt="Product" className="manage-hero-img" />

      <div className="manage-content">
        <div>
          <span className={`status-badge ${status === 'Published' ? 'status-published' : 'status-draft'}`}>
            {status}
          </span>
        </div>

        <div className="manage-header-row">
          <h2 className="manage-name">Handcrafted Palm Leaf Basket</h2>
          <span className="manage-price">₹650</span>
        </div>

        <div className="manage-meta-row">
          <div className="manage-meta-item"><Package size={16} /> 10 available</div>
          <div className="manage-meta-item"><Tag size={16} /> Home Décor</div>
          <div className="manage-meta-item" style={{ color: 'var(--color-primary)' }}>Palm Leaf</div>
        </div>

        <div className="manage-section">
          <h3 className="manage-section-title">About this product</h3>
          <p className="manage-description">
            A traditionally handcrafted palm-leaf basket made using natural materials and traditional weaving techniques. Each piece is carefully woven by hand, giving it a unique character.
          </p>
        </div>

        <div className="manage-section">
          <h3 className="manage-section-title">Tags</h3>
          <div className="draft-tags">
            <span className="draft-tag">Handmade</span>
            <span className="draft-tag">Traditional</span>
            <span className="draft-tag">Eco-friendly</span>
            <span className="draft-tag">Natural</span>
          </div>
        </div>

        <div className="manage-section">
          <h3 className="manage-section-title">About the artisan</h3>
          <div className="artisan-story-card">
            <div className="artisan-story-name">Lakshmi Devi</div>
            <div className="artisan-story-role">Traditional Palm-Leaf Artisan</div>
            <div className="artisan-story-location">
              <MapPin size={12} /> Madurai, Tamil Nadu
            </div>
          </div>
        </div>

        <div className="manage-status-card">
          <div className="manage-status-header">
            <span className="manage-status-title">Product status</span>
            <span className={`status-badge ${status === 'Published' ? 'status-published' : 'status-draft'}`}>
              {status}
            </span>
          </div>
          <p className="manage-status-desc">
            {status === 'Published' 
              ? 'Your product is currently visible to customers.' 
              : 'Your product is hidden and cannot be discovered or purchased.'}
          </p>
        </div>

        <div className="manage-actions-row">
          <button className="primary-button" style={{ flex: 1 }} onClick={() => navigate('/artisan/products/add/edit')}>
            Edit Product
          </button>
          <button className="secondary-button" style={{ flex: 1 }} onClick={() => setShowUnpublishModal(true)}>
            Unpublish Product
          </button>
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

      {/* Unpublish Modal */}
      {showUnpublishModal && (
        <div className="dialog-overlay" onClick={() => setShowUnpublishModal(false)}>
          <div className="dialog-box" onClick={e => e.stopPropagation()}>
            <h3 className="dialog-title">Unpublish this product?</h3>
            <p className="dialog-desc">Customers will no longer be able to discover or purchase this product.</p>
            <div className="dialog-actions">
              <button className="dialog-btn dialog-cancel" onClick={() => setShowUnpublishModal(false)}>Keep Published</button>
              <button className="dialog-btn primary-button" style={{ width: 'auto', padding: '10px 16px' }} onClick={handleUnpublish}>Unpublish</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="dialog-overlay" onClick={() => setShowDeleteModal(false)}>
          <div className="dialog-box" onClick={e => e.stopPropagation()}>
            <h3 className="dialog-title">Delete this product?</h3>
            <p className="dialog-desc">This action will permanently remove the product from your product list.</p>
            <div className="dialog-actions">
              <button className="dialog-btn dialog-cancel" onClick={() => setShowDeleteModal(false)}>Cancel</button>
              <button className="dialog-btn dialog-delete" onClick={handleDelete}>Delete Product</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManage;

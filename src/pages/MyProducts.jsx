import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoreVertical, Home, Package, ShoppingBag, User, Plus, Box } from 'lucide-react';
import './MyProducts.css';
import './ArtisanHome.css'; // For shared bottom nav and status badges

const initialProducts = [
  { id: 1, name: 'Handwoven Palm Leaf Basket', price: '₹650', status: 'Published', image: '/images/basket.jpg' },
  { id: 2, name: 'Traditional Palm Leaf Storage Box', price: '₹850', status: 'Published', image: '/images/basket.jpg' },
  { id: 3, name: 'Decorative Palm Leaf Wall Art', price: '₹1,200', status: 'Draft', image: '/images/vase.jpg' },
  { id: 4, name: 'Handmade Palm Leaf Tray', price: '₹750', status: 'Published', image: '/images/tray.jpg' }
];

const MyProducts = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [products, setProducts] = useState(initialProducts);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);

  const filteredProducts = products.filter(p => filter === 'All' ? true : p.status === filter + (filter === 'Draft' ? 's' : '')); 
  // 'Drafts' in filter maps to 'Draft' in status, 'Published' maps to 'Published'

  const toggleMenu = (id, e) => {
    e.stopPropagation();
    setActiveMenuId(activeMenuId === id ? null : id);
  };

  const handleDeleteClick = (product, e) => {
    e.stopPropagation();
    setProductToDelete(product);
    setActiveMenuId(null);
  };

  const confirmDelete = () => {
    setProducts(products.filter(p => p.id !== productToDelete.id));
    setProductToDelete(null);
  };

  return (
    <div className="my-products-page" onClick={() => setActiveMenuId(null)}>
      
      <header className="products-header">
        <h1 className="page-title">My Products</h1>
        <button 
          className="text-btn-action" 
          style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
          onClick={() => navigate('/artisan/products/add')}
        >
          <Plus size={18} /> Add
        </button>
      </header>
      <div className="products-count">{products.length} products</div>

      {products.length > 0 ? (
        <>
          <div className="filters-container">
            {['All', 'Published', 'Drafts'].map(f => (
              <button 
                key={f}
                className={`filter-chip ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="product-list-container">
            {filteredProducts.map(product => (
              <div 
                key={product.id} 
                className="my-product-card"
                onClick={() => { /* Navigate to manage product */ }}
              >
                <img src={product.image} alt={product.name} className="my-product-img" />
                <div className="my-product-details">
                  <span className="product-name" style={{ fontSize: '14px' }}>{product.name}</span>
                  <span className="product-price">{product.price}</span>
                  <div>
                    <span className={`status-badge ${product.status === 'Published' ? 'status-published' : 'status-draft'}`}>
                      {product.status}
                    </span>
                  </div>
                </div>
                
                <button 
                  className="action-menu-btn"
                  onClick={(e) => toggleMenu(product.id, e)}
                >
                  <MoreVertical size={20} />
                </button>

                {activeMenuId === product.id && (
                  <div className="action-dropdown" onClick={e => e.stopPropagation()}>
                    <button className="dropdown-item">Edit</button>
                    <button className="dropdown-item">View</button>
                    <button className="dropdown-item danger" onClick={(e) => handleDeleteClick(product, e)}>Delete</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">
            <Box size={40} />
          </div>
          <h2 className="empty-title">No products yet</h2>
          <p className="empty-desc">Start by adding your first handmade product.</p>
          <button 
            className="primary-button" 
            style={{ width: 'auto', padding: '12px 24px' }}
            onClick={() => navigate('/artisan/products/add')}
          >
            Add Product
          </button>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {productToDelete && (
        <div className="dialog-overlay" onClick={() => setProductToDelete(null)}>
          <div className="dialog-box" onClick={e => e.stopPropagation()}>
            <h3 className="dialog-title">Delete this product?</h3>
            <p className="dialog-desc">Are you sure you want to remove this product?</p>
            <div className="dialog-actions">
              <button className="dialog-btn dialog-cancel" onClick={() => setProductToDelete(null)}>Cancel</button>
              <button className="dialog-btn dialog-delete" onClick={confirmDelete}>Delete</button>
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
        <button className="nav-item active">
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

export default MyProducts;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bell, Heart, Home as HomeIcon, Search as SearchIcon, ShoppingBag, User } from 'lucide-react';
import './CustomerHome.css';
import './ArtisanHome.css'; // For shared bottom nav styles

const CATEGORIES = ['All', 'Textiles', 'Pottery', 'Woodcraft', 'Jewellery', 'Home Décor', 'Accessories'];

const PRODUCTS = [
  { id: 1, name: 'Handwoven Cotton Saree', price: '₹2,400', category: 'Textiles', artisan: 'Made by Meena', img: '/images/saree.jpg' },
  { id: 2, name: 'Handcrafted Palm Leaf Basket', price: '₹650', category: 'Home Décor', artisan: 'Made by Lakshmi Devi', img: '/images/basket.jpg' },
  { id: 3, name: 'Terracotta Pot', price: '₹450', category: 'Pottery', artisan: 'Made by Ravi', img: '/images/vase.jpg' },
  { id: 4, name: 'Handmade Wooden Lamp', price: '₹1,800', category: 'Woodcraft', artisan: 'Made by Kumar', img: '/images/tray.jpg' },
];

const CustomerHome = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="customer-home-page">
      <header className="customer-header">
        <div>
          <h1 className="customer-greeting-title">Hello, Arjun 👋</h1>
          <p className="customer-greeting-sub">Discover something handmade today.</p>
        </div>
        <div className="header-icons">
          <button className="icon-button" onClick={() => navigate('/notifications')}>
            <Bell size={24} />
          </button>
          <div 
            className="customer-avatar-small" 
            onClick={() => navigate('/customer/profile')} 
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-primary)', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
          >
            A
          </div>
        </div>
      </header>

      <div className="search-section">
        <div className="search-bar">
          <Search size={20} />
          <input 
            type="text" 
            placeholder="Search handmade products..." 
            className="search-input"
          />
        </div>
      </div>

      <div className="categories-section">
        <h2 className="section-heading">Explore Categories</h2>
        <div className="categories-scroll">
          {CATEGORIES.map(cat => (
            <button 
              key={cat} 
              className={`category-chip ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="featured-section">
        <h2 className="section-heading" style={{ paddingLeft: 0, paddingRight: 0 }}>Featured Handmade</h2>
        <div className="product-grid">
          {PRODUCTS.map(product => (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => navigate(`/customer/product/${product.id}`)}
            >
              <div className="product-card-img-container">
                <img src={product.img} alt={product.name} className="product-card-img" />
                <button className="favorite-btn" onClick={(e) => e.stopPropagation()}>
                  <Heart size={16} />
                </button>
              </div>
              <div className="product-card-info">
                <div className="product-card-name">{product.name}</div>
                <div className="product-card-price">{product.price}</div>
                <div className="product-card-meta">
                  <span>{product.category}</span>
                  <span>{product.artisan}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="made-by-section">
        <h2 className="made-by-title">Made by Artisans</h2>
        <p className="made-by-desc">
          Discover unique products and the stories behind the people who make them.
        </p>
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button className="nav-item active" onClick={() => navigate('/customer/home')}>
          <HomeIcon className="nav-icon" size={24} />
          Home
        </button>
        <button className="nav-item" onClick={() => document.querySelector('.search-input').focus()}>
          <SearchIcon className="nav-icon" size={24} />
          Search
        </button>
        <button className="nav-item" onClick={() => navigate('/customer/orders')}>
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

export default CustomerHome;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Plus, Truck } from 'lucide-react';
import './CustomerCheckout.css';
import './Login.css'; // For primary-button

const CustomerCheckout = () => {
  const navigate = useNavigate();
  const [addressSelected, setAddressSelected] = useState(true);

  return (
    <div className="checkout-page">
      <header className="checkout-header">
        <button onClick={() => navigate(-1)} className="back-button" style={{ marginBottom: 0, padding: 0 }}>
          <ArrowLeft size={20} />
          Back
        </button>
        <h1 className="checkout-title">Checkout</h1>
        <div style={{ width: 60 }}></div> {/* Spacer */}
      </header>

      <div className="checkout-progress">
        <span>Cart</span>
        <span>→</span>
        <span className="active">Delivery</span>
        <span>→</span>
        <span>Payment</span>
      </div>

      <div className="checkout-content">
        
        {/* Delivery Address */}
        <section className="checkout-section">
          <h2 className="checkout-section-title">Delivery Address</h2>
          
          <div 
            className={`address-card ${addressSelected ? 'selected' : ''}`}
            onClick={() => setAddressSelected(true)}
          >
            <div className="radio-circle">
              <div className="radio-circle-inner"></div>
            </div>
            <div className="address-details">
              <span className="address-name">Arjun Kumar</span>
              <span>12, Anna Nagar</span>
              <span>Chennai, Tamil Nadu</span>
              <span>600040</span>
            </div>
            <button className="address-edit" onClick={(e) => { e.stopPropagation(); /* edit modal */ }}>
              Edit
            </button>
          </div>

          <button className="add-address-btn">
            <Plus size={16} /> Add New Address
          </button>
        </section>

        {/* Contact Information */}
        <section className="checkout-section">
          <h2 className="checkout-section-title">Contact Information</h2>
          <div className="contact-card">
            <div className="contact-item">
              <Phone size={16} /> +91 98765 43210
            </div>
            <div className="contact-item">
              <Mail size={16} /> arjun@example.com
            </div>
            <div className="contact-note">
              We'll use this information for order updates.
            </div>
          </div>
        </section>

        {/* Order Summary */}
        <section className="checkout-section">
          <h2 className="checkout-section-title">Your Order</h2>
          <div className="order-summary-card">
            <div className="checkout-prod-row">
              <img src="/images/basket.jpg" alt="Product" className="checkout-prod-thumb" />
              <div className="checkout-prod-info">
                <span className="checkout-prod-name">Handcrafted Palm Leaf Basket</span>
                <div className="checkout-prod-meta">
                  <span>Qty: 1</span>
                  <span className="checkout-prod-price">₹650</span>
                </div>
              </div>
            </div>

            <div className="checkout-totals">
              <div className="checkout-total-row">
                <span className="checkout-total-label">Subtotal</span>
                <span className="checkout-total-value">₹650</span>
              </div>
              <div className="checkout-total-row">
                <span className="checkout-total-label">Delivery</span>
                <span className="checkout-total-value" style={{ color: 'var(--color-success)' }}>Free</span>
              </div>
              <div className="checkout-total-row final">
                <span className="checkout-total-label">Total</span>
                <span className="checkout-total-value">₹650</span>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Info */}
        <div className="delivery-estimate-card">
          <Truck size={20} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '12px', color: 'var(--color-text-main)', fontWeight: 500 }}>Estimated delivery</span>
            <span>3–5 business days</span>
          </div>
        </div>

        {/* Action */}
        <div style={{ marginTop: 'var(--spacing-2)' }}>
          <button 
            className="primary-button" 
            onClick={() => navigate('/customer/payment')}
            disabled={!addressSelected}
          >
            Continue to Payment
          </button>
        </div>

      </div>
    </div>
  );
};

export default CustomerCheckout;

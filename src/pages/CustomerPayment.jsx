import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Smartphone, CreditCard, Banknote, ShieldCheck } from 'lucide-react';
import './CustomerPayment.css';
import './CustomerCheckout.css'; // For shared radio-circle styles
import './Login.css'; // For primary-button

const CustomerPayment = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('UPI');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/customer/order-confirmation');
    }, 2000);
  };

  return (
    <div className="payment-page">
      <header className="checkout-header">
        <button onClick={() => navigate(-1)} className="back-button" style={{ marginBottom: 0, padding: 0 }}>
          <ArrowLeft size={20} />
          Back
        </button>
        <h1 className="checkout-title">Payment</h1>
        <div style={{ width: 60 }}></div>
      </header>

      <div className="checkout-progress">
        <span>Cart</span>
        <span>→</span>
        <span>Delivery</span>
        <span>→</span>
        <span className="active">Payment</span>
      </div>

      <div className="payment-total-banner">
        <span className="payment-total-label">Total to Pay</span>
        <span className="payment-total-amount">₹650</span>
      </div>

      <div className="payment-methods-section">
        <h2 className="payment-section-title">Choose a payment method</h2>

        {/* UPI Option */}
        <div 
          className={`payment-method-card ${selectedMethod === 'UPI' ? 'selected' : ''}`}
          onClick={() => setSelectedMethod('UPI')}
        >
          <div className="payment-method-header">
            <div className="radio-circle">
              <div className="radio-circle-inner"></div>
            </div>
            <div className="payment-method-info">
              <span className="payment-method-name">UPI</span>
              <span className="payment-method-desc">Pay using Google Pay, PhonePe, Paytm or another UPI app</span>
            </div>
            <Smartphone size={24} color="var(--color-text-secondary)" />
          </div>
          
          {selectedMethod === 'UPI' && (
            <div className="payment-method-expanded" onClick={e => e.stopPropagation()}>
              <div className="payment-input-group">
                <label className="payment-input-label">UPI ID</label>
                <input type="text" className="payment-input" placeholder="example@upi" />
                <span className="payment-input-helper">Enter your UPI ID to continue.</span>
              </div>
              <div style={{ textAlign: 'center', margin: '8px 0', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                OR Choose UPI app
              </div>
              <div className="upi-apps-row">
                <button className="upi-app-btn">GPay</button>
                <button className="upi-app-btn">PhonePe</button>
                <button className="upi-app-btn">Paytm</button>
              </div>
            </div>
          )}
        </div>

        {/* Card Option */}
        <div 
          className={`payment-method-card ${selectedMethod === 'Card' ? 'selected' : ''}`}
          onClick={() => setSelectedMethod('Card')}
        >
          <div className="payment-method-header">
            <div className="radio-circle">
              <div className="radio-circle-inner"></div>
            </div>
            <div className="payment-method-info">
              <span className="payment-method-name">Card</span>
              <span className="payment-method-desc">Credit or debit card</span>
            </div>
            <CreditCard size={24} color="var(--color-text-secondary)" />
          </div>

          {selectedMethod === 'Card' && (
            <div className="payment-method-expanded" onClick={e => e.stopPropagation()}>
              <div className="payment-input-group">
                <input type="text" className="payment-input" placeholder="Card Number" />
              </div>
              <div className="card-grid">
                <input type="text" className="payment-input" placeholder="MM / YY" />
                <input type="text" className="payment-input" placeholder="CVV" />
              </div>
              <div className="payment-input-group">
                <input type="text" className="payment-input" placeholder="Cardholder Name" />
              </div>
            </div>
          )}
        </div>

        {/* Cash on Delivery Option */}
        <div 
          className={`payment-method-card ${selectedMethod === 'COD' ? 'selected' : ''}`}
          onClick={() => setSelectedMethod('COD')}
        >
          <div className="payment-method-header">
            <div className="radio-circle">
              <div className="radio-circle-inner"></div>
            </div>
            <div className="payment-method-info">
              <span className="payment-method-name">Cash on Delivery</span>
              <span className="payment-method-desc">Pay when your order arrives</span>
            </div>
            <Banknote size={24} color="var(--color-text-secondary)" />
          </div>

          {selectedMethod === 'COD' && (
            <div className="payment-method-expanded" style={{ borderTop: 'none', paddingTop: 0, marginTop: 0 }}>
              <div className="cod-message">
                Pay ₹650 when your order arrives.
              </div>
            </div>
          )}
        </div>

        <div className="security-message">
          <ShieldCheck size={16} /> 🔒 Your payment information is protected.
        </div>

        <button className="primary-button" onClick={handlePayment}>
          {selectedMethod === 'COD' ? 'Place Order' : 'Pay ₹650'}
        </button>

      </div>

      {isProcessing && (
        <div className="processing-overlay">
          <div className="spinner"></div>
          <div className="processing-text">Processing your {selectedMethod === 'COD' ? 'order' : 'payment'}...</div>
        </div>
      )}
    </div>
  );
};

export default CustomerPayment;

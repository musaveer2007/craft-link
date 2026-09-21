import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './Login.css';

const Login = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState('phone'); // 'phone' or 'otp'
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleBack = () => {
    if (step === 'otp') {
      setStep('phone');
    } else {
      navigate('/role-selection');
    }
  };

  const handlePhoneSubmit = () => {
    if (phone.length >= 10) {
      setStep('otp');
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return; // Only allow 1 char per input
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-focus next input (simple implementation for prototype)
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleVerify = () => {
    const isComplete = otp.every(digit => digit !== '');
    if (isComplete) {
      if (role === 'artisan') {
        navigate('/artisan/home');
      } else {
        navigate('/customer/home');
      }
    }
  };

  const handleCreateAccount = () => {
    navigate(`/${role}/signup`);
  };

  return (
    <div className="auth-page">
      <header className="auth-header">
        <button onClick={handleBack} className="back-button">
          <ArrowLeft size={20} />
          Back
        </button>
        <h1 className="auth-title">
          {step === 'phone' ? 'Welcome back' : 'Verify your number'}
        </h1>
        <p className="auth-subtitle">
          {step === 'phone' 
            ? 'Sign in to continue to CraftLink.' 
            : `We sent a 6-digit code to +91 ${phone || 'XXXXX XXXXX'}`}
        </p>
        
        {step === 'phone' && (
          <div className="role-badge">
            {role === 'artisan' ? 'Artisan account' : 'Customer account'}
          </div>
        )}
      </header>

      {step === 'phone' ? (
        <>
          <div className="auth-form">
            <div className="form-group">
              <label className="form-label">Phone number</label>
              <div className="phone-input-container">
                <span className="country-code">+91</span>
                <input 
                  type="tel" 
                  className="phone-input" 
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                />
              </div>
            </div>
            
            <button 
              className="primary-button" 
              onClick={handlePhoneSubmit}
              disabled={phone.length < 10}
            >
              Continue
            </button>
            
            <button className="secondary-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
          </div>
          
          <div className="divider">OR</div>
          
          <div className="auth-footer">
            New to CraftLink? <button className="text-link" onClick={handleCreateAccount}>Create an account</button>
          </div>
        </>
      ) : (
        <div className="auth-form">
          <div className="otp-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                className="otp-input"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value.replace(/\D/g, ''))}
                onKeyDown={(e) => {
                  if (e.key === 'Backspace' && !digit && index > 0) {
                    const prevInput = document.getElementById(`otp-${index - 1}`);
                    if (prevInput) prevInput.focus();
                  }
                }}
              />
            ))}
          </div>
          
          <button 
            className="primary-button" 
            onClick={handleVerify}
            disabled={otp.some(digit => digit === '')}
          >
            Verify & Continue
          </button>
          
          <button className="secondary-button" style={{ border: 'none', backgroundColor: 'transparent' }}>
            Resend code
          </button>
          
          <div className="timer-text">Resend in 30s</div>
        </div>
      )}
    </div>
  );
};

export default Login;

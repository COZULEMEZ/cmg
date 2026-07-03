import React from 'react';
import './LiquidInput.css';

const LiquidInput = ({ label, type = "text", value, onChange, placeholder, required, icon: Icon, error }) => {
  return (
    <div className={`liquid-input-wrapper ${error ? 'has-error' : ''}`}>
      {label && <label className="liquid-label">{label} {required && '*'}</label>}
      <div className="liquid-input-container">
        {Icon && <div className="liquid-input-icon"><Icon size={18} /></div>}
        <input
          className={`liquid-input ${Icon ? 'with-icon' : ''}`}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      </div>
      {error && <span className="liquid-error-msg">{error}</span>}
    </div>
  );
};

export default LiquidInput;

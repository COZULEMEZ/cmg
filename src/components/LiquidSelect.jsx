import React, { useState, useRef, useEffect } from 'react';
import './LiquidInput.css';

const LiquidSelect = ({ label, value, onChange, options, required, error, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className={`liquid-input-wrapper ${error ? 'has-error' : ''}`} ref={dropdownRef}>
      {label && <label className="liquid-label">{label} {required && '*'}</label>}
      <div 
        className={`liquid-input liquid-select-trigger ${Icon ? 'with-icon' : ''} ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex="0"
      >
        {Icon && <div className="liquid-input-icon"><Icon size={18} /></div>}
        <span className={!selectedOption ? 'placeholder' : ''}>
          {selectedOption ? selectedOption.label : 'Seçiniz...'}
        </span>
        
        <div className="liquid-select-arrow" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="liquid-select-dropdown">
          {options.map((opt, idx) => (
            <div 
              key={idx} 
              className={`liquid-select-option ${value === opt.value ? 'selected' : ''}`}
              onClick={() => {
                if (onChange) {
                  // Simulate event structure for compatibility
                  onChange({ target: { value: opt.value } });
                }
                setIsOpen(false);
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
      {error && <span className="liquid-error-msg">{error}</span>}
    </div>
  );
};

export default LiquidSelect;

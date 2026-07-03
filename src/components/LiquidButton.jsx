import React from 'react';
import './LiquidButton.css';

const LiquidButton = ({ children, onClick, className = '', href, type = 'button' }) => {
  const content = (
    <div className={`liquid-btn-wrap ${className}`}>
      {href ? (
        <a href={href} className="liquid-btn">
          <span>{children}</span>
        </a>
      ) : (
        <button type={type} onClick={onClick} className="liquid-btn">
          <span>{children}</span>
        </button>
      )}
      <div className="liquid-btn-shadow"></div>
    </div>
  );

  return content;
};

export default LiquidButton;

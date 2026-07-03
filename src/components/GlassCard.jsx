import React from 'react';
import './GlassCard.css';

const GlassCard = ({ children, className = '', hover = true, padding = 'default' }) => {
  return (
    <div className={`glass-card ${hover ? 'glass-card-hover' : ''} glass-card-pad-${padding} ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;

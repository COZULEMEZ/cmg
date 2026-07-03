import React, { useEffect } from 'react';
import './GlassModal.css';

const GlassModal = ({ isOpen, onClose, title, children, maxWidth = '500px' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="glass-modal-overlay" onClick={onClose}>
      <div className="glass-modal-content" style={{ maxWidth }} onClick={(e) => e.stopPropagation()}>
        <div className="glass-modal-header">
          <h3>{title}</h3>
          <button className="glass-modal-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="glass-modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default GlassModal;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './LiquidNavbar.css';

const LiquidNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`liquid-navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="liquid-navbar">
        
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          CMG
        </Link>

        {/* Desktop Links */}
        <div className="navbar-links">
          <a href="#video">Ana Sayfa</a>
          <a href="#features">Sistem</a>
          <a href="#network">Ağımız</a>
        </div>

        {/* Actions */}
        <div className="navbar-actions">
          <a href="#features" className="navbar-register">
            Detaylar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="glass-pill mobile-menu">
          <a href="#video" onClick={() => setMobileOpen(false)}>Ana Sayfa</a>
          <a href="#features" onClick={() => setMobileOpen(false)}>Sistem Nasıl Çalışır?</a>
          <a href="#network" onClick={() => setMobileOpen(false)}>Küresel Ağımız</a>
          <hr className="mobile-divider" />
          <a href="#features" className="navbar-register" onClick={() => setMobileOpen(false)}>
            Detaylı İncele
          </a>
        </div>
      )}
    </nav>
  );
};

export default LiquidNavbar;

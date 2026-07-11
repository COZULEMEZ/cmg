import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
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
          <Link to="/">Ana Sayfa</Link>
          <Link to="/hakkimizda">Hakkımızda</Link>
          <Link to="/kadromuz">Kadromuz</Link>
          <Link to="/hizmetler">Hizmetler</Link>
          <Link to="/basvuru">Başvuru</Link>
          <Link to="/iletisim">İletişim</Link>
        </div>

        {/* Actions */}
        <div className="navbar-actions">

          <Link to="/basvuru" className="navbar-register">
            Başvuru Yap
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="glass-pill mobile-menu">
          <Link to="/" onClick={() => setMobileOpen(false)}>Ana Sayfa</Link>
          <Link to="/hakkimizda" onClick={() => setMobileOpen(false)}>Hakkımızda</Link>
          <Link to="/kadromuz" onClick={() => setMobileOpen(false)}>Kadromuz</Link>
          <Link to="/hizmetler" onClick={() => setMobileOpen(false)}>Hizmetler</Link>
          <Link to="/basvuru" onClick={() => setMobileOpen(false)}>Başvuru</Link>
          <Link to="/iletisim" onClick={() => setMobileOpen(false)}>İletişim</Link>
          <hr className="mobile-divider" />
          <Link to="/basvuru" className="navbar-register" onClick={() => setMobileOpen(false)}>
            Başvuru Yap
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

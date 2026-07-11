import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const { t } = useLanguage();
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
          <Link to="/">{t('nav.home')}</Link>
          <Link to="/hakkimizda">{t('nav.about')}</Link>
          <Link to="/kadromuz">{t('nav.team')}</Link>
          <Link to="/hizmetler">{t('nav.services')}</Link>
          <Link to="/faq">{t('nav.faq')}</Link>
          <Link to="/iletisim">{t('nav.contact')}</Link>
        </div>

        {/* Actions */}
        <div className="navbar-actions">
          <Link to="/basvuru" className="navbar-register">
            {t('nav.apply')}
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
          <Link to="/" onClick={() => setMobileOpen(false)}>{t('nav.home')}</Link>
          <Link to="/hakkimizda" onClick={() => setMobileOpen(false)}>{t('nav.about')}</Link>
          <Link to="/kadromuz" onClick={() => setMobileOpen(false)}>{t('nav.team')}</Link>
          <Link to="/hizmetler" onClick={() => setMobileOpen(false)}>{t('nav.services')}</Link>
          <Link to="/faq" onClick={() => setMobileOpen(false)}>{t('nav.faq')}</Link>
          <Link to="/iletisim" onClick={() => setMobileOpen(false)}>{t('nav.contact')}</Link>
          <hr className="mobile-divider" />
          <Link to="/basvuru" className="navbar-register" onClick={() => setMobileOpen(false)}>
            {t('nav.apply')}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

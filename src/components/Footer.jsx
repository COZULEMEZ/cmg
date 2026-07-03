import React from 'react';
import { Music2, Mail, MapPin, ArrowRight } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';
import './Footer.css';

const Footer = () => {
  const { settings } = useSettings();
  const year = new Date().getFullYear();

  return (
    <footer className="glass-footer">
      {/* Top gradient separator */}
      <div className="footer-glow-line" />

      <div className="footer-container">
        <div className="footer-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>

          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <Music2 size={20} className="footer-logo-icon" />
              <h2 className="footer-logo">CMG</h2>
            </div>
            <p className="footer-desc">
              {settings.footer_tagline || 'Dünyanın önde gelen plak şirketleri ve bağımsız sanatçıları için uçtan uca dijital müzik dağıtım teknolojileri.'}
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Menü</h4>
            <a href="#video">Ana Sayfa</a>
            <a href="#features">Sistem Nasıl Çalışır?</a>
            <a href="#network">Dağıtım Ağımız</a>
          </div>

          {/* Contact Column */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">İletişim</h4>
            <div className="contact-item">
              <Mail size={15} />
              <a href={`mailto:${settings.contact_email || 'cozulemezmusicgroup@gmail.com'}`}>
                {settings.contact_email || 'cozulemezmusicgroup@gmail.com'}
              </a>
            </div>

            <div className="contact-item">
              <MapPin size={15} />
              <span>{settings.contact_address || 'Antalya, Turkey / İzmir, Turkey'}</span>
            </div>
            <a href="#features" className="footer-cta">
              <span>Başvuru Yap</span>
              <ArrowRight size={14} />
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {year} {settings.footer_company_name || 'Cozulemez Music Group A.Ş.'} — Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

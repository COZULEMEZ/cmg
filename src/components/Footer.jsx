import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, Link2, Globe, Music2, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
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
        <div className="footer-grid">

          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <Music2 size={20} className="footer-logo-icon" />
              <h2 className="footer-logo">CMG</h2>
            </div>
            <p className="footer-desc">
              {settings.footer_tagline || 'Dünyanın önde gelen plak şirketleri ve bağımsız sanatçıları için uçtan uca dijital müzik dağıtım, telif koruma ve etiket yönetim teknolojileri.'}
            </p>
          </div>

          {/* Platform Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Platform</h4>
            <Link to="/">Ana Sayfa</Link>
            <Link to="/hakkimizda">Hakkımızda</Link>
            <Link to="/hizmetler">Hizmetlerimiz</Link>
            <Link to="/basvuru">Sanatçı Başvurusu</Link>
            <Link to="/iletisim">İletişim</Link>
          </div>

          {/* Services Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Hizmetler</h4>
            <Link to="/hizmetler">Müzik Dağıtımı</Link>
            <Link to="/hizmetler">Telif Yönetimi</Link>
            <Link to="/hizmetler">Gelir Tahsilatı</Link>
            <Link to="/hizmetler">Label Hizmetleri</Link>
            <Link to="/hizmetler">Analitik</Link>
          </div>

          {/* Legal Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Yasal</h4>
            <Link to="/gizlilik">Gizlilik Politikası</Link>
            <Link to="/sartlar">Kullanım Şartları</Link>
            <Link to="/telif">Telif Bildirimi</Link>
            <Link to="/cerezler">Çerez Politikası</Link>
            <Link to="/kvkk">KVKK Aydınlatma</Link>
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
            <Link to="/basvuru" className="footer-cta">
              <span>Başvuru Yap</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {year} {settings.footer_company_name || 'Cozulemez Music Group A.Ş.'} — Tüm hakları saklıdır.
          </p>
          <div className="footer-bottom-links">
            <Link to="/gizlilik">Gizlilik</Link>
            <Link to="/sartlar">Şartlar</Link>
            <Link to="/cerezler">Çerezler</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Play, BarChart3, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

let hasSeenSplash = false;

const Hero = ({ settings }) => {
  const [showSplash, setShowSplash] = useState(!hasSeenSplash);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEnterSite = () => {
    hasSeenSplash = true;
    setShowSplash(false);
  };

  if (showSplash) {
    return (
      <div className="splash-screen" onClick={handleEnterSite}>
        <div className="splash-glow"></div>
        <div className="splash-content">
          <p className="splash-pre">EST. 2025</p>
          <h1 className="splash-logo">CMG</h1>
          <p className="splash-sub">Cozulemez Music Group</p>
          <div className="splash-line"></div>
          <p className="splash-action">Giriş İçin Tıklayın</p>
        </div>
      </div>
    );
  }

  return (
    <section className="section" style={{ minHeight: '90svh' }}>
      <div className="section-inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div className="hero-badge" variants={fadeUp}>
            <Star size={12} />
            <span>{settings?.home_badge || "Türkiye'nin #1 Müzik Dağıtım Platformu"}</span>
          </motion.div>
          <motion.h1 className="hero-title" variants={fadeUp}>
            {settings?.home_title || 'Müziğinizi Dünyaya Açın'}
          </motion.h1>
          <motion.p className="hero-subtitle" variants={fadeUp}>
            {settings?.home_subtitle || 'Spotify, Apple Music ve 150+ platformda profesyonel müzik dağıtımı.'}
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp} style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <Link to="/basvuru" className="button" style={{ background: '#fff', color: '#000', textDecoration: 'none', fontWeight: 600 }}>
              Hemen Başlayın &rarr;
            </Link>
            <a href="#features" className="button" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', textDecoration: 'none' }}>
              <Play size={16} style={{ marginRight: '8px' }} />
              Sistem Nasıl Çalışır?
            </a>
          </motion.div>
        </motion.div>

        {mounted ? (
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="hero-dashboard" padding="lg" style={{ willChange: 'transform, opacity' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <div>
                  <p style={{ color: '#888', fontSize: '0.8rem', textTransform: 'uppercase' }}>Toplam Akış (Aylık)</p>
                  <h2 style={{ fontSize: '3rem', margin: '0.5rem 0' }}>2.4M</h2>
                  <span style={{ color: '#4ade80', fontSize: '0.9rem' }}>↑ +18% büyüme</span>
                </div>
                <BarChart3 size={24} />
              </div>
              <div style={{ display: 'flex', gap: '8px', height: '100px', alignItems: 'flex-end', marginBottom: '2rem' }}>
                {[40, 65, 45, 80, 60, 90, 70, 85, 95, 75, 88, 92].map((h, i) => (
                  <div key={i} style={{ flex: 1, background: 'rgba(255,255,255,0.1)', borderRadius: '4px', height: `${h}%`, transition: 'height 1s ease-out' }}></div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ) : (
          <div className="hero-visual-skeleton" style={{ height: '300px', background: 'rgba(255,255,255,0.05)', borderRadius: '32px' }}></div>
        )}
      </div>
    </section>
  );
};

export default React.memo(Hero);

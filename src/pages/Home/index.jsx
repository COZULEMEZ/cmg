import React, { useState, useEffect, useRef } from 'react';
import { Globe, TrendingUp, Shield, Star, ArrowRight, Play, Zap, BarChart3, Users, Network, Radio, Music, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSettings } from '../../context/SettingsContext';
import LiquidButton from '../../components/LiquidButton';
import GlassCard from '../../components/GlassCard';
import PartnersMarquee from '../../components/PartnersMarquee';
import './index.css';

const stats = [
  { value: '150+', label: 'Küresel Dağıtım Ağı' },
  { value: '50+', label: 'Aktif Sanatçı' },
  { value: '1.500+', label: 'Lisanslı Eser' },
  { value: '%99.9', label: 'Sistem Çalışma Süresi' },
];

const features = [
  {
    icon: <Globe size={28} />,
    title: 'Global Dağıtım Ağı',
    desc: "Eserlerinizi saniyeler içinde 150'den fazla küresel platforma ulaştırın ve milyonlarca dinleyiciye erişin.",
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Gelişmiş Analitik',
    desc: 'Gerçek zamanlı akış verileri, demografik analizler ve şeffaf gelir raporlarıyla kariyerinizi ölçeklendirin.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Hak & Telif Yönetimi',
    desc: 'Gelişmiş içerik koruma algoritmalarımızla eserlerinizin telif haklarını güvence altına alın.',
  },
  {
    icon: <Users size={28} />,
    title: 'Plak Şirketi Çözümleri',
    desc: 'Birden fazla sanatçıyı, kataloğu ve gelir paylaşımını tek bir merkezi panel üzerinden profesyonelce yönetin.',
  },
  {
    icon: <Zap size={28} />,
    title: 'Hızlı Finansal Akış',
    desc: 'Kesintisiz ödeme altyapımızla telif gelirlerinizi dünyanın neresinde olursanız olun hızlıca tahsil edin.',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Stratejik Pazarlama',
    desc: 'Veri odaklı PR kampanyaları ve editoryal listeleme destekleriyle görünürlüğünüzü maksimize edin.',
  },
];

// Distribution Network section data
const networkStats = [
  { icon: <Globe size={22} />, value: '150+', label: 'Platform' },
  { icon: <Radio size={22} />, value: '180+', label: 'Ülke' },
  { icon: <Music size={22} />, value: '1.500+', label: 'Eser' },
  { icon: <Network size={22} />, value: '99.9%', label: 'Uptime' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// Module-level flag: survives React Router navigations, resets on F5/refresh
let hasSeenSplash = false;

const Home = () => {
  const { settings } = useSettings();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showSplash, setShowSplash] = useState(!hasSeenSplash);
  
  // Audio handling — preload into memory for instant playback
  const audioRef = useRef(null);

  // Force preload on mount
  useEffect(() => {
    const audio = new Audio('/toxic-slowed.mp3');
    audio.preload = 'auto';
    audio.loop = true;
    audio.volume = 0.65;
    audioRef.current = audio;
    audio.load();

    // If returning from another page (splash already seen), auto-play immediately
    if (hasSeenSplash) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
      } else {
        // Only resume if splash screen has been passed
        if (hasSeenSplash) {
          audio.play().catch(() => {});
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      audio.pause();
      audio.src = '';
    };
  }, []);

  // Scroll-based volume fade
  useEffect(() => {
    if (showSplash) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;
      
      let newVolume = 0.65;
      if (scrollY <= 0) {
        newVolume = 0.65;
      } else if (scrollY >= maxScroll) {
        newVolume = 0;
      } else {
        const ratio = 1 - (scrollY / maxScroll);
        newVolume = Number((0.65 * ratio).toFixed(2));
      }

      if (audioRef.current) {
        audioRef.current.volume = newVolume;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showSplash]);

  // Splash screen click handler
  const handleEnterSite = () => {
    hasSeenSplash = true;
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
    setShowSplash(false);
  };

  useEffect(() => {
    // Hide loader after 3.5s automatically
    const timer = setTimeout(() => setIsVideoLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Splash / Intro Screen
  if (showSplash) {
    return (
      <div className="splash-screen" onClick={handleEnterSite}>
        <div className="splash-glow"></div>
        <div className="splash-content">
          <p className="splash-pre">EST. 2025</p>
          <h1 className="splash-logo">CMG</h1>
          <p className="splash-sub">Cozulemez Music Group</p>
          <div className="splash-line"></div>
          <button className="splash-enter-btn" onClick={handleEnterSite}>
            <span>Farklı Bir Deneyim İçin Tıkla!</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="home-page">

      {/* Fullscreen Video Intro Section */}
      <section id="video" className="fullscreen-video-section">
        <div className={`video-preloader ${isVideoLoaded ? 'fade-out' : ''}`}>
          <div className="cmg-loader"></div>
        </div>
        <div className="fullscreen-video-wrapper">
          <iframe 
            src="https://www.youtube-nocookie.com/embed/6YMY24KoHT4?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3&loading=eager" 
            title="CMG Tanıtım" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="fullscreen-iframe"
          ></iframe>
        </div>
        <div className="video-overlay"></div>
        
        {/* Dynamic CMG Text in Center */}
        <div className="dynamic-cmg-container">
          <h1 className="dynamic-cmg-text">
            CMG
          </h1>
        </div>

        {/* Scroll down indicator */}
        <div className="scroll-indicator">
          <span className="scroll-text">Kaydır / Keşfet</span>
          <ArrowDown className="scroll-arrow" size={24} />
        </div>
      </section>

      {/* Hero */}
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="hero-badge" variants={fadeUp}>
            <Star size={12} />
            <span>{settings.home_badge || "Türkiye'nin #1 Müzik Dağıtım Platformu"}</span>
          </motion.div>
          <motion.h1 className="hero-title" variants={fadeUp}>
            {settings.home_title || 'Müziğinizi Dünyaya Açın'}
          </motion.h1>
          <motion.p className="hero-subtitle" variants={fadeUp}>
            {settings.home_subtitle || 'Spotify, Apple Music ve 150+ platformda profesyonel müzik dağıtımı. Etiket yönetimi, telif koruması ve gelir analizi tek çatı altında.'}
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <Link to="/basvuru" className="liquid-btn-wrap">
              <div className="liquid-btn">
                <span>Hemen Başlayın &rarr;</span>
              </div>
            </Link>
            <a href="#features" className="liquid-btn-secondary">
              <Play size={16} />
              <span>Sistem Nasıl Çalışır?</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Dashboard Card */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <GlassCard className="hero-dashboard" padding="lg">
            <div className="dashboard-header">
              <div>
                <p className="dashboard-label">Toplam Akış (Aylık)</p>
                <h2 className="dashboard-value">2.4M</h2>
                <span className="dashboard-growth">↑ +18% büyüme</span>
              </div>
              <div className="dashboard-icon-wrap">
                <BarChart3 size={24} />
              </div>
            </div>
            <div className="dashboard-bars">
              {[40, 65, 45, 80, 60, 90, 70, 85, 95, 75, 88, 92].map((h, i) => (
                <div key={i} className="bar-col">
                  <div className="bar" style={{ height: `${h}%` }}></div>
                </div>
              ))}
            </div>
            <div className="dashboard-platforms">
              {['Spotify', 'Apple Music', 'YouTube', 'Tidal'].map(p => (
                <div key={p} className="platform-tag">{p}</div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <motion.div 
          className="stats-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {stats.map((s, i) => (
            <motion.div key={i} variants={fadeUp}>
              <GlassCard className="stat-card" padding="default">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="features-section">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="section-title">{settings.home_features_title || 'Merkezi Yönetim Altyapısı'}</h2>
          <p className="section-sub">{settings.home_features_sub || 'Profesyonel müzisyenler ve plak şirketleri için tasarlanmış uçtan uca dijital dağıtım ve hak yönetimi ekosistemi.'}</p>
        </motion.div>
        <motion.div 
          className="features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {features.map((f, i) => (
            <motion.div key={i} variants={fadeUp}>
              <GlassCard className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Distribution Network — replaces testimonials */}
      <section id="network" className="network-section">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="section-title">Dağıtım Ağı</h2>
          <p className="section-sub">Milyonlarca dinleyiciye ulaşan güvenilir distribüsyon altyapısı.</p>
        </motion.div>
        <motion.div 
          className="network-stats-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {networkStats.map((s, i) => (
            <motion.div key={i} variants={fadeUp}>
              <GlassCard className="network-stat-card" padding="default">
                <div className="network-stat-icon">{s.icon}</div>
                <div className="network-stat-value">{s.value}</div>
                <div className="network-stat-label">{s.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="network-infra-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}><GlassCard className="infra-card" padding="default">
            <h3>Endüstri Altyapısı</h3>
            <p>Sektörün önde gelen plak şirketleri ve bağımsız sanatçıların güvendiği kurumsal düzeyde distribüsyon teknolojisi. DDEX standardı ve ISRC/ISWC tam uyumluluk.</p>
          </GlassCard></motion.div>
          <motion.div variants={fadeUp}><GlassCard className="infra-card" padding="default">
            <h3>Partner Platformlar</h3>
            <p>Spotify, Apple Music, YouTube Music, Amazon, Tidal ve 140+ platformla doğrudan API entegrasyonu. Müziğiniz anında ekosisteme giriyor.</p>
          </GlassCard></motion.div>
          <motion.div variants={fadeUp}><GlassCard className="infra-card" padding="default">
            <h3>Gelir Şeffaflığı</h3>
            <p>Tüm telif hesaplamalarınızı gerçek zamanlı olarak izleyin. Hangi platformdan, hangi ülkeden ne kadar kazandığınızı dakika dakika görün.</p>
          </GlassCard></motion.div>
        </motion.div>
      </section>

      {/* Partners Marquee */}
      <section className="partners-section">
        <div className="section-header">
          <h2 className="section-title">{settings.home_distribution_title || 'Küresel Dağıtım Ağı'}</h2>
          <p className="section-sub">{settings.home_distribution_sub || "Eserlerinizi dünyanın en büyük dijital platformlarına doğrudan ve kesintisiz ulaştırıyoruz."}</p>
        </div>
        <PartnersMarquee />
      </section>

      {/* CTA */}
      <motion.section 
        className="cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <GlassCard className="cta-card" padding="lg">
          <h2 className="cta-title">{settings.home_cta_title || 'Kariyerinizi Ölçeklendirin'}</h2>
          <p className="cta-sub">{settings.home_cta_sub || 'Profesyonel dağıtım ağına katılın. Başvurunuzu yapın ve eserlerinizi global standartlarda yönetmeye başlayın.'}</p>
          <div className="cta-actions">
            <Link to="/basvuru" className="liquid-btn-wrap">
              <div className="liquid-btn">
                <span>Sanatçı Başvurusu Yapın</span>
              </div>
            </Link>
            <Link to="/iletisim" className="cta-link">
              Bizimle İletişime Geçin <ArrowRight size={14} />
            </Link>
          </div>
        </GlassCard>
      </motion.section>

    </div>
  );
};

export default Home;

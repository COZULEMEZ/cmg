import React from 'react';
import { useSettings } from '../context/SettingsContext';
import GlassCard from '../components/GlassCard';
import {
  ShieldCheck, Target, Globe2, Activity, Cpu, Network,
  Lightbulb, Users, Award, BookOpen, Briefcase, Scale
} from 'lucide-react';
import { motion } from 'framer-motion';
import './Corporate.css';

const milestones = [
  { year: '2024', label: 'Kuruluş', desc: 'CMG, dijital müzik dağıtım vizyonuyla kuruldu.' },
  { year: '2025', label: 'İlk Sanatçılar', desc: 'Platformumuz çok kısa sürede seçkin 50 bağımsız sanatçıya ulaştı.' },
  { year: '2025', label: 'Global Genişleme', desc: '150+ platform entegrasyonu tamamlandı.' },
  { year: '2026', label: 'Teknoloji Atılımı', desc: 'Gerçek zamanlı analitik ve akıllı telif yönetim sistemi devreye alındı.' },
];

const values = [
  { icon: <ShieldCheck size={22} />, title: 'Şeffaflık', desc: 'Tüm telif hesaplamalarımız ve gelir dağıtımlarımız sanatçı tarafından anlık olarak takip edilebilir.' },
  { icon: <Award size={22} />, title: 'Kalite', desc: 'Distribüsyon kalitesini ve ses standartlarını her zaman en yüksek seviyede tutuyoruz.' },
  { icon: <Users size={22} />, title: 'Topluluk', desc: 'CMG, tek bir sanatçı değil; birbirini destekleyen bir yaratıcı topluluk inşa ediyor.' },
  { icon: <Lightbulb size={22} />, title: 'İnovasyon', desc: 'Müzik endüstrisinin geleceğini şekillendiren teknolojiyi bugünden kullanıcılarımıza sunuyoruz.' },
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

const About = () => {
  const { settings } = useSettings();

  return (
    <div className="corporate-page">
      <section className="corporate-hero">
        <motion.h1 className="corporate-title" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y:0}} transition={{duration: 0.5}}>Hakkımızda</motion.h1>
        <motion.p className="corporate-subtitle" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y:0}} transition={{duration: 0.5, delay: 0.1}}>Müzik endüstrisinin geleceğini inşa eden küresel dağıtım ve teknoloji altyapısı.</motion.p>
      </section>

      <motion.section 
        className="corporate-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >

        {/* Company Story */}
        <motion.div variants={fadeUp}>
          <GlassCard className="corporate-card" padding="lg">
            <div className="card-header-icon"><ShieldCheck size={32} /></div>
            <h2>Kurumsal Hikayemiz</h2>
            <p>{settings.about_company_story || 'CMG, müziğin evrensel dilini dijital dünyanın sınırsız gücüyle birleştirmek amacıyla kuruldu. Özenle seçilmiş 50 bağımsız sanatçımız için şeffaf, hızlı ve butik bir dağıtım ekosistemi sunuyoruz.'}</p>
          </GlassCard>
        </motion.div>

        {/* Timeline */}
        <div className="about-timeline">
          {milestones.map((m, i) => (
            <motion.div key={i} className="timeline-item" variants={fadeUp}>
              <div className="timeline-year">{m.year}</div>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h4>{m.label}</h4>
                <p>{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="corporate-grid-2">
          <motion.div variants={fadeUp}><GlassCard className="corporate-card" padding="default">
            <div className="card-header-icon"><Target size={28} /></div>
            <h3>Misyonumuz</h3>
            <p>{settings.about_mission || 'Sanatçılarımızın haklarını en üst düzeyde koruyarak, müziklerini global ölçekte en verimli şekilde kitlelere ulaştırmak ve gelirlerini maksimize etmek.'}</p>
          </GlassCard></motion.div>

          <motion.div variants={fadeUp}><GlassCard className="corporate-card" padding="default">
            <div className="card-header-icon"><Globe2 size={28} /></div>
            <h3>Vizyonumuz</h3>
            <p>{settings.about_vision || 'Bağımsız sanatçılar için dünyanın en güvenilir, butik ve premium teknoloji altyapısı olmak.'}</p>
          </GlassCard></motion.div>
        </div>

        {/* Artist First */}
        <motion.div variants={fadeUp}>
          <GlassCard className="corporate-card" padding="lg">
            <div className="card-header-icon"><Activity size={32} /></div>
            <h2>Önce Sanatçı Felsefesi</h2>
            <p>{settings.about_artist_first || 'Her adımımızda önce sanatçıyı düşünür, şeffaf ve adil bir telif dağıtımı hedefleriz. Sınırlı sayıda sanatçıya hizmet vererek, her bir sanatçımıza özel ilgi ve stratejik pazarlama desteği sunuyoruz.'}</p>
          </GlassCard>
        </motion.div>

        {/* Technology Infrastructure */}
        <motion.div variants={fadeUp}>
          <GlassCard className="corporate-card" padding="lg">
            <div className="card-header-icon"><Cpu size={32} /></div>
            <h2>Teknoloji Altyapısı</h2>
            <p>{settings.about_tech_infra || 'Yüksek erişilebilirlik sağlayan bulut altyapımız, saniyeler içinde binlerce veri noktasını işleyerek gerçek zamanlı akış verileri ve telif hesaplamaları gerçekleştirir. Sanatçı verileri güvendedir.'}</p>
          <div className="tech-stats">
            <div className="tech-stat">
              <span className="tech-stat-value">99.9%</span>
              <span className="tech-stat-label">Uptime SLA</span>
            </div>
            <div className="tech-stat">
              <span className="tech-stat-value">&lt;24s</span>
              <span className="tech-stat-label">İşlem Süresi</span>
            </div>
            <div className="tech-stat">
              <span className="tech-stat-value">AES-256</span>
              <span className="tech-stat-label">Şifreleme</span>
            </div>
            <div className="tech-stat">
              <span className="tech-stat-value">ISO 27001</span>
              <span className="tech-stat-label">Sertifikasyon</span>
            </div>
          </div>
          </GlassCard>
        </motion.div>

        {/* Global Reach + Future Goals */}
        <div className="corporate-grid-2">
          <motion.div variants={fadeUp}><GlassCard className="corporate-card" padding="default">
            <div className="card-header-icon"><Network size={28} /></div>
            <h3>Global Erişim</h3>
            <p>{settings.about_global_reach || "150'den fazla dijital platform ve 180+ ülkeye doğrudan dağıtım altyapımızla 50 seçkin sanatçımızın müziği dünyanın her köşesine ulaşıyor."}</p>
            <div className="reach-pills">
              <span className="reach-pill">150+ Platform</span>
              <span className="reach-pill">180+ Ülke</span>
              <span className="reach-pill">50 Seçkin Sanatçı</span>
            </div>
          </GlassCard></motion.div>

          <motion.div variants={fadeUp}><GlassCard className="corporate-card" padding="default">
            <div className="card-header-icon"><BookOpen size={28} /></div>
            <h3>Gelecek Hedeflerimiz</h3>
            <p>{settings.about_future_goals || 'Kalitemizden ödün vermeden özenle seçilmiş yetenekli sanatçıları bünyemize katarak butik dağıtım vizyonumuzu korumayı ve yapay zeka destekli analizleri platformumuza tam entegre etmeyi hedefliyoruz.'}</p>
          </GlassCard></motion.div>
        </div>

        {/* Corporate Values */}
        <motion.div className="section-header" style={{ marginTop: '3rem' }} variants={fadeUp}>
          <h2 className="section-title" style={{ fontSize: '1.75rem' }}>Kurumsal Değerlerimiz</h2>
        </motion.div>
        <div className="corporate-grid-4">
          {values.map((v, i) => (
            <motion.div key={i} variants={fadeUp}><GlassCard className="corporate-card value-card" padding="default">
              <div className="card-header-icon small">{v.icon}</div>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </GlassCard></motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;

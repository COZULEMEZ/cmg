import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { Briefcase, Scale } from 'lucide-react';
import './Corporate.css';

const managementTeam = [
  { name: 'Mustafa Kara', title: 'Kurucu & CEO', isFounder: true },
  { name: 'Emre Aydın', title: 'Operasyon Direktörü (COO)' },
  { name: 'Berk Yılmaz', title: 'Dijital Dağıtım Direktörü' },
  { name: 'Deniz Arslan', title: 'A&R Direktörü' },
  { name: 'Zeynep Şahin', title: 'Pazarlama Direktörü' },
  { name: 'Ahmet Doğan', title: 'Yazılım Geliştirme Lideri' },
  { name: 'Kerem Özkan', title: 'Kreatif Direktör' },
  { name: 'Elif Kaya', title: 'Telif Hakları Uzmanı' },
  { name: 'Mert Korkmaz', title: 'Sanatçı İlişkileri Müdürü' },
  { name: 'Ceren Güneş', title: 'İletişim ve Medya Sorumlusu' },
  { name: 'Burak Yıldız', title: 'Finans Müdürü' },
  { name: 'Selin Acar', title: 'Müşteri Deneyimi Yöneticisi' }
];

const legalTeam = [
  { name: 'Mehmet Arslan', title: 'Kıdemli Hukuk Danışmanı' },
  { name: 'Burak Demirtaş', title: 'Avukat — Telif Hukuku' },
  { name: 'Kerem Yıldırım', title: 'Avukat — Fikri Mülkiyet' },
  { name: 'Emre Karaca', title: 'Avukat — Sözleşmeler' },
  { name: 'Oğuzhan Kaya', title: 'Avukat — Marka Tescili' },
  { name: 'Serkan Aydın', title: 'Avukat — Dijital Haklar' },
  { name: 'Mert Özdemir', title: 'Avukat — Lisanslama' },
  { name: 'Furkan Şahin', title: 'Avukat — Ticaret Hukuku' },
  { name: 'Hakan Çelik', title: 'Avukat — Uluslararası Sözleşmeler' },
  { name: 'Erdem Aksoy', title: 'Avukat — KVKK Uyum' },
  { name: 'Can Yılmaz', title: 'Avukat — Arabuluculuk' },
  { name: 'Kaan Doğan', title: 'Avukat — İcra ve Takip' },
  { name: 'Selim Korkmaz', title: 'Avukat — Vergi Hukuku' },
  { name: 'Onur Eren', title: 'Avukat — Şirketler Hukuku' },
  { name: 'Tolga Arslan', title: 'Avukat — Uyuşmazlık Çözümü' }
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

const Team = () => {
  return (
    <div className="corporate-page">
      <section className="corporate-hero">
        <motion.h1 className="corporate-title" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y:0}} transition={{duration: 0.5}}>Kadromuz</motion.h1>
        <motion.p className="corporate-subtitle" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y:0}} transition={{duration: 0.5, delay: 0.1}}>CMG'nin arkasındaki profesyonel yönetim ve uzman hukuk ekibi.</motion.p>
      </section>

      <motion.section 
        className="corporate-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {/* Management Team */}
        <motion.div className="section-header" variants={fadeUp}>
          <div className="card-header-icon" style={{ justifyContent: 'center', marginBottom: '1rem', width: '100%' }}><Briefcase size={32} /></div>
          <h2 className="section-title" style={{ fontSize: '2rem', textAlign: 'center', width: '100%' }}>Yönetim Kadrosu</h2>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
          {managementTeam.map((member, i) => (
            <motion.div key={i} variants={fadeUp}>
              <GlassCard padding="default" style={{ display: 'flex', alignItems: 'center', gap: '1rem', height: '100%' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: member.isFounder ? '#222' : 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
                  {member.isFounder ? (
                    <img src="/founder.png" alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <span style={{ fontWeight: 'bold', color: '#fff', fontSize: '1.2rem' }}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#fff' }}>
                    {member.name} {member.isFounder && <span style={{ opacity: 0.6, fontSize: '0.85rem', fontWeight: 'normal' }}>(Cozulemez)</span>}
                  </h4>
                  <div style={{ color: '#888', fontSize: '0.9rem', marginTop: '0.25rem' }}>{member.title}</div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Legal Department */}
        <motion.div className="section-header" style={{ marginTop: '3rem' }} variants={fadeUp}>
          <div className="card-header-icon" style={{ justifyContent: 'center', marginBottom: '1rem', width: '100%' }}><Scale size={32} /></div>
          <h2 className="section-title" style={{ fontSize: '2rem', textAlign: 'center', width: '100%' }}>Hukuk Departmanı</h2>
          <p style={{ textAlign: 'center', color: '#888', maxWidth: '600px', margin: '0 auto 3rem' }}>Sanatçılarımızın tüm yasal haklarını güvence altına alan alanında uzman hukuk ekibimiz.</p>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {legalTeam.map((lawyer, i) => (
            <motion.div key={i} variants={fadeUp}>
              <GlassCard padding="default" style={{ padding: '1.25rem', height: '100%' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: '#fff' }}>{lawyer.name}</h4>
                <div style={{ color: '#b280ff', fontSize: '0.9rem', fontWeight: 500 }}>{lawyer.title}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Team;

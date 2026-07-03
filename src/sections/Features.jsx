import React from 'react';
import { Globe, TrendingUp, Shield, Users, Zap, BarChart3 } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const features = [
  {
    icon: <Globe size={28} />,
    title: 'Global Dağıtım Ağı',
    desc: "Eserlerinizi saniyeler içinde 150'den fazla küresel platforma ulaştırın.",
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Gelişmiş Analitik',
    desc: 'Gerçek zamanlı akış verileri ve demografik analizler.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Hak & Telif Yönetimi',
    desc: 'Eserlerinizin telif haklarını güvence altına alın.',
  },
  {
    icon: <Users size={28} />,
    title: 'Plak Şirketi Çözümleri',
    desc: 'Kataloğu ve gelir paylaşımını tek bir panel üzerinden yönetin.',
  },
  {
    icon: <Zap size={28} />,
    title: 'Hızlı Finansal Akış',
    desc: 'Kesintisiz ödeme altyapımızla gelirlerinizi hızlıca tahsil edin.',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Stratejik Pazarlama',
    desc: 'Veri odaklı PR kampanyaları ile görünürlüğünüzü maksimize edin.',
  },
];

const Features = ({ settings }) => {
  return (
    <section id="features" className="section" style={{ padding: '6rem 0' }}>
      <div className="section-inner">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'var(--text-xl)', marginBottom: '1rem' }}>
            {settings?.home_features_title || 'Merkezi Yönetim Altyapısı'}
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            {settings?.home_features_sub || 'Profesyonel müzisyenler ve plak şirketleri için tasarlanmış uçtan uca dijital dağıtım.'}
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {features.map((f, i) => (
            <GlassCard key={i} style={{ padding: '2rem' }}>
              <div style={{ color: '#fff', marginBottom: '1rem', background: 'rgba(255,255,255,0.05)', display: 'inline-flex', padding: '1rem', borderRadius: '16px' }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{f.title}</h3>
              <p style={{ color: '#888', lineHeight: 1.6 }}>{f.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Features);

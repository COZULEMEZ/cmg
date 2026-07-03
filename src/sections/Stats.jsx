import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const stats = [
  { value: '150+', label: 'Küresel Dağıtım Ağı' },
  { value: '50+', label: 'Aktif Sanatçı' },
  { value: '1.500+', label: 'Lisanslı Eser' },
  { value: '%99.9', label: 'Sistem Çalışma Süresi' },
];

const Stats = () => {
  return (
    <section className="section" style={{ padding: '4rem 0' }}>
      <div className="section-inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
        {stats.map((s, i) => (
          <GlassCard key={i} padding="default" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem', color: '#fff' }}>{s.value}</div>
            <div style={{ color: '#888', fontSize: '0.9rem' }}>{s.label}</div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default React.memo(Stats);

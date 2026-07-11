import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const stats = [
  { value: '150+', label: 'Global DSPs (Spotify, Apple, TikTok)' },
  { value: '100%', label: 'Artist Royalties Retained' },
  { value: '24h', label: 'Fast Music Distribution Speed' },
  { value: 'PRO', label: 'Official Artist Channel (OAC) Support' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Stats = () => {
  return (
    <section className="section" style={{ padding: '4rem 0' }}>
      <motion.div 
        className="section-inner" 
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {stats.map((s, i) => (
          <motion.div key={i} variants={itemVariants}>
            <GlassCard padding="default" style={{ textAlign: 'center', height: '100%' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem', color: '#fff' }}>{s.value}</div>
              <div style={{ color: '#888', fontSize: '0.9rem' }}>{s.label}</div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default React.memo(Stats);

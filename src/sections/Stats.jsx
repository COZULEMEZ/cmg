import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { useLanguage } from '../i18n/LanguageContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Stats = () => {
  const { t } = useLanguage();
  
  const stats = [
    { value: t('stats.stat1_val'), label: t('stats.stat1_lbl') },
    { value: t('stats.stat2_val'), label: t('stats.stat2_lbl') },
    { value: t('stats.stat3_val'), label: t('stats.stat3_lbl') },
    { value: t('stats.stat4_val'), label: t('stats.stat4_lbl') },
  ];
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

import React from 'react';
import { Globe, TrendingUp, Shield, Users, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { useLanguage } from '../i18n/LanguageContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Globe size={28} aria-hidden="true" />,
      title: t('features.f1_title'),
      desc: t('features.f1_desc'),
    },
    {
      icon: <TrendingUp size={28} aria-hidden="true" />,
      title: t('features.f2_title'),
      desc: t('features.f2_desc'),
    },
    {
      icon: <Shield size={28} aria-hidden="true" />,
      title: t('features.f3_title'),
      desc: t('features.f3_desc'),
    },
    {
      icon: <Users size={28} aria-hidden="true" />,
      title: t('features.f4_title'),
      desc: t('features.f4_desc'),
    },
    {
      icon: <Zap size={28} aria-hidden="true" />,
      title: t('features.f5_title'),
      desc: t('features.f5_desc'),
    },
    {
      icon: <BarChart3 size={28} aria-hidden="true" />,
      title: t('features.f6_title'),
      desc: t('features.f6_desc'),
    },
  ];

  return (
    <section id="features" className="section" style={{ padding: '6rem 0' }}>
      <div className="section-inner">
        <motion.div 
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 style={{ fontSize: 'var(--text-xl)', marginBottom: '1rem' }}>
            {t('features.title')}
          </h2>
          <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto' }}>
            {t('features.subtitle')}
          </p>
        </motion.div>
        
        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {features.map((f, i) => (
            <motion.div key={i} variants={cardVariants}>
              <GlassCard style={{ padding: '2rem' }}>
                <div style={{ color: '#fff', marginBottom: '1rem', background: 'rgba(255,255,255,0.05)', display: 'inline-flex', padding: '1rem', borderRadius: '16px' }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{f.title}</h3>
                <p style={{ color: '#888', lineHeight: 1.6 }}>{f.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Features);

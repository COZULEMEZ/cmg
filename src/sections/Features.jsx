import React from 'react';
import { Globe, TrendingUp, Shield, Users, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const features = [
  {
    icon: <Globe size={28} aria-hidden="true" />,
    title: 'Global Digital Music Distribution',
    desc: "Distribute your music to Spotify, Apple Music, Tidal, Amazon Music, and 150+ Digital Service Providers (DSPs) worldwide. Fast, reliable, and algorithmic playlist ready.",
  },
  {
    icon: <TrendingUp size={28} aria-hidden="true" />,
    title: 'Streaming Analytics & Demographics',
    desc: 'Access real-time stream counts, listener demographics, and playlist tracking for Spotify for Artists and Apple Music directly from the CMG Dashboard.',
  },
  {
    icon: <Shield size={28} aria-hidden="true" />,
    title: 'Music Publishing & Copyright Protection',
    desc: 'Administer your mechanical and performance royalties. We register your ISRC/UPC metadata with global PROs and manage YouTube Content ID monetization.',
  },
  {
    icon: <Users size={28} aria-hidden="true" />,
    title: 'Independent Record Label Solutions',
    desc: 'White-label B2B catalog management for indie record labels. Automate complex royalty splits, artist advances, and expense recoupments effortlessly.',
  },
  {
    icon: <Zap size={28} aria-hidden="true" />,
    title: 'Instant Royalty Payouts',
    desc: 'Keep up to 100% of your digital distribution royalties. No hidden fees. Withdraw your music monetization earnings via secure global payment gateways.',
  },
  {
    icon: <BarChart3 size={28} aria-hidden="true" />,
    title: 'Music Marketing & Artist Branding',
    desc: 'Trigger algorithmic playlists like Discover Weekly. We execute digital PR, TikTok marketing, sync licensing pitching, and Official Artist Channel (OAC) verification.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Features = ({ settings }) => {
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
            {settings?.features_title || 'Enterprise-Grade Artist Services & Label Infrastructure'}
          </h2>
          <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto' }}>
            {settings?.features_subtitle || 'Cozulemez Music Group (CMG) provides independent artists and record companies with the most robust technical infrastructure for music publishing, global distribution, and royalty management.'}
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

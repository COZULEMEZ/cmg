import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { useLanguage } from '../i18n/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const LandingPageTemplate = ({ pageData }) => {
  const { lang, t } = useLanguage();
  
  // Data resolution based on language
  const data = lang === 'tr' ? pageData.tr : pageData.en;

  useEffect(() => {
    // Dynamic Schema Injection
    if (data.schema) {
      let scriptId = 'dynamic-schema';
      let existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(data.schema);
      document.head.appendChild(script);
    }
    
    // Update Title & Meta
    document.title = data.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = data.metaDescription;

    // Cleanup on unmount
    return () => {
      const script = document.getElementById('dynamic-schema');
      if (script) script.remove();
      document.title = 'CMG | Cozulemez Music Group'; // Reset
    };
  }, [data]);

  return (
    <div className="page" style={{ width: '100%', paddingTop: '80px' }}>
      
      {/* Dynamic Hero */}
      <section className="section" style={{ minHeight: '60svh', display: 'flex', alignItems: 'center' }}>
        <div className="section-inner">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
          >
            <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1, wordBreak: 'break-word' }}>
              {data.h1}
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', color: '#888', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              {data.subtitle}
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/basvuru" className="button" style={{ background: '#fff', color: '#000', textDecoration: 'none', fontWeight: 600, padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                {t('hero.cta')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Semantic Content Blocks */}
      <section className="section" style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div className="section-inner">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {data.contentBlocks.map((block, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                style={{ marginBottom: '4rem' }}
              >
                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#fff' }}>{block.h2}</h2>
                <div style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: 1.8 }}>
                  {/* Dangerously set inner HTML allows us to pass rich semantic HTML like strong, a, blockquote */}
                  <div dangerouslySetInnerHTML={{ __html: block.html }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features/Benefits Grid */}
      {data.features && (
        <section className="section" style={{ padding: '6rem 0' }}>
          <div className="section-inner">
            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>{data.featuresTitle}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {data.features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <GlassCard padding="lg" style={{ height: '100%' }}>
                    <div style={{ color: '#4ade80', marginBottom: '1rem' }}><CheckCircle2 size={32} /></div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#fff' }}>{feature.title}</h3>
                    <p style={{ color: '#888', lineHeight: 1.6 }}>{feature.desc}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Internal Linking / Next Steps */}
      <section className="section" style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Explore More Services</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/spotify-distribution" className="glass-pill" style={{ textDecoration: 'none', color: '#fff' }}>Spotify Distribution <ChevronRight size={14} /></Link>
            <Link to="/apple-music-distribution" className="glass-pill" style={{ textDecoration: 'none', color: '#fff' }}>Apple Music Distribution <ChevronRight size={14} /></Link>
            <Link to="/music-publishing" className="glass-pill" style={{ textDecoration: 'none', color: '#fff' }}>Music Publishing <ChevronRight size={14} /></Link>
            <Link to="/music-marketing" className="glass-pill" style={{ textDecoration: 'none', color: '#fff' }}>Artist Marketing <ChevronRight size={14} /></Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPageTemplate;

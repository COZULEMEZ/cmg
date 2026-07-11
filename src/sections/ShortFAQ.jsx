import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { useLanguage } from '../i18n/LanguageContext';

const ShortFAQ = () => {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const faqs_en = [
    { question: "How long does it take to distribute my music?", answer: "Usually 24-48 hours to reach Spotify, Apple Music, and 150+ DSPs globally." },
    { question: "How much of my royalties do I keep?", answer: "You keep up to 100% of your royalties with zero hidden fees, depending on your plan." },
    { question: "Do I retain the rights to my music?", answer: "Yes. You keep 100% ownership of your master recordings and publishing rights." },
    { question: "Do you offer Official Artist Channels (OAC)?", answer: "Yes, we automatically process YouTube OAC verification for all our distributed artists." },
    { question: "Can I transfer my catalog from another distributor?", answer: "Yes, you can transfer seamlessly using the same ISRCs to keep your play counts." },
    { question: "Do you collect mechanical royalties?", answer: "Yes, our Music Publishing division registers and collects your global mechanical and performance royalties." }
  ];

  const faqs_tr = [
    { question: "Müziğimin yayınlanması ne kadar sürer?", answer: "Spotify, Apple Music ve 150+ platforma genellikle 24-48 saat içinde ulaştırılır." },
    { question: "Telif gelirlerimin ne kadarını alıyorum?", answer: "Planınıza bağlı olarak hiçbir gizli kesinti olmadan %100'e varan telif kazancınızı elinizde tutarsınız." },
    { question: "Şarkılarımın hakları bende mi kalıyor?", answer: "Evet. Master (ses kaydı) ve yayın haklarınızın %100'ü tamamen size aittir." },
    { question: "Resmi Sanatçı Kanalı (OAC) onayını yapıyor musunuz?", answer: "Evet, dağıtım yaptığımız tüm sanatçılarımız için YouTube OAC doğrulama işlemlerini otomatik yapıyoruz." },
    { question: "Eski şirketimdeki şarkılarımı taşıyabilir miyim?", answer: "Evet, aynı ISRC kodlarını kullanarak dinlenme (stream) sayılarınızı kaybetmeden kesintisiz taşıma yapabilirsiniz." },
    { question: "Mekanik telif haklarımı topluyor musunuz?", answer: "Evet, Müzik Yayıncılığı (Publishing) departmanımız global mekanik ve performans teliflerinizi toplar." }
  ];

  const faqs = lang === 'tr' ? faqs_tr : faqs_en;

  return (
    <section className="section" style={{ padding: '4rem 0' }}>
      <div className="section-inner">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{lang === 'tr' ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}</h2>
        </motion.div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, i) => (
            <GlassCard key={i} padding="default" style={{ cursor: 'pointer', overflow: 'hidden' }}>
              <div onClick={() => toggle(i)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.05rem', margin: 0, fontWeight: 500, color: openIndex === i ? '#fff' : '#ccc' }}>
                  {faq.question}
                </h3>
                <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} style={{ color: '#888' }}>
                  <ChevronDown size={20} />
                </motion.div>
              </div>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: 'auto', opacity: 1, marginTop: '1rem' }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  >
                    <p style={{ color: '#aaa', margin: 0, lineHeight: 1.5 }}>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortFAQ;

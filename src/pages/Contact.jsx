import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import './Corporate.css';
import './Form.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) setSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="corporate-page">
        <GlassCard className="form-success-card" padding="lg">
          <CheckCircle2 size={64} className="success-icon" />
          <h2>Mesajınız Alındı</h2>
          <p className="success-note">En kısa sürede sizinle iletişime geçeceğiz.</p>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="corporate-page">
      <section className="corporate-hero">
        <h1 className="corporate-title">İletişim</h1>
        <p className="corporate-subtitle">İletişim bölümümüz yoğunluktan dolayı geçici olarak kapalıdır.</p>
      </section>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '1.5rem', maxWidth: '500px', margin: '0 auto', paddingBottom: '4rem', width: '100%' }}>
          <GlassCard padding="default" className="corporate-card">
            <div className="contact-info-item">
              <div className="card-header-icon"><Mail size={24} /></div>
              <div>
                <h4>E-posta</h4>
                <p>cozulemezmusicgroup@gmail.com</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard padding="default" className="corporate-card">
            <div className="contact-info-item">
              <div className="card-header-icon"><MapPin size={24} /></div>
              <div>
                <h4>Adres</h4>
                <p>Antalya, Turkey / İzmir, Turkey</p>
              </div>
            </div>
          </GlassCard>
      </div>
    </div>
  );
};

export default Contact;

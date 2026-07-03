import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import { CheckCircle2 } from 'lucide-react';
import './Form.css'; // Shared CSS for forms

const Application = () => {
  const [formData, setFormData] = useState({
    artist_name: '',
    stage_name: '',
    email: '',
    phone: '',
    spotify_url: '',
    youtube_url: '',
    instagram_url: '',
    monthly_listeners: '',
    biography: '',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        setSuccess(data.applicationId);
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="corporate-page">
        <section className="corporate-hero">
          <h1 className="corporate-title">Başvuru Alındı</h1>
        </section>
        <GlassCard className="form-success-card" padding="lg">
          <CheckCircle2 size={64} className="success-icon" />
          <h2>Teşekkürler, {formData.stage_name || formData.artist_name}!</h2>
          <p>Sanatçı başvurunuz başarıyla sistemimize kaydedildi. Başvuru referans numaranız:</p>
          <div className="reference-id">{success}</div>
          <p className="success-note">
            A&R ekibimiz başvurunuzu detaylı bir şekilde inceleyecek ve en kısa sürede sizinle iletişime geçecektir.
            <br/><br/>
            Başvurunuz e-posta adresinize de bildirilmiştir.
          </p>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="corporate-page">
      <section className="corporate-hero">
        <h1 className="corporate-title">Sanatçı Başvurusu</h1>
        <p className="corporate-subtitle">Ağımıza katılmak ve müziğinizi dünyaya açmak için aşağıdaki formu eksiksiz doldurun.</p>
      </section>

      <section className="form-section">
        <GlassCard padding="lg" className="glass-form-card">
          <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#888' }}>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Başvurular Geçici Olarak Kapalıdır</h2>
            <p>Şu an için yeni sanatçı başvurusu kabul edemiyoruz. Gösterdiğiniz ilgi için teşekkür ederiz.</p>
          </div>
        </GlassCard>
      </section>
    </div>
  );
};

export default Application;

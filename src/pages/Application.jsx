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
      <div className="page section" style={{ flexDirection: 'column', paddingTop: '100px', minHeight: '80vh' }}>
        <div className="section-inner" style={{ alignItems: 'center', textAlign: 'center', paddingBottom: '2rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>Başvuru Alındı</h1>
        </div>
        <div className="section-inner" style={{ paddingTop: 0 }}>
          <GlassCard className="form-success-card" padding="lg" style={{ width: '100%' }}>
            <CheckCircle2 size={64} className="success-icon" style={{ color: '#4ade80', margin: '0 auto 1rem' }} />
            <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Teşekkürler, {formData.stage_name || formData.artist_name}!</h2>
            <p style={{ textAlign: 'center', color: '#888' }}>Sanatçı başvurunuz başarıyla sistemimize kaydedildi. Başvuru referans numaranız:</p>
            <div className="reference-id" style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', textAlign: 'center', fontFamily: 'monospace', fontSize: '1.2rem', margin: '1rem 0' }}>{success}</div>
            <p className="success-note" style={{ textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>
              A&R ekibimiz başvurunuzu detaylı bir şekilde inceleyecek ve en kısa sürede sizinle iletişime geçecektir.
              <br/><br/>
              Başvurunuz e-posta adresinize de bildirilmiştir.
            </p>
          </GlassCard>
        </div>
      </div>
    );
  }

  return (
    <div className="page section" style={{ flexDirection: 'column', paddingTop: '100px', minHeight: '80vh' }}>
      <div className="section-inner" style={{ alignItems: 'center', textAlign: 'center', paddingBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>Sanatçı Başvurusu</h1>
        <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto' }}>Ağımıza katılmak ve müziğinizi dünyaya açmak için aşağıdaki formu eksiksiz doldurun.</p>
      </div>

      <div className="section-inner" style={{ paddingTop: 0 }}>
        <GlassCard padding="lg" className="glass-form-card" style={{ width: '100%' }}>
          <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#888' }}>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Başvurular Geçici Olarak Kapalıdır</h2>
            <p>Şu an için yeni sanatçı başvurusu kabul edemiyoruz. Gösterdiğiniz ilgi için teşekkür ederiz.</p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Application;

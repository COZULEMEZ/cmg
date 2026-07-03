import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import {
  Globe, Shield, TrendingUp, Users, Mic2, PieChart, Volume2,
  Calendar, Target, Lock, DollarSign, ChevronDown, ChevronUp
} from 'lucide-react';
import { useSettings } from '../context/SettingsContext';
import './Corporate.css';

const serviceCategories = [
  {
    category: 'Dağıtım & Yayın',
    icon: <Globe size={20} />,
    services: [
      {
        key: 'services_distribution',
        icon: <Globe size={28} />,
        defaultTitle: 'Global Müzik Dağıtımı',
        defaultDesc: "Spotify, Apple Music, YouTube Music, TikTok ve 150'den fazla bölgesel ve global dijital platformda eserlerinizi yayına alın. Entegrasyonumuz sayesinde 24 saat içinde dinleyicilerinizle buluşun.",
        details: ['150+ platform', '24 saat içinde yayın', '180+ ülke', 'Otomatik metadata yönetimi'],
      },
      {
        key: 'services_release',
        icon: <Calendar size={28} />,
        defaultTitle: 'Yayın Stratejisi (Release Strategy)',
        defaultDesc: "Doğru zamanlama, doğru hedef kitle ve doğru platformlar... Lansman öncesi ve sonrası tüm pazarlama takviminizi sektör profesyonelleriyle birlikte kurguluyoruz.",
        details: ['Pre-release planlama', 'Editoryal pitch', 'Çıkış takvimi', 'Post-release analiz'],
      },
    ]
  },
  {
    category: 'Hak & Gelir Yönetimi',
    icon: <Shield size={20} />,
    services: [
      {
        key: 'services_rights',
        icon: <Shield size={28} />,
        defaultTitle: 'Telif ve Hak Yönetimi',
        defaultDesc: "YouTube Content ID ve diğer dijital ayak izi tarama teknolojilerimizle eserlerinizin izinsiz kullanımını engelliyor, size ait olan her bir telif hakkının gelire dönüşmesini sağlıyoruz.",
        details: ['YouTube Content ID', 'DMCA koruması', 'İzleme & bildirim', 'Hak tescili'],
      },
      {
        key: 'services_royalty',
        icon: <DollarSign size={28} />,
        defaultTitle: 'Gelir Tahsilatı',
        defaultDesc: "Dünyanın neresinde dinlenirseniz dinlenin, elde ettiğiniz geliri en düşük kesinti oranlarıyla, şeffaf bir şekilde ve belirlediğiniz periyotlarda banka hesabınıza aktarıyoruz.",
        details: ['Şeffaf raporlama', 'Çoklu para birimi', 'Aylık ödeme', 'Anlık takip'],
      },
    ]
  },
  {
    category: 'Label & Sanatçı Hizmetleri',
    icon: <Users size={20} />,
    services: [
      {
        key: 'services_label',
        icon: <Users size={28} />,
        defaultTitle: 'Plak Şirketi (Label) Hizmetleri',
        defaultDesc: "Kendi sanatçılarınızı ve kataloglarınızı yönetebileceğiniz özel Label paneli. Gelir paylaşımlarını (split) otomatikleştirin ve finansal operasyonlarınızı tek tıkla çözün.",
        details: ['Multi-artist yönetim', 'Gelir split otomasyonu', 'Katalog yönetimi', 'Sanatçı daveti'],
      },
      {
        key: 'services_artist_dev',
        icon: <Mic2 size={28} />,
        defaultTitle: 'Sanatçı Gelişimi (A&R)',
        defaultDesc: "Yükselen yetenekleri tespit ediyor, müzik prodüksiyonundan görsel kimlik oluşturmaya kadar uçtan uca destek vererek kariyerlerini profesyonel bir yapıya oturtuyoruz.",
        details: ['Talent scouting', 'Prodüksiyon desteği', 'Görsel kimlik', 'Kariyer planlaması'],
      },
    ]
  },
  {
    category: 'Analitik & Pazarlama',
    icon: <PieChart size={20} />,
    services: [
      {
        key: 'services_analytics',
        icon: <PieChart size={28} />,
        defaultTitle: 'Gelişmiş Veri Analitiği',
        defaultDesc: "Hangi ülkede, hangi demografik yapıda daha çok dinlendiğinizi anlık olarak izleyin. Veriye dayalı kararlar alarak sonraki projelerinizin başarı şansını artırın.",
        details: ['Gerçek zamanlı veri', 'Demografik analiz', 'Platform kıyaslama', 'Trend tespiti'],
      },
      {
        key: 'services_marketing',
        icon: <Volume2 size={28} />,
        defaultTitle: 'Pazarlama & PR Desteği',
        defaultDesc: "Global editoryal playlist sunumları (pitching), dijital reklam kampanyaları ve influencer marketing ağımızla parçanızın doğru kitleye ulaşmasını sağlıyoruz.",
        details: ['Playlist pitching', 'Dijital reklam', 'Influencer ağı', 'Basın bülteni'],
      },
    ]
  },
];

const ServiceCard = ({ service, settings }) => {
  const [expanded, setExpanded] = useState(false);
  const title = settings[`${service.key}_title`] || service.defaultTitle;
  const desc = settings[`${service.key}_desc`] || service.defaultDesc;

  return (
    <GlassCard className="corporate-card service-card" padding="default">
      <div className="service-card-inner">
        <div className="card-header-icon">{service.icon}</div>
        <div className="service-card-body">
          <h3>{title}</h3>
          <p>{desc}</p>
          <button
            className="service-expand-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <><ChevronUp size={14} /> Daha Az</> : <><ChevronDown size={14} /> Özellikler</>}
          </button>
          {expanded && (
            <ul className="service-features">
              {service.details.map((d, i) => (
                <li key={i}><span className="service-feature-dot" />{d}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </GlassCard>
  );
};

const Services = () => {
  const { settings } = useSettings();

  return (
    <div className="corporate-page">
      <section className="corporate-hero">
        <h1 className="corporate-title">Hizmetlerimiz</h1>
        <p className="corporate-subtitle">
          Müzik kariyerinizi ve plak şirketinizi büyütmek için ihtiyacınız olan tüm profesyonel araçlar tek bir ekosistemde.
        </p>
      </section>

      <section className="corporate-content">
        {serviceCategories.map((cat, ci) => (
          <div key={ci}>
            <div className="service-category-header">
              <div className="service-category-icon">{cat.icon}</div>
              <h2>{cat.category}</h2>
            </div>
            <div className="corporate-grid-2">
              {cat.services.map((service, si) => (
                <ServiceCard key={si} service={service} settings={settings} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;

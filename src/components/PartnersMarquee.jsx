import React from 'react';
import './PartnersMarquee.css';

import { 
  SiSpotify, SiApple, SiYoutube, SiTiktok, 
  SiDeezer, SiTidal, SiSoundcloud, 
  SiShazam, SiInstagram, SiFacebook 
} from 'react-icons/si';
import { FaAmazon } from 'react-icons/fa';

// Platform configurations with brand colors
const platforms = [
  { name: 'Spotify', color: '#1DB954', icon: <SiSpotify /> },
  { name: 'Apple Music', color: '#FC3C44', icon: <SiApple /> },
  { name: 'YouTube Music', color: '#FF0000', icon: <SiYoutube /> },
  { name: 'TikTok', color: '#69C9D0', icon: <SiTiktok /> },
  { name: 'Amazon Music', color: '#00A8E1', icon: <FaAmazon /> },
  { name: 'Deezer', color: '#A238FF', icon: <SiDeezer /> },
  { name: 'Tidal', color: '#00FFFF', icon: <SiTidal /> },
  { name: 'SoundCloud', color: '#FF5500', icon: <SiSoundcloud /> },
  { name: 'Shazam', color: '#0D8EFF', icon: <SiShazam /> },
  { name: 'Instagram', color: '#E1306C', icon: <SiInstagram /> },
  { name: 'Facebook', color: '#1877F2', icon: <SiFacebook /> },
];

const PartnersMarquee = () => {
  const doubled = [...platforms, ...platforms];

  return (
    <div className="partners-marquee-container">
      {/* Row 1 — scroll left */}
      <div className="marquee-track">
        <div className="marquee-content">
          {doubled.map((p, i) => (
            <div key={i} className="partner-logo-glass" style={{ '--brand-color': p.color }}>
              <span className="partner-icon" style={{ color: p.color }}>{p.icon}</span>
              <span className="partner-name">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scroll right (offset) */}
      <div className="marquee-track">
        <div className="marquee-content marquee-reverse">
          {[...doubled].reverse().map((p, i) => (
            <div key={i} className="partner-logo-glass" style={{ '--brand-color': p.color }}>
              <span className="partner-icon" style={{ color: p.color }}>{p.icon}</span>
              <span className="partner-name">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersMarquee;

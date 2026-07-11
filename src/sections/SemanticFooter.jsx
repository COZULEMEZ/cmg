import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const futurePages = [
  { url: '/music-distribution', label: 'Music Distribution' },
  { url: '/spotify-distribution', label: 'Spotify Distribution' },
  { url: '/apple-music-distribution', label: 'Apple Music Distribution' },
  { url: '/youtube-music-distribution', label: 'YouTube Music Distribution' },
  { url: '/tiktok-music-distribution', label: 'TikTok Music Distribution' },
  { url: '/music-publishing', label: 'Music Publishing Services' },
  { url: '/artist-services', label: 'Artist Services & Development' },
  { url: '/playlist-promotion', label: 'Spotify Playlist Pitching' },
  { url: '/music-marketing', label: 'Music Marketing Agency' },
  { url: '/music-royalties', label: 'Music Royalties Explained' },
  { url: '/isrc', label: 'What is an ISRC Code?' },
  { url: '/upc', label: 'UPC Barcodes for Music' },
  { url: '/content-id', label: 'YouTube Content ID Monetization' },
  { url: '/oac', label: 'Official Artist Channel (OAC) Setup' },
  { url: '/sync-licensing', label: 'Sync Licensing Opportunities' },
  { url: '/record-label', label: 'Independent Record Label' },
  { url: '/music-analytics', label: 'Music Analytics Dashboard' },
  { url: '/blog', label: 'Music Business Blog' }
];

const SemanticFooter = () => {
  return (
    <section className="section" style={{ padding: '4rem 0', background: 'var(--bg-primary)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="section-inner">
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Explore Cozulemez Music Group (CMG)</h2>
          <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '800px' }}>
            As a premier global music distributor and record label, CMG provides independent artists with everything needed to succeed in the modern creator economy. From uploading your music worldwide to securing your digital rights, managing complex royalty splits, and executing high-level music marketing campaigns—Cozulemez Records is the ultimate infrastructure for your catalog.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
          {futurePages.map((page, i) => (
            <Link 
              key={i} 
              to={page.url} 
              style={{ color: '#b280ff', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s ease' }}
              onMouseOver={(e) => e.target.style.color = '#fff'}
              onMouseOut={(e) => e.target.style.color = '#b280ff'}
            >
              {page.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SemanticFooter;

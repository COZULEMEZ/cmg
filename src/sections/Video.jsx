import React, { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

const Video = () => {
  const [loadIframe, setLoadIframe] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadIframe(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" style={{ padding: 0, background: '#000', overflow: 'hidden' }}>
      <div 
        ref={containerRef}
        className="video-wrapper" 
        style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {!loadIframe && (
          <div className="thumbnail" style={{ position: 'absolute', inset: 0, background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={() => setLoadIframe(true)}>
            <div className="cmg-loader"></div>
          </div>
        )}
        
        {loadIframe && (
          <iframe 
            src="https://www.youtube-nocookie.com/embed/6YMY24KoHT4?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3" 
            title="CMG Tanıtım" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            loading="lazy"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
          ></iframe>
        )}

        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 40%)' }}></div>
        
        <h1 style={{ position: 'relative', zIndex: 10, fontSize: 'clamp(8rem, 20vw, 24rem)', fontWeight: 900, color: 'rgba(255,255,255,0.05)', letterSpacing: '-0.05em' }}>
          CMG
        </h1>
      </div>
    </section>
  );
};

export default React.memo(Video);

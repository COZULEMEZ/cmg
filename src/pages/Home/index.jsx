import React from 'react';
import Hero from '../../sections/Hero';
import Stats from '../../sections/Stats';
import Features from '../../sections/Features';
import ShortFAQ from '../../sections/ShortFAQ';
import './index.css';

const Home = () => {
  return (
    <div className="page" style={{ width: '100%' }}>
      <Hero />
      <Stats />
      <Features />
      <ShortFAQ />
    </div>
  );
};

export default Home;

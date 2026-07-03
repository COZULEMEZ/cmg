import React from 'react';
import { useSettings } from '../../context/SettingsContext';
import Hero from '../../sections/Hero';
import Stats from '../../sections/Stats';
import Features from '../../sections/Features';
import './index.css';

const Home = () => {
  const { settings } = useSettings();

  return (
    <div className="page" style={{ width: '100%' }}>
      <Hero settings={settings} />
      <Stats />
      <Features settings={settings} />
    </div>
  );
};

export default Home;

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { SettingsProvider } from './context/SettingsContext';

import LiquidNavbar from './components/LiquidNavbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy load Public Pages to improve First Paint / LCP
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Application = lazy(() => import('./pages/Application'));
const Contact = lazy(() => import('./pages/Contact'));

// Since Legal pages are named exports, they need a special lazy wrap or just standard import. 
// Standard import is fine for these since they are very small, but for perfection we'll leave them as static or split them if needed.
import { PrivacyPolicy, TermsOfUse, CopyrightNotice, CookiePolicy, KvkkPolicy } from './pages/Legal';

import './App.css';

// Fallback loader for Suspense
const PageLoader = () => (
  <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)' }}>
    <div className="cmg-loader"></div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <SettingsProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Public Routes — with navbar & footer */}
            <Route path="/*" element={
              <div className="app-container">
                <LiquidNavbar />
                <main className="main-content">
                  <Suspense fallback={<PageLoader />}>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/hakkimizda" element={<About />} />
                      <Route path="/hizmetler" element={<Services />} />
                      <Route path="/basvuru" element={<Application />} />
                      <Route path="/iletisim" element={<Contact />} />
                      {/* Legal pages */}
                      <Route path="/gizlilik" element={<PrivacyPolicy />} />
                      <Route path="/sartlar" element={<TermsOfUse />} />
                      <Route path="/telif" element={<CopyrightNotice />} />
                      <Route path="/cerezler" element={<CookiePolicy />} />
                      <Route path="/kvkk" element={<KvkkPolicy />} />
                    </Routes>
                  </Suspense>
                </main>
                <Footer />
              </div>
            } />
          </Routes>
        </Router>
      </SettingsProvider>
    </AuthProvider>
  );
}

export default App;

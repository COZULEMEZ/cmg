import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { SettingsProvider } from './context/SettingsContext';

import LiquidNavbar from './components/LiquidNavbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Application from './pages/Application';
import Contact from './pages/Contact';
import { PrivacyPolicy, TermsOfUse, CopyrightNotice, CookiePolicy, KvkkPolicy } from './pages/Legal';



import './App.css';

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

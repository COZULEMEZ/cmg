import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Team = lazy(() => import('../pages/Team'));
const Services = lazy(() => import('../pages/Services'));
const Application = lazy(() => import('../pages/Application'));
const Contact = lazy(() => import('../pages/Contact'));
const FAQCenter = lazy(() => import('../pages/FAQCenter'));
import { PrivacyPolicy, TermsOfUse, CopyrightNotice, CookiePolicy, KvkkPolicy } from '../pages/Legal';

const PageLoader = () => (
  <div style={{ height: '100dvh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)' }}>
    <div className="cmg-loader"></div>
  </div>
);

const AppRoutes = () => {
  return (
    <MainLayout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/kadromuz" element={<Team />} />
          <Route path="/hizmetler" element={<Services />} />
          <Route path="/basvuru" element={<Application />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/faq" element={<FAQCenter />} />
          
          <Route path="/gizlilik" element={<PrivacyPolicy />} />
          <Route path="/sartlar" element={<TermsOfUse />} />
          <Route path="/telif" element={<CopyrightNotice />} />
          <Route path="/cerezler" element={<CookiePolicy />} />
          <Route path="/kvkk" element={<KvkkPolicy />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
};

export default AppRoutes;

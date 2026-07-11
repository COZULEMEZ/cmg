import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProviders from './providers';
import AppRoutes from './routes';
import ScrollToTop from '../components/ScrollToTop';
import '../styles/globals.css';

import { LanguageProvider } from '../i18n/LanguageContext';

function App() {
  return (
    <AppProviders>
      <Router>
        <LanguageProvider>
          <ScrollToTop />
          <AppRoutes />
        </LanguageProvider>
      </Router>
    </AppProviders>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProviders from './providers';
import AppRoutes from './routes';
import ScrollToTop from '../components/ScrollToTop';
import '../styles/globals.css';

function App() {
  return (
    <AppProviders>
      <Router>
        <ScrollToTop />
        <AppRoutes />
      </Router>
    </AppProviders>
  );
}

export default App;

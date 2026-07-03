import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // URL değiştiğinde (başka sayfaya tıklandığında) en tepeye kaydır
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Sayfa yenilendiğinde tarayıcının eski pozisyonu hatırlamasını engelle
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // İlk yüklemede de kesinlikle en tepeye kaydır
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollToTop;

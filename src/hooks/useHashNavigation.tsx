import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  scrollToHash, 
  updateHash, 
  handleHashNavigation 
} from '@/lib/hashNavigation';

export const useHashNavigation = () => {
  const location = useLocation();

  useEffect(() => {
    // Sayfa yüklendiğinde hash varsa scroll yap
    handleHashNavigation(location.pathname);

    // Hash değişikliklerini dinle
    const handleHashChange = () => {
      handleHashNavigation(location.pathname);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Hash navigation için URL'i güncelle (sadece ana sayfa bölümleri için)
      if (location.pathname === '/') {
        updateHash(sectionId);
      }
    }
  };

  return { scrollToSection };
};

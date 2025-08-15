import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnalytics } from '@/hooks/useAnalytics';

interface AnalyticsWrapperProps {
  children: React.ReactNode;
}

export const AnalyticsWrapper = ({ children }: AnalyticsWrapperProps) => {
  const location = useLocation();
  const { trackPageView } = useAnalytics({
    trackingId: import.meta.env.VITE_GA_TRACKING_ID || 'G-JTCPERPGEN',
    enabled: import.meta.env.PROD, // Sadece production'da çalışsın
  });

  // Sayfa değişikliklerini takip et
  useEffect(() => {
    // Hash navigation için tam URL'i takip et
    const fullPath = location.pathname + location.search + location.hash;
    trackPageView(fullPath);
  }, [location, trackPageView]);

  return <>{children}</>;
}; 
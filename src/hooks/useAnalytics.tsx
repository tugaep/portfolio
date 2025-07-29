import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}

interface AnalyticsConfig {
  trackingId: string;
  enabled?: boolean;
}

export const useAnalytics = ({ trackingId, enabled = true }: AnalyticsConfig) => {
  const location = useLocation();

  useEffect(() => {
    if (!enabled || !trackingId) return;

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', trackingId);

    return () => {
      // Cleanup if needed
      const existingScript = document.querySelector(`script[src*="${trackingId}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [trackingId, enabled]);

  // Track page views on route changes
  useEffect(() => {
    if (!enabled || !trackingId || !window.gtag) return;

    window.gtag('config', trackingId, {
      page_path: location.pathname + location.search,
    });
  }, [location, trackingId, enabled]);

  // Return tracking functions
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (!enabled || !window.gtag) return;
    
    window.gtag('event', eventName, parameters);
  };

  const trackCustomEvent = (action: string, category: string, label?: string, value?: number) => {
    if (!enabled || !window.gtag) return;
    
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  };

  return {
    trackEvent,
    trackCustomEvent,
  };
}; 
import { useEffect } from 'react';

declare global {
  interface Window {
    clarity: (command: string, ...args: any[]) => void;
  }
}

interface ClarityConfig {
  projectId: string;
  enabled?: boolean;
}

export const useClarity = ({ projectId, enabled = true }: ClarityConfig) => {
  useEffect(() => {
    if (!enabled || !projectId) return;

    // Microsoft Clarity script
    const script = document.createElement('script');
    script.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${projectId}");
    `;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[src*="clarity.ms"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [projectId, enabled]);

  const trackCustomEvent = (eventName: string, customProperties?: Record<string, any>) => {
    if (!enabled || !window.clarity) return;
    
    window.clarity('event', eventName, customProperties);
  };

  return {
    trackCustomEvent,
  };
}; 
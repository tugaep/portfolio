import React from 'react';
import { LanguageProvider } from '@/hooks/useLanguage';
import { Navigation } from '@/components/Navigation';
import { SiteServices } from '@/components/SiteServices';
import { Footer } from '@/components/Footer';

const SitePage = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <SiteServices />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default SitePage; 
import React from 'react';
import { LanguageProvider } from '@/hooks/useLanguage';
import { Navigation } from '@/components/Navigation';
import { Writings } from '@/components/Writings';
import { Footer } from '@/components/Footer';

const WritingsPage = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Writings />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default WritingsPage; 
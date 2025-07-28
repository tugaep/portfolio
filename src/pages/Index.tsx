
import React from 'react';
import { LanguageProvider } from '@/hooks/useLanguage';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Work } from '@/components/Work';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <About />
        <Work />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;


import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

export function Hero() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/uploads/TuğrapEfeDikpınar.pdf';
    link.download = 'TugrapEfeDikpinar-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-background to-primary-100/20 dark:from-primary-900/20 dark:via-background dark:to-primary-800/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200/30 dark:bg-primary-700/20 rounded-full float animate-fade-in"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-300/20 dark:bg-primary-600/15 rounded-full float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-primary-400/20 dark:bg-primary-500/15 rounded-full float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg text-muted-foreground mb-4 font-medium">
              {t('hero.greeting')}
            </p>
          </div>

          {/* Name with Typewriter Effect */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-primary">
              <span className="typewriter inline-block">
                {t('hero.name')}
              </span>
            </h1>
          </div>

          {/* Age & Location */}
          <div className={`transition-all duration-1000 delay-350 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-md text-muted-foreground mb-2 font-medium">
              {t('hero.age_location')}
            </p>
          </div>

          {/* Tagline */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl md:text-2xl text-primary-700 mb-4 font-semibold">
              {t('hero.tagline')}
            </p>
          </div>

          {/* Status */}
          <div className={`transition-all duration-1000 delay-450 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-md text-muted-foreground mb-2">
              {t('hero.status')}
            </p>
          </div>

          {/* Roles */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-md text-muted-foreground mb-8">
              {t('hero.roles')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary-600 text-primary-foreground px-8 py-6 text-lg rounded-xl hover-lift"
              >
                {t('hero.getintouch')}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={scrollToWork}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-xl hover-lift"
              >
                {t('hero.seework')}
              </Button>
            </div>
          </div>

          {/* CV Download Button */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex justify-center mb-12">
              <Button 
                onClick={handleDownloadCV}
                variant="ghost"
                size="lg"
                className="text-primary hover:bg-primary/10 border border-primary/20 hover:border-primary/40 px-6 py-3 rounded-xl transition-all duration-300 hover-lift"
              >
                <Download className="mr-2 h-5 w-5" />
                {t('about.downloadCV')}
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex justify-center space-x-6 mb-16">
              <a 
                href="https://github.com/tugaep" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-primary-200 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/tugrapefedikpinar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-primary-200 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:tugrapefedikpinar@gmail.com"
                className="p-3 rounded-full border border-primary-200 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button 
              onClick={scrollToWork}
              className="animate-bounce text-primary hover:text-primary-600 transition-colors"
            >
              <ArrowDown className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

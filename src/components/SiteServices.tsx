import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { ExternalLink, ArrowRight, Mail, Globe, Code, Palette } from 'lucide-react';

export function SiteServices() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const subject = encodeURIComponent(t('site.email.subject'));
    const body = encodeURIComponent(t('site.email.body'));
    window.open(`mailto:tugrapefedikpinar@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  const projects = [
    {
      title: 'unog.dev',
      image: '/uploads/Screenshot 2025-07-09 at 03.39.52.png',
      technologies: ['css', 'react native', 'typescript'],
      liveUrl: 'https://unog.dev',
      featured: true,
    },
    {
      title: 'orbitapp.tech',
      image: '/uploads/Screenshot 2025-07-09 at 03.40.07.png',
      technologies: ['css', 'react native', 'typescript'],
      liveUrl: 'https://orbitapp.tech',
      featured: true,
    },
  ];

  return (
    <section id="site-services" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
              {t('site.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('site.description')}
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Services Overview */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-6 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">{t('site.services.design.title')}</h3>
              <p className="text-muted-foreground">{t('site.services.design.description')}</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800">
              <Code className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">{t('site.services.development.title')}</h3>
              <p className="text-muted-foreground">{t('site.services.development.description')}</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800">
              <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">{t('site.services.ux.title')}</h3>
              <p className="text-muted-foreground">{t('site.services.ux.description')}</p>
            </div>
          </div>

          {/* Previous Work */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
              {t('site.previousWork.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="group relative overflow-hidden rounded-2xl border border-border/20 bg-card hover:shadow-2xl transition-all duration-500 hover-lift"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button 
                        size="sm" 
                        className="bg-white/90 dark:bg-black/90 text-primary hover:bg-white dark:hover:bg-black"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                      {project.title}
                    </h3>
                    
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-800 text-primary text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button 
                      className="bg-primary hover:bg-primary-600 text-primary-foreground group"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        {t('site.previousWork.viewSite')}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-12 border border-primary-100 dark:border-primary-800">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              {t('site.cta.title')}
            </h2>
           
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary-600 text-primary-foreground px-8 py-6 text-lg rounded-xl hover-lift"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t('site.cta.contact')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
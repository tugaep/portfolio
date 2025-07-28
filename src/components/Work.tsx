
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { ExternalLink, Github, ArrowRight, Play, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Discord Icon Component
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

export function Work() {
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

  // Only featured projects for homepage
  const projects = [
    {
      title: t('work.orbit.title'),
      description: t('work.orbit.description'),
      image: '/uploads/orbit_logo.png',
      technologies: ['firebase', 'flutter', 'c++', 'python'],
      liveUrl: 'https://orbitapp.tech',
      githubUrl: '#',
      featured: true,
    },
    {
      title: t('work.unog.title'),
      description: t('work.unog.description'),
      image: '/uploads/unog_logo.png',
      technologies: ['nextcord', 'python', 'google workspace', 'react native'],
      liveUrl: 'https://unog.dev',
      githubUrl: '#',
      featured: true,
    },
  ];

  return (
    <section id="work" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              {t('work.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                <Card className={`overflow-hidden hover-lift group border-primary-100 dark:border-primary-800 ${
                  project.featured 
                    ? 'lg:grid lg:grid-cols-2 lg:gap-0' 
                    : ''
                } ${index % 2 === 1 && project.featured ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden bg-primary-50 dark:bg-primary-900/30 aspect-video lg:aspect-auto ${
                    index % 2 === 1 && project.featured ? 'lg:col-start-1' : ''
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-200/50 to-primary-400/50 dark:from-primary-700/30 dark:to-primary-600/30 flex items-center justify-center">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="max-w-[80%] max-h-[80%] object-contain opacity-90"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        {/* Orbit - External Link and Video */}
                        {project.title === t('work.orbit.title') && (
                          <>
                            <Button 
                              size="sm" 
                              className="bg-white/90 dark:bg-black/90 text-primary hover:bg-white dark:hover:bg-black"
                              asChild
                            >
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="bg-white/90 dark:bg-black/90 border-white/90 dark:border-black/90 text-primary hover:bg-white dark:hover:bg-black"
                              asChild
                            >
                              <a href="https://youtu.be/qkpnPx0HrzA" target="_blank" rel="noopener noreferrer">
                                <Play className="w-4 h-4" />
                              </a>
                            </Button>
                          </>
                        )}
                        
                        {/* ÜNOG - External Link and Discord */}
                        {project.title === t('work.unog.title') && (
                          <>
                            <Button 
                              size="sm" 
                              className="bg-white/90 dark:bg-black/90 text-primary hover:bg-white dark:hover:bg-black"
                              asChild
                            >
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="bg-white/90 dark:bg-black/90 border-white/90 dark:border-black/90 text-primary hover:bg-white dark:hover:bg-black"
                              asChild
                            >
                              <a href="https://unog.dev/discord" target="_blank" rel="noopener noreferrer">
                                <DiscordIcon className="w-4 h-4" />
                              </a>
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${
                    index % 2 === 1 && project.featured ? 'lg:col-start-2' : ''
                  }`}>
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-2xl font-serif font-semibold text-primary">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Additional details for ÜNOG */}
                    {project.title === t('work.unog.title') && (
                      <div className="mb-6 space-y-2">
                        <p className="text-sm text-muted-foreground">
                          {t('work.unog.role')}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {t('work.unog.tools')}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {t('work.unog.scale')}
                        </p>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary-50 dark:bg-primary-900/50 text-primary text-sm font-medium rounded-lg border border-primary-100 dark:border-primary-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <Button 
                        className="bg-primary hover:bg-primary-600 text-primary-foreground group"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          → {project.title === t('work.orbit.title') ? 'orbitapp.tech' : 'unog.dev'}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* See More Button */}
          <div className="text-center mt-16 mb-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-200 to-primary-300 dark:from-primary-700 dark:to-primary-600 rounded-lg blur opacity-75"></div>
              <Button 
                size="lg"
                className="relative bg-primary hover:bg-primary-600 text-primary-foreground group shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3"
                asChild
              >
                <Link to="/work">
                  {t('work.seeMore')}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

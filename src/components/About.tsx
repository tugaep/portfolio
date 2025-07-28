
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

export function About() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 bg-gradient-to-b from-background to-primary-50/30 dark:to-primary-900/10">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              {t('about.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            {/* About Description */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Card className="mb-12 hover-lift border-primary-100 dark:border-primary-800 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <p className="text-base leading-relaxed text-muted-foreground text-center mb-4">
                    {t('about.description.part1')}
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground text-center mb-4">
                    {t('about.description.part2')}
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground text-center mb-4">
                    {t('about.description.part3')}
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground text-center mb-4">
                    {t('about.description.part4')}
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground text-center">
                    {t('about.description.part5')}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Fern Mertens Quote */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Card className="mb-12 hover-lift border-primary-200 dark:border-primary-700 shadow-md bg-primary-50 dark:bg-primary-900/20">
                <CardContent className="p-5 md:p-6">
                  <blockquote className="italic text-lg text-primary-700 dark:text-primary-300 text-center">
                    {t('about.quote')}
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

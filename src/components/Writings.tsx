
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { PenTool, Coffee, Sparkles } from 'lucide-react';

export function Writings() {
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

  return (
    <section id="writings" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Animated Title */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="relative mb-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                {t('writings.title')}
              </h2>
              <div className="absolute -top-2 -right-4 opacity-60">
                <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              </div>
            </div>

            {/* Coming Soon with Animation */}
            <div className="relative mb-12">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-full border border-primary-200 shadow-sm">
                <PenTool className="w-5 h-5 text-primary animate-bounce" />
                <span className="text-xl font-medium text-primary">
                  {t('writings.comingSoon')}
                </span>
                <Coffee className="w-5 h-5 text-primary animate-pulse" />
              </div>
              
              {/* Floating dots animation */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>

            {/* Motivational Message */}
            <div className="p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg border border-primary-100">
              <p className="text-muted-foreground italic">
                {t('writings.motivationalMessage')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { Calendar, MapPin, Building } from 'lucide-react';

export function Experience() {
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

  const experiences = [
    {
      title: t('experience.firefly.title'),
      company: 'firefly',
      location: 'new york, usa',
      period: t('experience.firefly.period'),
      current: true,
      description: t('experience.firefly.description'),
      achievements: [
        t('experience.firefly.achievement1'),
        t('experience.firefly.achievement2'),
        t('experience.firefly.achievement3'),
      ],
    },
    {
      title: t('experience.unog.title'),
      company: 'ÜNOG',
      location: 'istanbul, türkiye',
      period: t('experience.unog.period'),
      current: true,
      description: t('experience.unog.description'),
      achievements: [
        t('experience.unog.achievement1'),
        t('experience.unog.achievement2'),
        t('experience.unog.achievement3'),
      ],
    },
    {
      title: t('experience.dogus.title'),
      company: 'doğuş hospitality & retail',
      location: 'istanbul, türkiye',
      period: t('experience.dogus.period'),
      current: false,
      description: t('experience.dogus.description'),
      achievements: [
        t('experience.dogus.achievement1'),
        t('experience.dogus.achievement2'),
        t('experience.dogus.achievement3'),
      ],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gradient-to-b from-primary-50/30 dark:from-primary-900/10 to-background">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              {t('experience.section.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-700 transform md:-translate-x-0.5"></div>

            {experiences.map((exp, index) => (
              <div
                key={exp.title + exp.company}
                className={`relative mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-2 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-2 md:-translate-x-2 ${
                  exp.current ? 'bg-primary animate-pulse' : 'bg-primary-300 dark:bg-primary-600'
                } border-4 border-background shadow-lg`}></div>

                {/* Experience Card */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-1/2'}`}>
                  <Card className="hover-lift border-primary-100 dark:border-primary-800 shadow-lg">
                    <CardContent className="p-6 md:p-8">
                      {/* Period Badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          exp.current 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-primary-100 dark:bg-primary-800 text-primary'
                        }`}>
                          <Calendar className="w-3 h-3 inline mr-1" />
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full">
                            {t('experience.present')}
                          </span>
                        )}
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-xl md:text-2xl font-serif font-semibold text-primary mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-4 mb-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed font-semibold">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

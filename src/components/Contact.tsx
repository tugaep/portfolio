
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { Mail, Linkedin, Github, MessageCircle, Send } from 'lucide-react';

export function Contact() {
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

  const contactMethods = [
    
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      value: 'tugrapefedikpinar',
      href: 'https://www.linkedin.com/in/tugrapefedikpinar/',
      color: 'bg-blue-600',
    },
    {
      icon: Github,
      label: t('contact.github'),
      value: '@tugaep',
      href: 'https://github.com/tugaep',
      color: 'bg-gray-800',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-primary-50/30 dark:to-primary-900/10">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              {t('contact.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Methods */}
            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
              {contactMethods.map((method, index) => (
                <div
                  key={method.label}
                  className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${300 + index * 200}ms` }}
                >
                  <Card className="text-center hover-lift border-primary-100 dark:border-primary-800 group hover:border-primary-300 dark:hover:border-primary-600 transition-colors h-full">
                    <CardContent className="p-8 md:p-10">
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 text-white ${method.color} group-hover:scale-110 transition-transform`}>
                        <method.icon className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                        {method.label}
                      </h3>
                      <p className="text-muted-foreground mb-6 break-words text-base hyphens-auto">
                        {method.value}
                      </p>
                      <Button 
                        asChild
                        className="bg-primary hover:bg-primary-600 text-primary-foreground px-6 py-3"
                      >
                        <a href={method.href} target="_blank" rel="noopener noreferrer">
                          <Send className="w-4 h-4 mr-2" />
                          {t('contact.connect')}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Card className="text-center border-primary-200 dark:border-primary-700 bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-900/20 dark:to-primary-800/30">
                <CardContent className="p-8 md:p-12">
                  <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-primary mb-4">
                    {t('contact.cta.title')}
                  </h3>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto px-4">
                    {t('contact.cta.description')}
                  </p>
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary-600 text-primary-foreground px-8 py-6 text-lg rounded-xl hover-lift"
                    asChild
                  >
                    <a href="mailto:tugrapefedikpinar@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      {t('contact.cta.button')}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

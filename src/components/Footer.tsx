
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function Footer() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/tugaep',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/tugrapefedikpinar/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:tugrapefedikpinar@gmail.com',
      label: 'Email',
    },
  ];

  const handleNeedWebsite = () => {
    navigate('/site');
  };

  return (
    <footer className="bg-primary-900 dark:bg-primary-950 text-primary-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-8">
            <h3 className="text-2xl font-serif font-bold mb-2">
              tuğrap efe dikpınar
            </h3>
            <p className="text-primary-200 dark:text-primary-300 mb-6">
              {t('footer.summary')}
            </p>
            <Button
              onClick={handleNeedWebsite}
              className="bg-primary hover:bg-primary-600 text-primary-foreground px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              {t('nav.needWebsite')}
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary-800 dark:bg-primary-900 hover:bg-primary-700 dark:hover:bg-primary-800 text-primary-100 hover:text-white transition-all duration-300 hover-lift"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-primary-800 dark:border-primary-700 pt-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-primary-300 dark:text-primary-400">
              <p>
                © {new Date().getFullYear()} tugrap.dev
              </p>
              <span className="hidden md:block">•</span>
              <p className="flex items-center gap-1">
                {t('footer.made')} <Heart className="w-4 h-4 text-red-400" /> by tugaep
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

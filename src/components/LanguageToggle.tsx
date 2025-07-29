
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  
  const getLanguageText = (lang: string) => {
    switch (lang) {
      case 'tr':
        return 'tr';
      case 'en':
        return 'eng';
      default:
        return 'tr';
    }
  };
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
      className="p-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
      title={`Switch to ${language === 'tr' ? 'English' : 'Turkish'}`}
    >
      <span className="text-sm font-medium tracking-wider">
        {getLanguageText(language)}
      </span>
    </Button>
  );
}

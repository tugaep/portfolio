
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  
  const getFlag = (lang: string) => {
    switch (lang) {
      case 'tr':
        return '🇹🇷';
      case 'en':
        return '🇬🇧';
      default:
        return '🇹🇷';
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
      <span className="text-xl filter drop-shadow-sm">
        {getFlag(language)}
      </span>
    </Button>
  );
}

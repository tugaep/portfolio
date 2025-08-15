
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { useLanguage } from '@/hooks/useLanguage';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';


export function Navigation() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);





  // Ana sayfa içindeki bölümler (sadece scroll, hash yok)
  const sectionItems = [
    { key: 'nav.home', id: 'hero' },
    { key: 'nav.about', id: 'about' },
    { key: 'nav.experience', id: 'experience' },
    { key: 'nav.contact', id: 'contact' },
  ];

  // Pages klasöründe olan sayfalar (hash routing)
  const pageItems = [
    { key: 'nav.work', path: '/work' },
    { key: 'nav.writings', path: '/writings' },
  ];

  // Gerçek sayfa olan route'lar
  const pageRoutes = ['/work', '/writings', '/site'];

  const handleSectionClick = (item: { key: string; id: string }) => {
    // Eğer başka bir sayfadaysak, önce ana sayfaya git
    if (pageRoutes.includes(location.pathname)) {
      navigate('/');
      // Ana sayfaya gittikten sonra ilgili bölüme scroll yap
      setTimeout(() => {
        const element = document.getElementById(item.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Zaten ana sayfadaysak direkt scroll yap
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handlePageClick = (item: { key: string; path: string }) => {
    navigate(item.path);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              if (pageRoutes.includes(location.pathname)) {
                navigate('/');
              } else {
                const element = document.getElementById('hero');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                setIsMobileMenuOpen(false);
              }
            }}
            className="font-serif text-xl font-semibold text-primary hover:scale-105 transition-transform duration-300"
          >
            tugrap.dev
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Ana sayfa bölümleri (sadece scroll) */}
            {sectionItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleSectionClick(item)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {t(item.key)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            {/* Pages klasöründeki sayfalar (hash routing) */}
            {pageItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handlePageClick(item)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {t(item.key)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button
              onClick={() => navigate('/site')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              {t('nav.needWebsite')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-background/95 backdrop-blur-xl rounded-xl border border-border/20 shadow-2xl">
            <div className="flex flex-col space-y-3">
              {/* Ana sayfa bölümleri (sadece scroll) */}
              {sectionItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleSectionClick(item)}
                  className="text-left py-3 px-4 text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-300"
                >
                  {t(item.key)}
                </button>
              ))}
              {/* Pages klasöründeki sayfalar (hash routing) */}
              {pageItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handlePageClick(item)}
                  className="text-left py-3 px-4 text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-300"
                >
                  {t(item.key)}
                </button>
              ))}
              <button
                onClick={() => navigate('/site')}
                className="text-left py-3 px-4 text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-300"
              >
                {t('nav.needWebsite')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

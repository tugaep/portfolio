/**
 * Hash navigation utility functions
 */

export const scrollToHash = (hash: string, delay: number = 300) => {
  const element = document.getElementById(hash);
  if (element) {
    setTimeout(() => {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, delay);
  }
};

export const updateHash = (hash: string) => {
  if (hash) {
    window.location.hash = `#${hash}`;
  } else {
    window.location.hash = '';
  }
};

export const getCurrentHash = (): string => {
  return window.location.hash.slice(1);
};

export const isHashValid = (hash: string): boolean => {
  return document.getElementById(hash) !== null;
};

export const handleHashNavigation = (pathname: string) => {
  const hash = getCurrentHash();
  if (hash && pathname === '/' && isHashValid(hash)) {
    scrollToHash(hash);
  }
};

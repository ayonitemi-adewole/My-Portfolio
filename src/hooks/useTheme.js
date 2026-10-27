import { useCallback, useEffect, useState } from 'react';

const getTheme = () => document.documentElement.dataset.theme || 'dark';

// index.html sets the initial theme before paint; this hook keeps it in sync.
export const useTheme = () => {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    const onChange = (e) => setTheme(e.detail);
    window.addEventListener('themechange', onChange);
    return () => window.removeEventListener('themechange', onChange);
  }, []);

  const toggle = useCallback(() => {
    const next = getTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage can be unavailable (private mode); the theme still applies for this visit.
    }
    window.dispatchEvent(new CustomEvent('themechange', { detail: next }));
  }, []);

  return { theme, toggle };
};

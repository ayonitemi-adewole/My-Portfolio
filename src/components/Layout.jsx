import { useEffect } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import NavBar from './NavBar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';
import CommandPalette from './CommandPalette';
import CursorGlow from './CursorGlow';
import { navItems } from '../data/site';

const titles = Object.fromEntries(navItems.map((item) => [item.to, item.label]));

const Layout = () => {
  const location = useLocation();
  const outlet = useOutlet();

  useEffect(() => {
    const label = titles[location.pathname];
    document.title = label && label !== 'Home'
      ? `${label} — Ayonitemi Adewole`
      : 'Ayonitemi Adewole — Software Developer';
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <CursorGlow />
      <ScrollProgress />
      <NavBar />

      <AnimatePresence
        mode="wait"
        onExitComplete={() => window.scrollTo({ top: 0, behavior: 'instant' })}
      >
        <motion.main
          id="main"
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {outlet}
        </motion.main>
      </AnimatePresence>

      <Footer />
      <BackToTop />
      <CommandPalette />
    </div>
  );
};

export default Layout;

import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowUpRight, Command, Menu, X } from 'lucide-react';
import logo from '../assets/logo/logo-2.png';
import { navItems, profile, socials } from '../data/site';
import { isMac, openCommandPalette } from '../lib/commandPalette';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const { pathname } = useLocation();

  // Hide on scroll down, reveal on scroll up.
  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 300 && y > prev);
  });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? '-120%' : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4"
      >
        <nav
          aria-label="Main"
          className={`mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border pl-3 pr-2 transition-all duration-500 ${
            scrolled || open
              ? 'border-line bg-surface/80 shadow-lg shadow-black/10 backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          <Link to="/" className="group flex items-center gap-2.5" aria-label={`${profile.name} — home`}>
            <img
              src={logo}
              alt=""
              className="h-9 w-9 transition-transform duration-500 group-hover:rotate-[20deg]"
            />
            <span className="font-display text-lg font-bold tracking-tight">
              {profile.shortName}
              <span className="text-accent">.</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 rounded-full border border-line bg-bg/40 p-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `relative block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? 'text-accent-fg' : 'text-muted hover:text-fg'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-accent"
                          transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                        />
                      )}
                      <span className="relative">{item.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5">
            <button
              onClick={openCommandPalette}
              className="hidden items-center gap-2 rounded-full border border-line px-3 py-2 text-xs text-muted transition-colors hover:border-accent/50 hover:text-fg md:flex"
              aria-label="Open command palette"
            >
              <Command className="h-3.5 w-3.5" />
              <kbd className="font-mono">{isMac ? '⌘' : 'Ctrl'} K</kbd>
            </button>
            <ThemeToggle />
            <Link to="/contact" className="btn btn-primary hidden px-5 py-2.5 sm:inline-flex">
              Hire me
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? 'x' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
              <ul className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `flex items-baseline gap-4 py-2 font-display text-4xl font-semibold ${
                          isActive ? 'text-fg' : 'text-subtle'
                        }`
                      }
                    >
                      <span className="font-mono text-sm text-accent">0{i + 1}</span>
                      {item.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex flex-col gap-4"
              >
                <a href={`mailto:${profile.email}`} className="text-muted">
                  {profile.email}
                </a>
                <div className="flex gap-2">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;

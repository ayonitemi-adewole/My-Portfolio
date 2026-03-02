import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Mail } from 'lucide-react';
import logo from '../assets/logo/logo-2.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AnimatedButton from './AnimatedButton';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => {
    // Check initial scroll position on mount
    if (typeof window !== 'undefined') {
      return window.scrollY > 50;
    }
    return true;
  });
  const location = useLocation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    
    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/about', label: 'About', icon: User },
    { to: '/projects', label: 'My Projects', icon: Briefcase },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`w-full sticky top-0 left-0 z-50 transition-all duration-500 bg-neutral-900/95 backdrop-blur-2xl  ${
        scrolled
          ? 'shadow-lg shadow-purple-500/10'
          : 'bg-transparent'
      }`}
    >
      {/* Gradient border line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="relative">
        <div className="max-w-[1650px] mx-auto px-5 md:px-20 xl:px-5">
          <div className="flex items-center justify-between h-20">
            {/* Logo with gradient glow */}
            <motion.div
              className="flex items-center gap-3 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Gradient glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-purple-500/30"
                />
              </div>
              <p className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                <span className="text-purple-500">AY</span>O
              </p>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                  <Link
                    to={item.to}
                    className={`group relative px-5 py-2.5 rounded-xl font-medium text-lg transition-all duration-300 ${
                      location.pathname === item.to
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {/* Background gradient on hover/active */}
                    <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      location.pathname === item.to
                        ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/30'
                        : 'bg-transparent group-hover:bg-white/10 group-hover:border group-hover:border-white/20'
                    }`} />
                    <span className="relative z-10 flex items-center gap-2">
                      <item.icon size={18} className={location.pathname === item.to ? 'text-purple-400' : ''} />
                      {item.label}
                    </span>
                    {/* Active indicator dot */}
                    {/* {location.pathname === item.to && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-500 rounded-full"
                      />
                    )} */}
                  </Link>
              ))}
              <motion.button
                onClick={navigate.bind(null, '/contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatedButton text="Get in Touch" onClick={navigate.bind(null, '/contact')} />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden relative">
              <motion.button
                ref={buttonRef}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className={`p-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border border-white/10 transition-all duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              >
                <Menu size={24} className='text-white' />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className={`absolute inset-0 p-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-white/10 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <X size={24} className='text-white' />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="lg:hidden fixed top-20 left-0 w-full h-screen"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-purple-950/50 to-neutral-900 backdrop-blur-2xl" />
              
              {/* Decorative orbs */}
              <div className="absolute top-20 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-0 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl" />

              <div className="relative flex flex-col items-center pt-40 h-full space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 px-8 py-4 rounded-2xl font-medium text-xl transition-all duration-300 ${
                        location.pathname === item.to
                          ? 'text-white bg-gradient-to-r from-purple-600/40 to-pink-600/40 border border-purple-500/30 shadow-lg shadow-purple-500/20'
                          : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
                      }`}
                    >
                      <item.icon size={24} className={location.pathname === item.to ? 'text-purple-400' : ''} />
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={'/contact'}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-medium text-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 border border-white/10"
                  >
                    <Mail size={24} />
                    Contact
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default NavBar;

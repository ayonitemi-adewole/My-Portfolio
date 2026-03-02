import { motion } from 'framer-motion';
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';
import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/logo/logo-2.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: FaWhatsapp, href: 'https://wa.link/yq00wz', label: 'WhatsApp' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/ayonitemi-adewole-adedamola', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/_.ayonitemi/', label: 'Instagram' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <footer className="relative bg-neutral-950 text-white overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl" />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container flex flex-col gap-8 md:gap-12 w-full max-w-[1650px] mx-auto relative p-5 md:px-20 xl:px-5 py-12"
      >
        {/* Brand Section */}
        <motion.div variants={itemVariants} className="flex items-center gap-4">
          {/* Logo with gradient border */}
          <div className="relative group">
            <img
              src={logo}
              alt="Logo"
              className="relative w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-purple-500/30"
            />
          </div>
          <p className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
            <span className="text-purple-500">AY</span>O
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Quick Links + Email Signup */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <div className="relative group w-fit">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl w-fit">
                <h3 className="text-lg font-semibold text-white">
                  Quick Links
                </h3>
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4 text-purple-500" />
                  <Link
                    to={link.href}
                    className="text-neutral-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Email Signup */}
            <div className="mt-4">
              <p className="text-neutral-400 text-sm mb-3">
                Subscribe to our newsletter
              </p>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent w-full text-sm focus:outline-none px-4 py-3 text-white placeholder-neutral-500"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-3 font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                  >
                    <span className="hidden sm:inline">Subscribe</span>
                    <ChevronRight className="w-5 h-5 sm:ml-2" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Address Section */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <div className="relative group w-fit">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl w-fit">
                <h3 className="text-lg font-semibold text-white">Contact Info</h3>
              </div>
            </div>

            <ul className="space-y-4 text-neutral-400 text-base">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-purple-400" />
                </div>
                <span>Ibadan, Nigeria</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-purple-400" />
                </div>
                <span>ayonitemiadewole16@gmail.com</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-purple-400" />
                </div>
                <span>+234 8126143347</span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Services Section */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <div className="relative group w-fit">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl w-fit">
                <h3 className="text-lg font-semibold text-white">Services</h3>
              </div>
            </div>

            <ul className="space-y-3 text-neutral-400 text-base">
              {[
                'Web Development',
                'Mobile Apps',
                'UI/UX Design',
                'E-commerce Solutions',
                'Custom Software',
              ].map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4 text-pink-500" />
                  <span className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-4 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400 px-4 sm:px-6 md:px-12 pb-6"
      >
        <p className="text-center md:text-left">
          Copyright ©2025,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-semibold">
            AYO
          </span>{' '}
          All Rights Reserved
        </p>

        {/* Social Links */}
        <div className="flex gap-4 mt-4 md:mt-0">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target='_blank'
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              title={social.label}
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all hover:border-purple-500/30 group"
            >
              <social.icon className="text-neutral-400 group-hover:text-purple-400 transition-colors" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

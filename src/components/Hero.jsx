import React from 'react';
import logo from '../assets/logo/logo-2.png';
import hero from '../assets/imgs/hero.png';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6';

const Hero = () => {
  const socials = [
    { icon: FaWhatsapp, href: 'https://wa.link/yq00wz', label: 'WhatsApp' },
    { icon: FaRegEnvelope, href: 'mailto:adewoleayonitemi@gmail.com', label: 'Email' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/ayonitemi-adewole-adedamola', label: 'LinkedIn' },
    { icon: FaXTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://www.instagram.com/_.ayonitemi/', label: 'Instagram' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 2.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative flex flex-col h-[60%] lg:h-[80%] xl:h-[90%] w-full p-5 md:px-20 xl:px-5 mt-16 md:mt-10 lg:mt-20 xl:mt-10 max-w-[1400px] mx-auto overflow-hidden">
      {/* Background Hero Image */}
      <motion.img
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 1.2, ease: 'easeInOut' }}
        viewport={{ once: true }}
        src={hero}
        alt="Hero background"
        className="absolute inset-0 -top-[5%] md:-top-[5%] xl:top-[7%] w-full h-[90%] md:h-full lg:h-[70%] xl:h-[80%] object-contain -z-5"
      />

      {/* Gradient Orbs - Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        viewport={{ once: true }}
        className="bg-[#4B22B5] w-[88%] md:w-[60%] lg:w-[50%] xl:w-[37%] aspect-square absolute rounded-full top-[55%] md:top-[55%] lg:top-[48%] xl:top-[60%] left-[50%] translate-[-50%] -z-10 blur-3xl"
      />
      
      {/* Floating gradient orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute top-20 right-10 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 1 }}
        className="absolute bottom-20 left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl -z-10"
      />

      {/* Main Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col justify-between h-[52%] md:h-[60%] xl:h-[65%] relative z-10"
      >
        {/* Logo/Brand Section - Glassmorphism Card */}
        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-5">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-3 bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl">
              <img src={logo} alt="" className="w-8 h-8" />
              <div>
                <p className="text-sm text-white uppercase font-medium leading-tight">
                  Software
                </p>
                <p className="text-sm text-purple-500 uppercase font-bold leading-tight">
                  Developer
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Text Content */}
        <motion.div
          variants={itemVariants}
          className="flex items-center lg:items-baseline xl:gap-60"
        >
          <div className="relative">
            <p className="font-semibold text-5xl md:text-7xl lg:text-8xl xl:text-[12rem] text-white relative z-10">
              HELLO
            </p>
            {/* Gradient underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '60%' }}
              transition={{ delay: 6, duration: 2.5, ease: 'easeOut' }}
              className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            />
          </div>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 text-2xl md:text-4xl lg:text-5xl font-bold ml-auto xl:ml-0">
            I'M
          </p>
        </motion.div>

        {/* Name with Gradient */}
        <motion.p
          variants={itemVariants}
          className="font-bold text-2xl md:text-5xl lg:text-7xl xl:text-[6rem] text-right w-full relative"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white">
            AYONITEMI
          </span>
        </motion.p>

        {/* Role Badge - Glassmorphism */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 ">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-35 group-hover:opacity-80 transition-opacity duration-300"></div>
            <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full">
              <p className="text-2xl md:text-4xl lg:text-5xl xl:text-7xl text-white font-medium">
                <span className="text-purple-400">SOFTWARE</span> DEVELOPER
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3">
            <Link
              to="/projects"
              className="flex items-center gap-2 px-6 py-3 bg-[#4B22B5] hover:bg-[#5a2fca] text-white rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group"
            >
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all hover:scale-105"
            >
              Contact
            </Link>
          </div>
        </motion.div>

        {/* Social Links - Animated */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 mt-4"
        >
          <span className="text-neutral-500 text-sm">Connect with me</span>
          <div className="flex gap-3">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target='_blank'
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all group"
                title={social.label}
              >
                <social.icon className="text-lg text-neutral-400 group-hover:text-purple-400 transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 5, duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-neutral-500 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-purple-500 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

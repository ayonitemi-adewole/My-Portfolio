import React, { useState, useEffect } from 'react';
import logo from '../assets/logo/logo-2.png';
import AnimatedServerSVG from './AnimatedServerSVG';
import Spinner from './Spinner';
import AnimatedLoader from './AnimatedLoader';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Intro = () => {
  const fullText = "I'";
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Blinking cursor effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  const stats = [
    { icon: MapPin, label: 'Born In', value: 'Ibadan, Nigeria', color: 'from-pink-500 to-rose-500' },
    { icon: Clock, label: 'Experience', value: '3+ Years', color: 'from-purple-500 to-indigo-500' },
    { icon: Calendar, label: 'Date of Birth', value: '06 June', color: 'from-blue-500 to-cyan-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-[1400px] mx-auto text-white w-full px-6 md:px-20 xl:px-24 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-center gap-16"
        >
          {/* LEFT SIDE */}
          <motion.div variants={itemVariants} className="w-full lg:max-w-[55%]">
            {/* Header with Glassmorphism */}
            <div className="relative mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20"></div>
              <div className="relative flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-xl">
                <img src={logo} alt="Logo" className="w-8 h-8" />
                <p className="text-base font-semibold text-purple-400 uppercase tracking-widest">
                  Introduction of Myself
                </p>
              </div>
            </div>

            {/* Title with Typewriter Effect */}
            <div className="relative mb-6">
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold mt-6 leading-tight">
                <span className="text-white">
                  I'M A SOFTWARE DEVELOPER TRANSFORMING IDEAS INTO
                </span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                  CLEAN AND FUNCTIONAL
                </span>
                <span className="text-white">, DIGITAL PRODUCTS</span>
              </h1>
              {/* Animated underline */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '40%' }}
                transition={{ delay: 1, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4"
              />
            </div>

            {/* Description with glassmorphism */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed max-w-xl text-base md:text-lg">
                  Passionate about crafting clean, scalable, and efficient digital
                  solutions. I build modern, user-friendly web applications that
                  bridge creativity and functionality — delivering impactful results
                  for brands and people alike.
                </p>
              </div>
            </div>

            {/* Stats with Glassmorphism Cards */}
            <div className="flex flex-wrap gap-4 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 min-w-[160px] group-hover:scale-105 transition-transform duration-300">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}>
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-400 uppercase text-xs tracking-wider mb-1">
                      {stat.label}
                    </p>
                    <p className="font-semibold text-white">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="mt-10">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#4B22B5] hover:bg-[#5a2fca] text-white rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group"
              >
                Learn More About Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Animated Elements */}
          <motion.div
            variants={itemVariants}
            className="relative h-[53vh] md:h-[45vh] lg:h-[37vh] xl:h-[53vh] w-full flex flex-col items-center"
          >
            {/* Gradient orb background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-full blur-3xl -z-10" />

            {/* Top stat */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div> */}
              <div className="relative w-40 h-56 md:h-48 lg:h-56 rounded-full flex flex-col items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-colors">
                <AnimatedLoader />
                {/* <span className="mt-2 text-xs text-gray-400">Building</span> */}
              </div>
            </motion.div>

            {/* Bottom stats row - positioned lower */}
            <div className="flex justify-between gap-4 absolute bottom-4 left-1/2 -translate-x-1/2">
              {/* Bottom-left stat */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                {/* <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div> */}
                <div className="relative w-36 h-48 md:h-40 lg:h-48 rounded-full flex flex-col items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-colors">
                  <Spinner />
                  {/* <span className="mt-2 text-xs text-gray-400">Creating</span> */}
                </div>
              </motion.div>

              {/* Bottom-right stat */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                {/* <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div> */}
                <div className="relative w-36 h-48 md:h-40 lg:h-48 rounded-full flex flex-col items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 hover:border-green-500/50 transition-colors">
                  <div className="scale-75">
                    <AnimatedServerSVG />
                  </div>
                  {/* <span className="mt-[-20px] text-xs text-gray-400">Deploying</span> */}
                </div>
              </motion.div>
            </div>

            {/* Floating particles effect */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-10 right-10 w-2 h-2 bg-purple-500 rounded-full"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-20 left-10 w-3 h-3 bg-blue-500 rounded-full"
            />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/3 left-20 w-1.5 h-1.5 bg-pink-500 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;

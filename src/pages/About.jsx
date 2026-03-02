import React from 'react';
import NavBar from '../components/NavBar';
import { Code2, Palette, Smartphone, Zap } from 'lucide-react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { icon: Code2, title: 'Front-End Development', desc: 'React, Vue, Next.js & Modern CSS' },
    { icon: Palette, title: 'Web App Development', desc: 'Full-stack web applications' },
    { icon: Smartphone, title: 'Mobile App Development', desc: 'React Native & Cross-platform' },
    { icon: Zap, title: 'UI/UX Design', desc: 'User-centered design solutions' },
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
    <>
      <NavBar />
      <div className="h-screen overflow-y-auto w-full relative">
        {/* Background gradient orbs */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10" />
        
        <div className="grid grid-cols-1 gap-16 p-5 md:px-20 xl:px-5 mt-16 md:mt-10 lg:my-20 xl:mt-10 max-w-[1400px] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white text-center relative z-10">
              About Me
            </h1>
            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '30%' }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-4"
            />
          </motion.div>

          {/* Hero Image with glassmorphism effect */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-10 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative">
              <img 
                src="/assets/img/meeting.jpg" 
                alt="Meeting" 
                className='max-h-[600px] w-full object-cover rounded-xl' 
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl"></div>
            </div>
          </motion.div>

          {/* Content Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Left Column - About Text */}
            <motion.div variants={itemVariants} className="flex flex-col justify-center gap-6">
              {/* Glassmorphism card for "About me" label */}
              <div className="relative group w-fit">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl w-fit">
                  <p className="text-base md:text-lg text-neutral-300 font-medium">
                    About me
                  </p>
                </div>
              </div>
              
              <motion.div variants={itemVariants}>
                <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight md:leading-snug">
                  Professional{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                    Web Solutions
                  </span>{' '}
                  For Digital Products
                </p>
              </motion.div>

              {/* Description with glassmorphism */}
              <motion.div variants={itemVariants} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                  <p className="text-base md:text-lg text-neutral-400 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    dolorum eum sequi esse nemo, non laudantium, repellat quibusdam
                    deserunt itaque voluptates eos labore! Eligendi, praesentium
                    consequuntur. Voluptatem modi non nulla!
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div variants={itemVariants} className="my-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="relative group"
                  >
                    {/* Gradient border on hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 h-full group-hover:border-purple-500/30 transition-colors">
                      {/* Icon with gradient background */}
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <skill.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-xl font-semibold text-white mb-2">
                        {skill.title}
                      </p>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Experience Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { number: '3+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Happy Clients' },
              { number: '10+', label: 'Awards Won' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center group-hover:border-purple-500/30 transition-colors">
                  <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {stat.number}
                  </p>
                  <p className="text-sm md:text-base text-neutral-400 mt-2">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;

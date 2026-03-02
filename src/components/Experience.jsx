import React, { useState, useEffect } from 'react';
import logo from '../assets/logo/logo-2.png';
import { ArrowDown, Calendar, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Experience = () => {
  // Initialize with correct value to prevent animation issues from incorrect initial render
  const [isXl, setIsXl] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1280;
    }
    return false;
  });

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsXl(window.innerWidth >= 1280);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const workExperience = [
    {
      year: '2026 - current',
      company: 'ICMA Professional services',
      position: 'Front-End Developer',
    }
  ]

  const education = [
    {
      year: '2021 - 2025',
      degree: 'B.Sc degree in Software Engineering',
      school: 'Dominion University',
    },
    {
      year: '2023',
      degree: 'Software Engineering - Front-End Development',
      school: 'SQI College of ICT',
    },
    {
      year: '2024',
      degree: 'Software Engineering - Advanced Front-End Development',
      school: 'SQI College of ICT',
    },
    {
      year: '2025 - current',
      degree: 'Mobile App Development',
      school: 'Online courses',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative flex flex-col w-full p-5 md:px-20 xl:px-5 pt-20 md:pt-10 lg:pt-20 xl:pt-14 pb-14 max-w-[1400px] mx-auto text-white overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row sm:items-center gap-6 sm:justify-between w-full mb-16"
      >
        <div className="flex flex-col gap-4">
          <div className="relative inline-flex">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30"></div>
            <div className="relative flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl">
              <img src={logo} alt="" className="w-6 h-6" />
              <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest">
                My Experience
              </p>
            </div>
          </div>
          <p className="text-3xl sm:text-5xl font-bold">
            WORK & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">EDUCATION</span>
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-[#4B22B5] hover:bg-[#5a2fca] text-white rounded-full px-6 py-3 text-base w-fit font-medium transition-all hover:shadow-lg hover:shadow-purple-500/25 group"
          onClick={() => navigate('/contact')}
        >
          Contact Me
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>

      {/* CONTENT */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col xl:flex-row mt-10 min-h-[90vh] relative gap-10 xl:gap-16"
      >
        {isXl ? (
          <>
            {/* WORK */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col xl:justify-between w-full xl:mt-0 relative"
            >
              {/* Work Badge */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center gap-4 pb-8 my-auto"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="relative px-16 py-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-8 h-8 text-purple-400" />
                      <span className="text-4xl font-bold text-white">WORK</span>
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowDown className="w-10 h-10 text-purple-400/50" />
                </motion.div>
              </motion.div>

              {/* Work Content */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative group my-auto"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {workExperience.map((work, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative group/work p-4 rounded-xl hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-purple-400" />
                          <span className="text-sm text-gray-400">{work.year}</span>
                        </div>
                        <p className="text-lg font-medium text-white mb-1">{work.position}</p>
                        <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 uppercase tracking-wider">
                          {work.company}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* STUDY */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col xl:justify-between w-full xl:mt-0 relative"
            >
              {/* Study Content */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {education.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative group/edu p-4 rounded-xl hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-purple-400" />
                          <span className="text-sm text-gray-400">{edu.year}</span>
                        </div>
                        <p className="text-lg font-medium text-white mb-1">{edu.degree}</p>
                        <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 uppercase tracking-wider">
                          {edu.school}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Study Badge */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center gap-4 pb-8 my-auto"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowDown className="w-10 h-10 text-blue-400/50 rotate-180" />
                </motion.div>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="relative px-16 py-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-8 h-8 text-blue-400" />
                      <span className="text-4xl font-bold text-white">STUDY</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-16"
          >
            {/* WORK */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="relative px-16 py-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-6 h-6 text-purple-400" />
                      <span className="text-3xl font-bold text-white">WORK</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur opacity-30"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {workExperience.map((work, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-xl hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-purple-400" />
                          <span className="text-sm text-gray-400">{work.year}</span>
                        </div>
                        <p className="text-lg font-medium text-white mb-1">{work.position}</p>
                        <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 uppercase tracking-wider">
                          {work.company}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* STUDY */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="relative px-16 py-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-6 h-6 text-blue-400" />
                      <span className="text-3xl font-bold text-white">STUDY</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur opacity-30"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <div className="grid gap-4">
                    {education.map((edu, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-xl hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-purple-400" />
                          <span className="text-sm text-gray-400">{edu.year}</span>
                        </div>
                        <p className="text-lg font-medium text-white mb-1">{edu.degree}</p>
                        <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 uppercase tracking-wider">
                          {edu.school}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.section>
    </div>
  );
};

export default Experience;

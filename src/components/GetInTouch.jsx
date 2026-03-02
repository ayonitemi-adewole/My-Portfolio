import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  LetterText,
  Mail,
  Phone,
  User,
  Send,
} from 'lucide-react';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const benefits = [
    { title: '3+ Years Of Experience' },
    { title: 'Front-End Development' },
    { title: 'Web App Development' },
    { title: 'Mobile App Development' },
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
    <div className="flex flex-col lg:flex-row pb-20 relative w-full p-5 md:px-20 xl:px-5 max-w-[1400px] mx-auto">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="lg:w-[40%] xl:w-[30%] lg:pr-10"
      >
        <motion.div variants={itemVariants}>
          {/* Glassmorphism label */}
          <div className="relative group w-fit mb-2">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl w-fit">
              <h2 className="text-lg text-neutral-300 font-medium">Get In Touch</h2>
            </div>
          </div>
        </motion.div>

        <motion.p variants={itemVariants} className="text-4xl md:text-5xl font-medium my-5 text-white">
          Let's Talk For Your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            Next Projects
          </span>
        </motion.p>

        <motion.div variants={itemVariants} className="my-5 space-y-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 5 }}
              className="flex items-center gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <p className="text-lg font-medium text-neutral-300">{benefit.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 w-full lg:w-[60%] xl:w-[70%] lg:pl-10"
      >
        {/* Full Name */}
        <motion.div variants={itemVariants}>
          <label className="text-base font-medium text-neutral-400 mb-2 block">
            Full Name
          </label>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-4 px-5 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500/50 outline-none text-white placeholder:text-neutral-500 transition-colors"
                placeholder="Ayonitemi Adewole"
              />
              <User className="absolute right-5 top-[50%] translate-y-[-50%] text-neutral-500" />
            </div>
          </div>
        </motion.div>

        {/* Email */}
        <motion.div variants={itemVariants}>
          <label className="text-base font-medium text-neutral-400 mb-2 block">
            Email
          </label>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-4 px-5 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500/50 outline-none text-white placeholder:text-neutral-500 transition-colors"
                placeholder="xyz@gmail.com"
              />
              <Mail className="absolute right-5 top-[50%] translate-y-[-50%] text-neutral-500" />
            </div>
          </div>
        </motion.div>

        {/* Phone Number */}
        <motion.div variants={itemVariants}>
          <label className="text-base font-medium text-neutral-400 mb-2 block">
            Phone Number
          </label>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-4 px-5 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500/50 outline-none text-white placeholder:text-neutral-500 transition-colors"
                placeholder="+234812345678"
              />
              <Phone className="absolute right-5 top-[50%] translate-y-[-50%] text-neutral-500" />
            </div>
          </div>
        </motion.div>

        {/* Subject */}
        <motion.div variants={itemVariants}>
          <label className="text-base font-medium text-neutral-400 mb-2 block">
            Subject
          </label>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full p-4 px-5 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500/50 outline-none text-white placeholder:text-neutral-500 transition-colors"
                placeholder="Let's Collab!"
              />
              <LetterText className="absolute right-5 top-[50%] translate-y-[-50%] text-neutral-500" />
            </div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <label className="text-base font-medium text-neutral-400 mb-2 block">
            Message
          </label>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-4 px-5 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500/50 outline-none text-white placeholder:text-neutral-500 transition-colors resize-none"
                placeholder="I'd like to build a project with you..."
              />
            </div>
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.div variants={itemVariants}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-lg px-6 py-4 rounded-xl font-semibold text-white hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            <span>Send A Message</span>
            <Send className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GetInTouch;

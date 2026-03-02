import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Socials from '../components/Socials';
import { Send, Mail, MapPin, Phone, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const contactInfo = [
    { icon: MapPin, label: 'Location', value: 'Ibadan, Nigeria' },
    { icon: Mail, label: 'Email', value: 'ayonitemiadewole16@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+234 8126143347' },
  ];

  return (
    <>
      <NavBar />
      <div className="h-screen overflow-y-auto w-full relative">
        {/* Background gradient orbs */}
        <div className="absolute top-40 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl -z-10" />

        <div className="grid grid-cols-1 p-5 md:px-20 xl:px-5 mt-16 md:mt-10 lg:my-20 xl:mt-10 max-w-[1400px] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mb-8"
          >
            <p className="text-5xl md:text-6xl lg:text-7xl font-medium text-center text-white relative z-10">
              Contact Me
            </p>
            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '25%' }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-4"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Left Column - Content */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              {/* Hero Image with glassmorphism */}
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative">
                  <img 
                    src="./assets/img/Contact.jpg" 
                    alt="Contact" 
                    className='mb-8 max-h-[400px] w-full object-cover rounded-xl' 
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl"></div>
                </div>
              </motion.div>

              {/* Get In Touch Section */}
              <motion.div variants={itemVariants} className="flex flex-col gap-4">
                {/* Glassmorphism card for label */}
                <div className="relative group w-fit">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl w-fit">
                    <p className="text-lg text-neutral-300 font-medium">Get In Touch</p>
                  </div>
                </div>

                <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                  Let's Talk About Your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                    Next Project
                  </span>
                </p>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-[90%]">
                  Feel free to reach out for collaborations or just a friendly{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-extrabold">
                    {' <HELLO /> '}
                  </span>
                </p>
              </motion.div>

              {/* Contact Info Cards */}
              <motion.div variants={itemVariants} className="flex flex-col gap-4 mt-2">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500 uppercase tracking-wider">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Socials */}
              <motion.div variants={itemVariants} className="flex flex-col gap-4 mt-2">
                <p className="text-lg text-white font-medium">Check My Socials</p>
                <Socials />
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                    Send a Message
                  </h3>
                  
                  <form className="flex flex-col gap-5">
                    {/* Name Input */}
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                        <div className="flex items-center px-4">
                          <User className="w-5 h-5 text-neutral-500" />
                          <input
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-transparent text-white px-4 py-4 focus:outline-none placeholder-neutral-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                        <div className="flex items-center px-4">
                          <Mail className="w-5 h-5 text-neutral-500" />
                          <input
                            type="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-transparent text-white px-4 py-4 focus:outline-none placeholder-neutral-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message Input */}
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                        <div className="flex items-start px-4 pt-4">
                          <MessageSquare className="w-5 h-5 text-neutral-500 mt-1" />
                          <textarea
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={5}
                            className="w-full bg-transparent text-white px-4 py-2 focus:outline-none placeholder-neutral-500 resize-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;

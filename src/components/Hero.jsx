import React from 'react';
import logo from '../assets/logo/logo-2.png';
import hero from '../assets/imgs/hero.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative flex flex-col h-[60%] lg:h-[80%] xl:h-[90%] w-full p-5 md:px-20 xl:px-5 mt-16 md:mt-10 lg:mt-20 xl:mt-10 max-w-[1400px] mx-auto">
      <motion.img
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{delay: 1.5, duration: 1.2, ease: 'easeInOut' }}
        viewport={{ once: true }}
        src={hero}
        alt="Hero background"
        className="absolute inset-0 -top-[0%] md:-top-[5%] xl:top-[7%] w-full h-[90%] md:h-full lg:h-[70%] xl:h-[80%] object-contain -z-5"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 1.8, duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="bg-[#4B22B5] w-[88%] md:w-[60%] lg:w-[50%] xl:w-[37%] aspect-square absolute rounded-full top-[55%] md:top-[55%] lg:top-[48%] xl:top-[60%] left-[50%] translate-[-50%] -z-10"></motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="flex items-center gap-2 mb-5">
        <img src={logo} alt="" className="w-6 h-6" />
        <p className="text-base text-white uppercase">
          Software <br /> <span className="text-purple-600">Developer</span>
        </p>
      </motion.div>
      <div className="flex flex-col justify-between h-[52%] md:h-[60%] xl:h-[65%]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="flex items-center lg:items-baseline xl:gap-60">
          <p className="font-semibold text-5xl md:text-7xl lg:text-8xl xl:text-[12rem]">
            HELLO
          </p>
          <p className="text-[#4B22B5] text-2xl md:text-4xl lg:text-5xl font-bold ml-auto xl:ml-0">
            I'M
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="font-bold text-white text-2xl md:text-5xl lg:text-7xl xl:text-[6rem] text-right w-full underline underline-offset-8">
          AYONITEMI
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.4, duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl lg:text-5xl xl:text-7xl bg-black/50 lg:bg-white/5 backdrop-blur-xl w-fit px-8 py-4 rounded-full">
          <span className="font-medium">SOFTWARE </span>
           DEVELOPER
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;

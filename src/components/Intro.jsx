import React, { useState, useEffect } from 'react';
import logo from '../assets/logo/logo-2.png';
import AnimatedServerSVG from "./AnimatedServerSVG";
import Spinner from './Spinner';
import AnimatedLoader from './AnimatedLoader';

const Intro = () => {
  const fullText = "I’M A SOFTWARE DEVELOPER TRANSFORMING IDEAS INTO CLEAN AND FUNCTIONAL, DIGITAL PRODUCTS";
  const [displayedText, setDisplayedText] = useState('');

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

  return (
    <section className="bg-neutral-950/5 backdrop-blur-xl w-full">
      <div className="max-w-[1400px] mx-auto text-white w-full px-6 md:px-20 xl:px-24 py-20 flex flex-col md:flex-row justify-between items-center gap-16">
        {/* LEFT SIDE */}
        <div className="w-full md:max-w-[50%]">
          {/* Header */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-6 h-6" />
            <p className="text-base font-semibold text-[#4B22B5] uppercase tracking-widest">
              Introduction of Myself
            </p>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold mt-6 leading-tight">
            {displayedText.split(' ').map((word, index) => {
              if (word === 'DEVELOPER') {
                return <span key={index} className="text-[#4B22B5]">{word}</span>;
              }
              return word;
            }).reduce((acc, curr, index) => {
              if (index === 0) return [curr];
              return [...acc, ' ', curr];
            }, [])}
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-300 leading-relaxed max-w-xl text-base md:text-lg">
            Passionate about crafting clean, scalable, and efficient digital
            solutions. I build modern, user-friendly web applications that
            bridge creativity and functionality — delivering impactful results
            for brands and people alike.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-10 text-lg">
            <div>
              <p className="text-gray-400 uppercase">Born In</p>
              <p className="font-semibold">Ibadan, Nigeria</p>
            </div>
            <div>
              <p className="text-gray-400 uppercase">Experience</p>
              <p className="font-semibold">3+ Years</p>
            </div>
            <div>
              <p className="text-gray-400 uppercase">Date of Birth</p>
              <p className="font-semibold">06 June</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative h-[53vh] md:h-[45vh] lg:h-[37vh] xl:h-[53vh] w-full flex flex-col items-center">
          {/* Top stat */}
          <div className="w-40 h-60 rounded-full flex flex-col items-center justify-center hover:scale-105 transition-transform bg-black/10 border border-white/30 border-dashed mb-8">
            <AnimatedLoader />
          </div>

          {/* Bottom stats row - positioned lower */}
          <div className="flex justify-between gap-5 absolute bottom-4 left-1/2 -translate-x-1/2">
            {/* Bottom-left stat */}
            <div className="w-40 h-60 rounded-full flex flex-col items-center justify-center hover:scale-105 transition-transform bg-black/10 border border-white/30 border-dashed">
              <Spinner />
            </div>

            {/* Bottom-right stat */}
            <div className="w-40 h-60 rounded-full flex flex-col items-center justify-center hover:scale-105 transition-transform bg-black/10 border border-white/30 border-dashed">
              <AnimatedServerSVG />
            </div>
            {/* <div className="w-40 h-60 rounded-full flex flex-col items-center justify-center hover:scale-105 transition-transform border border-dashed border-gray-400">
              <h3 className="text-lg font-bold text-white">80K</h3>
              <p className="text-xs text-gray-300 text-center mt-0.5">
                Customers
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

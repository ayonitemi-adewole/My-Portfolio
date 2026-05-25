import React from 'react';

const CarouselStrip = () => {
  const data = [
    'WEB DEVELOPMENT',
    'MOBILE APPS',
    'UI/UX DESIGN',
    'GRAPHIC DESIGN',
    'SEO OPTIMIZATION',
  ];

  return (
    <div className="w-full overflow-hidden border-t border-b border-white/20 py-4 bg-neutral-900/50 backdrop-blur-xl">
      {/* Animated container */}
      <div className="flex animate-carousel whitespace-nowrap">
        {/* Duplicate twice for seamless loop */}
        {[...data, ...data].map((item, index) => (
          <span
            key={index}
            className="inline-block text-white text-base md:text-2xl lg:text-4xl font-bold px-8 py-4 border-r border-white/20"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CarouselStrip;

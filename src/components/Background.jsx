import React from 'react';

const Background = () => {
  return (
    <div className="absolute w-full h-screen -z-10 bg-black/92 overflow-hidden">
      <div className="flex w-[180%] animate-slide">
        <div className="h-screen w-[10%] shadow-xs shadow-white opacity-5"></div>
        <div className="h-screen w-[10%] shadow-xs shadow-white opacity-5"></div>
        <div className="h-screen w-[10%] shadow-xs shadow-white opacity-5"></div>
        <div className="h-screen w-[10%] shadow-xs shadow-white opacity-5"></div>
        <div className="h-screen w-[10%] shadow-xs shadow-white opacity-5"></div>
        <div className="h-screen w-[10%] shadow-xs shadow-white opacity-5"></div>
        <div className="h-screen w-[10%] shadow-xs shadow-white opacity-5"></div>
      </div>
    </div>
  );
};

export default Background;

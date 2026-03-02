import React from 'react';
import Background from '../components/Background';
import NavBar from '../components/NavBar';
import { CheckIcon } from 'lucide-react';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <NavBar />
      <div className="h-screen overflow-y-auto w-full">
        <div className="grid grid-cols-1 gap-16 p-5 md:px-20 xl:px-5 mt-16 md:mt-10 lg:my-20 xl:mt-10 max-w-[1400px] mx-auto">
          <h1 className="text-5xl font-medium text-white text-center">
            About Me
          </h1>
          <img src="/assets/img/meeting.jpg" alt="" className='max-h-[600px] w-full object-cover' />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="flex flex-col justify-center gap-5">
              <p className="text-base md:text-lg text-neutral-400">About me</p>
              <p className="text-3xl md:text-5xl font font-semibold text-white max-w-[80%] md:max-w-full md:leading-16">
                Professional{' '}
                <span className="text-[#4B22B5]">Web Solutions</span> For
                Digital Products
              </p>
              <p className="text-base md:text-lg text-neutral-400 leading-6 md:leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                dolorum eum sequi esse nemo, non laudantium, repellat quibusdam
                deserunt itaque voluptates eos labore! Eligendi, praesentium
                consequuntur. Voluptatem modi non nulla!
              </p>
            </div>
            <div className="my-5 grid grid-cols-1 gap-6 lg:gap-10 lg:h-fit lg:m-auto md:grid-cols-2 lg:grid-cols-1">
              <div className="flex items-center gap-5 text-white">
                <div className="flex items-center justify-center w-fit p-0.5">
                  <CheckIcon className="inline-block text-[#4B22B5]" />
                </div>
                <p className="text-xl font-medium">3+ Years Of Experience</p>
              </div>
              <div className="flex items-center gap-5 text-white">
                <div className="flex items-center justify-center w-fit p-0.5">
                  <CheckIcon className="inline-block text-[#4B22B5]" />
                </div>
                <p className="text-xl font-medium">Front-End Development</p>
              </div>
              <div className="flex items-center gap-5 text-white">
                <div className="flex items-center justify-center w-fit p-0.5">
                  <CheckIcon className="inline-block text-[#4B22B5]" />
                </div>
                <p className="text-xl font-medium">Web App Development</p>
              </div>
              <div className="flex items-center gap-5 text-white">
                <div className="flex items-center justify-center w-fit p-0.5">
                  <CheckIcon className="inline-block text-[#4B22B5]" />
                </div>
                <p className="text-xl font-medium">Mobile App Development</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;

import React from 'react';
import Background from '../components/Background';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Socials from '../components/Socials';

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="h-screen overflow-y-auto w-full">
        <div className="grid grid-cols-1 p-5 md:px-20 xl:px-5 mt-16 md:mt-10 lg:my-20 xl:mt-10 max-w-[1400px] mx-auto">
          <p className="text-5xl font-medium text-center py-5 mb-8 text-white z-10">
            Contact Me
          </p>
          <img src="./assets/img/Contact.jpg"  className='mb-8 max-h-[600px] w-full object-cover' />
          <div className="flex flex-col gap-5 mb-8">
            <p className="text-lg text-neutral-300">Get In Touch</p>
            <p className="text-3xl md:text-5xl font font-medium text-white max-w-[80%] md:max-w-full leading-10 md:leading-16">
              Let's Talk About Your{' '}
              <span className="text-[#4B22B5]">Next Project</span>
            </p>
            <p className="text-lg text-neutral-300 max-w-[90%] md:leading-8">
              Feel free to reach out for collaborations or just a friendly
                <span className="text-[#4B22B5] font-extrabold">{'  <> '}</span>
                HELLO!
                <span className="text-[#4B22B5] font-extrabold">{' </>'}</span>
            </p>
          </div>

          <div className="flex flex-col gap-5 mt-5 mb-10">
            <p className="text-lg text-white">Check My Socials</p>
            <Socials />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;

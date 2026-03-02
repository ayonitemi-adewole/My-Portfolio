import React, { useState, useEffect } from 'react';
import logo from '../assets/logo/logo-2.png';
import { ArrowDown, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Experience = () => {
  const [isXl, setIsXl] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      setIsXl(window.innerWidth >= 1280);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative flex flex-col w-full p-5 md:px-20 xl:px-5 pt-20 md:pt-10 lg:pt-20 xl:pt-14 pb-14 max-w-[1400px] mx-auto text-white">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row sm:items-center gap-10 sm:justify-between w-full">
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-2'>
            <img src={logo} alt="" className="w-10 h-10" />
            <p className='text-[#4B22B5] text-base'>MY EXPERIENCE RESUME</p>
          </div>
          <p className='text-2xl sm:text-5xl'>WORK & EDUCATION</p>
        </div>
        <button className='bg-[#4B22B5] text-white rounded-full px-6 py-3 text-base w-fit'
        onClick={navigate.bind(null, '/contact')}>CONTACT ME</button>
      </motion.div>

      {/* CONTENT */}
      <section className='flex flex-col xl:flex-row mt-20 min-h-[90vh] relative'>
        {isXl ? (
          <>
            {/* WORK */}
            <div className='flex flex-col gap-10 xl:justify-between w-full mt-20 xl:mt-0 relative'>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 1, ease: 'easeInOut' }}
                viewport={{ once: true }} className='flex flex-col items-center justify-center gap-5 pb-5 h-[50%]'
              >
                <div className='px-[75px] py-[22px] bg-[#1f1f1f] rounded-full text-[42.8px]'>WORK</div>
                <ArrowDown className='w-14 h-14 text-gray-600' />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
                viewport={{ once: true }} className='p-[60px] bg-[#1f1f1f] min-h-[50%] text-base md:text-lg lg:text-xl line'>
                I'M CURRRENLTY NEW IN THE INDUSTRY WHEN IT COMES TO WORK EXPERIENCE, BUT I'VE BEEN ABLE TO GAIN SOME VALUABLE EXPERIENCE THROUGH INDUSTRIAL TRAINING (SIWES), AND PERSONAL PROJECTS. I'M EXCITED TO CONTINUE LEARNING AND GROWING AS A DEVELOPER.
              </motion.div>
            </div>

            {/* STUDY */}
            <div className='flex flex-col xl:flex-col-reverse gap-10 xl:justify-between w-full mt-20 xl:mt-0 relative'>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1, ease: 'easeInOut' }}
                viewport={{ once: true }} className='flex flex-col xl:flex-col-reverse items-center justify-center gap-5 pb-5 h-[50%]'>
                <div className='px-[75px] py-[22px] bg-[#1f1f1f] rounded-full text-[42.8px]'>STUDY</div>
                <ArrowDown className='w-14 h-14 text-gray-600 xl:rotate-180' />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1, ease: 'easeInOut' }}
                viewport={{ once: true }}
                className='p-[60px] bg-[#1f1f1f] flex flex-col sm:flex-row justify-between h-[50%] '>
                <div className='min-w-1/2'> 
                  <div className='mb-[35px]'>
                    <div className='flex items-center text-sm mb-[8px]'>
                      <Calendar className='inline w-4 h-4 text-[#4B22B5] mr-[7px]' />
                      <p className='font-light'>2021 - 2025</p>
                    </div>
                    <p className='text-lg mb-[8px] font-medium'>B.Sc degree in Software Engineering</p>
                    <p className='text-lg mt-1 font-bold font-mono uppercase'>Dominion University</p>
                  </div>
                  <div className='mb-[35px]'>
                    <div className='flex items-center text-sm mb-[8px]'>
                      <Calendar className='inline w-4 h-4 text-[#4B22B5] mr-[7px]' />
                      <p className='font-light'>2023</p>
                    </div>
                    <p className='text-lg mb-[8px] font-medium'>Software Engineering - <br></br> Front-End Development</p>
                    <p className='text-lg mt-1 font-bold font-mono uppercase'>SQI College of ICT</p>
                  </div>
                </div>

                {/* <div className='hidden sm:block rotate-90'>Separator</div> */}

                <div className='min-w-1/2'>
                  <div className='mb-[35px]'>
                    <div className='flex items-center text-sm mb-[8px]'>
                      <Calendar className='inline w-4 h-4 text-[#4B22B5] mr-[7px]' />
                      <p className='font-light'>2024</p>
                    </div>
                    <p className='text-lg mb-[8px] font-medium'>Software Engineering - Advanced Front-End Development</p>
                    <p className='text-lg mt-1 font-bold font-mono uppercase'>SQI College of ICT</p>
                  </div>
                  <div className='mb-[35px]'>
                    <div className='flex items-center text-sm mb-[8px]'>
                      <Calendar className='inline w-4 h-4 text-[#4B22B5] mr-[7px]' />
                      <p className='font-light'>2025 - current</p>
                    </div>
                    <p className='text-lg mb-[8px] font-medium'>Mobile App Development</p>
                    <p className='text-lg mt-1 font-bold font-mono uppercase'>Online courses</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {/* WORK */}
            <div className='flex flex-col gap-10 xl:justify-between w-full mt-5 xl:mt-0 relative'>
              <div className='flex flex-col items-center justify-center gap-5 pb-5 h-[50%]'>
                <div className='px-[75px] py-[22px] bg-[#1f1f1f] rounded-full text-[42.8px]'>WORK</div>
                <ArrowDown className='w-14 h-14 text-gray-600' />
              </div>
              <div className='p-[60px] bg-[#1f1f1f] min-h-[50%] text-xl'>
                I'M CURRRENLTY NEW IN THE INDUSTRY WHEN IT COMES TO WORK EXPERIENCE, BUT I'VE BEEN ABLE TO GAIN SOME VALUABLE EXPERIENCE THROUGH INDUSTRIAL TRAINING (SIWES), AND PERSONAL PROJECTS. I'M EXCITED TO CONTINUE LEARNING AND GROWING AS A DEVELOPER.
              </div>
            </div>

            {/* STUDY */}
            <div className='flex flex-col xl:flex-col-reverse gap-10 xl:justify-between w-full mt-20 xl:mt-0 relative'>
              <div className='flex flex-col xl:flex-col-reverse items-center justify-center gap-5 pb-5 h-[50%]'>
                <div className='px-[75px] py-[22px] bg-[#1f1f1f] rounded-full text-[42.8px]'>STUDY</div>
                <ArrowDown className='w-14 h-14 text-gray-600 xl:rotate-180' />
              </div>
              <div className='p-[60px] bg-[#1f1f1f] flex flex-col sm:flex-row justify-between h-[50%] '>
                <div className='min-w-1/2'>
                  <div className='mb-[35px]'>
                    <div className='flex items-center text-sm mb-[8px]'>
                      <Calendar className='inline w-4 h-4 text-[#4B22B5] mr-[7px]' />
                      <p className='font-light'>2021 - 2025</p>
                    </div>
                    <p className='text-lg mb-[8px] font-medium'>B.Sc degree in Software Engineering</p>
                    <p className='text-lg mt-1 font-bold font-mono uppercase'>Dominion University</p>
                  </div>
                  <div className='mb-[35px]'>
                    <div className='flex items-center text-sm mb-[8px]'>
                      <Calendar className='inline w-4 h-4 text-[#4B22B5] mr-[7px]' />
                      <p className='font-light'>2023</p>
                    </div>
                    <p className='text-lg mb-[8px] font-medium'>Software Engineering - Front-End Development</p>
                    <p className='text-lg mt-1 font-bold font-mono uppercase'>SQI College of ICT</p>
                  </div>
                </div>

                {/* <div className='hidden sm:block rotate-90'>Separator</div> */}

                <div className='min-w-1/2'>
                  <div className='mb-[35px]'>
                    <div className='flex items-center text-sm mb-[8px]'>
                      <Calendar className='inline w-4 h-4 text-[#4B22B5] mr-[7px]' />
                      <p className='font-light'>2024</p>
                    </div>
                    <p className='text-lg mb-[8px] font-medium'>Software Engineering - Advanced Front-End Development</p>
                    <p className='text-lg mt-1 font-bold font-mono uppercase'>SQI College of ICT</p>
                  </div>
                  <div className='mb-[35px]'>
                    <div className='flex items-center text-sm mb-[8px]'>
                      <Calendar className='inline w-4 h-4 text-[#4B22B5] mr-[7px]' />
                      <p className='font-light'>2025</p>
                    </div>
                    <p className='text-lg mb-[8px] font-medium'>Mobile App Development</p>
                    <p className='text-lg mt-1 font-bold font-mono uppercase'>Youtube</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default Experience;

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';
import logo from '../assets/logo/logo-2.png';
import { ChevronRight, ChevronsUp, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/80 text-white  p-5 md:px-20 xl:px-5">
      <div className="container flex flex-col gap-6 md:gap-8 w-full max-w-[1650px] mx-auto relative">
        {/* Brand Section */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-8 h-8 md:w-14 md:h-14" />
          <p className="font-bold text-2xl">
            <span className="text-[#4B22B5]">AY</span>O
          </p>
        </div>

        {/* Quick Links + Email Signup */}
        <div className=' flex flex-col justify-between md:flex-row gap-5 w-full '>
          <div className="text-left flex flex-col gap-4 min-w-1/2 md:max-w-[45%]">
            <h3 className="text-lg font-semibold mb-3 text-white">
              Quick Links
            </h3>
            <ul className="space-y-1 text-neutral-500 text-base flex gap-4 justify-start">
              <li>
                <a href="#service" className="hover:text-[#4B22B5] transition">
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-[#4B22B5] transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#4B22B5] transition">
                  Contact
                </a>
              </li>
            </ul>

            <div className="mt-4 flex items-center gap-2 border-b border-gray-700 pb-2 w-full">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent w-full text-sm focus:outline-none py-5"
              />
              <button className="flex items-center text-nowrap bg-[#4B22B5] text-white w-fit px-5 py-2 rounded-2xl font-semibold hover:bg-[#4B22B5] transition text-sm">
                Sign Up
                <ChevronRight className="inline-block ml-2 w-5" />
              </button>
            </div>
          </div>

          {/* Address Section */}
          <div className="text-left md:pl-10 min-w-1/2 md:max-w-[45%]">
            <h3 className="text-lg font-semibold mb-3 w-full">Address</h3>
            <ul className="space-y-5 text-neutral-500 text-base">
              <li>
                <MapPin className="inline-block w-4 h-4 mr-4 text-[#4B22B5]" />
                Ibadan, Nigeria
              </li>
              <li>
                <Mail className="inline-block w-4 h-4 mr-4 text-[#4B22B5]" />
                ayonitemiadewole16@gmail.com
              </li>
              <li>
                <Phone className="inline-block w-4 h-4 mr-4 text-[#4B22B5]" />
                +234 8126143347
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 px-4 sm:px-6 md:px-12">
        <p className="text-center md:text-left">
          Copyright ©2023, <span className="text-[#4B22B5]">AYO</span> All
          Rights Reserved
        </p>

        <div className="flex gap-10 mt-3 md:mt-0">
          <a href="#" className="hover:text-[#4B22B5] transition text-lg">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-[#4B22B5] transition text-lg">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-[#4B22B5] transition text-lg">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-[#4B22B5] transition text-lg">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Scroll to Top Button
      // <button
      //   onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      //   className="fixed right-4 bottom-4 md:right-6 md:bottom-20 bg-[#4B22B5] text-white p-2 md:p-3 rounded-md hover:bg-[#4B22B5] transition z-10"
      // >
      //   <ChevronsUp size={18} />
      // </button> */}
    </footer>
  );
};

export default Footer;

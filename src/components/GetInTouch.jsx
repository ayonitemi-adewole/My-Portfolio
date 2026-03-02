import {
  CheckIcon,
  ChevronRight,
  LetterText,
  Mail,
  Phone,
  Text,
  User,
} from 'lucide-react';
import React from 'react';

const GetInTouch = () => {
  return (
    <div className="flex flex-col lg:flex-row pb-20 relative w-full p-5 md:px-20 xl:px-5 max-w-[1400px] mx-auto">
      <div className="lg:w-[40%] xl:w-[30%] lg:pr-10">
        <h2 className="text-lg text-neutral-400 font-medium">Get In Touch</h2>
        <p className="text-4xl md:text-5xl font-medium my-5">
          Let's Talk For Your Next Projects
        </p>
        <div className="my-5 space-y-6">
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center w-fit p-0.5 bg-[#4B22B5] rounded-full">
              <CheckIcon className="text-white inline-block" />
            </div>
            <p className="text-xl font-medium">3+ Years Of Experience</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center w-fit p-0.5 bg-[#4B22B5] rounded-full">
              <CheckIcon className="text-white inline-block" />
            </div>
            <p className="text-xl font-medium">Front-End Development</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center w-fit p-0.5 bg-[#4B22B5] rounded-full">
              <CheckIcon className="text-white inline-block" />
            </div>
            <p className="text-xl font-medium">Web App Development</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center w-fit p-0.5 bg-[#4B22B5] rounded-full">
              <CheckIcon className="text-white inline-block" />
            </div>
            <p className="text-xl font-medium">Mobile App Development</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5 w-full lg:w-[60%] xl:w-[70%] lg:pl-10">
        <label className="text-lg font-medium">
          Full Name
          <div className="relative mt-2 w-full">
            <input
              type="text"
              className="w-full p-3 px-5 rounded-2xl bg-neutral-800 border border-neutral-800 focus:border-white outline-none mt-2 placeholder:text-base placeholder:text-neutral-300/35"
              placeholder="Ayonitemi Adewole"
            />
            <User className="absolute right-5 top-[50%] translate-y-[-50%] text-neutral-500 text-sm" />
          </div>
        </label>
        <label className="text-lg font-medium">
          Email
          <div className="relative mt-2">
            <input
              type="text"
              className="w-full p-3 px-5 rounded-2xl bg-neutral-800 border border-neutral-800 focus:border-white outline-none mt-2 placeholder:text-base placeholder:text-neutral-300/35"
              placeholder="xyz@gmail.com"
            />
            <Mail className="absolute right-5 top-[50%] translate-y-[-50%] text-neutral-500 text-sm" />
          </div>
        </label>

        <label className="text-lg font-medium">
          Phone Number
          <div className="relative mt-2">
            <input
              type="text"
              className="w-full p-3 px-5 rounded-2xl bg-neutral-800 border border-neutral-800 focus:border-white outline-none mt-2 placeholder:text-base placeholder:text-neutral-300/35"
              placeholder="+234812345678"
            />
            <Phone className="absolute right-5 top-[50%] translate-y-[-50%] text-neutral-500 text-sm" />
          </div>
        </label>

        <label className="text-lg font-medium">
          Subject
          <div className="relative mt-2">
            <input
              type="text"
              className="w-full p-3 px-5 rounded-2xl bg-neutral-800 border border-neutral-800 focus:border-white outline-none mt-2 placeholder:text-base placeholder:text-neutral-300/35"
              placeholder="Let's' Collab!"
            />
            <LetterText className="absolute right-5 top-[50%] translate-y-[-50%] text-neutral-500 text-sm" />
          </div>
        </label>

        <label className="text-lg font-medium lg:col-span-2">
          Message
          <div className="relative mt-2">
            <textarea
              rows={5}
              type="text"
              className="w-full p-3 px-5 rounded-2xl bg-neutral-800 border border-neutral-800 focus:border-white outline-none mt-2 placeholder:text-base placeholder:text-neutral-300/35"
              placeholder="I'd like to build a project with you..."
            />
          </div>
        </label>

        <button className="bg-[#4B22B5] text-lg px-4 py-2 flex items-center rounded-xl w-fit">
          Send A Message
          <ChevronRight className="inline-block ml-2" />
        </button>
      </div>
    </div>
  );
};

export default GetInTouch;

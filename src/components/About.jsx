import React, { useState } from 'react'
import { motion } from "motion/react"

const About = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.29" className='bg-[#CDEA68] text-black rounded-3xl overflow-hidden'>
      <div className='py-[100px] pl-[60px]'>
        <h1 className='text-[55px] leading-[60px] pr-[200px] tracking-tight'>
          Ochi is a strategic presentation agency for forward-thinking businesses that need to <u>raise funds</u>, <u>sell products</u>, <u>explain complex ideas</u>, and <u>hire great people</u>.
        </h1>
      </div>

      <div className='pl-[60px] pr-[20px] pt-[30px] pb-[130px] grid grid-cols-3 gap-[30px] border-t border-zinc-700 font-["NeueMontreal"]'>
        <div className='col-span-1'>
          <p className='text-[17px]'>What you can expect:</p>
        </div>
        <div className='col-span-1 pr-20 ml-18'>
          <p className='text-[17px] leading-[26px]'>
            We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.
          </p>
          <p className='text-[17px] leading-[28px] mt-6'>
            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className='col-span-1 flex flex-col gap-2 ml-40 mt-35 leading-[18px] tracking-wider'>
          <p className='text-[17px] mb-5'>S:</p>
          <a href='#' className='underline'>Instagram</a>
          <a href='#' className='underline'>Behance</a>
          <a href='#' className='underline'>Facebook</a>
          <a href='#' className='underline'>Linkedin</a>
        </div>
      </div>

      <div className='pt-[20px] pb-[250px] px-[60px] border-t border-zinc-700 flex gap-5'>
        <div className='w-1/2'>
          <h1 className='text-[55px] leading-[60px] tracking-tight'>
            Our approach:
          </h1>
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='px-6 py-4 mt-5 uppercase bg-zinc-900 rounded-full text-white flex items-center gap-10 font-["NeueMontreal"] group'
          >
            Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full flex justify-center items-center transition-all duration-300 ease-[cubic-bezier(.215,.61,.355,1)] group-hover:scale-[5.75]'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#18181b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hidden w-2/3 h-2/3 group-hover:block transition-all duration-300 ease-[cubic-bezier(.215,.61,.355,1)]"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </div>
          </button>
        </div>

        <motion.div
          className='w-1/2 h-[65vh] rounded-2xl overflow-hidden'
          animate={{ scale: isHovered ? 0.96 : 1 }}
          transition={{ duration: 2, ease: [0.215, 0.61, 0.355, 1] }}
        >
          <motion.img
            className="w-full h-full object-cover"
            src="/Imgs/ochi-image02.webp"
            alt="Ochi design team"
            animate={{ scale: isHovered ? 1.10 : 1 }}
            transition={{ duration: 2, ease: [0.215, 0.61, 0.355, 1] }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About
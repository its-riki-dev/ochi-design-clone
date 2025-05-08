import React, { useState } from 'react';
import { motion, useAnimation } from "motion/react"
import { GoDotFill } from "react-icons/go"

const Featured = () => {
  const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
  const [hovered, setHovered] = useState([false, false, false, false]);

  const handleHover = (index) => {
    cards[index].start({ y: "0" })
    const updated = [...hovered]
    updated[index] = true
    setHovered(updated)
  }

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" })
    const updated = [...hovered]
    updated[index] = false
    setHovered(updated)
  }

  const featuredData = [
    {
      title: "Salience Labs",
      tags: ["Brand Identity", "Pitch deck"],
      image: "/Imgs/ochi-work01.png"
    },
    {
      title: "Cardboard Spaceship",
      tags: ["Brand Template", "sales deck", "social media template"],
      image: "/Imgs/ochi-work02.png"
    },
    {
      title: "Trawa",
      tags: ["Brand Identity", "Design Research", "Investor Desk"],
      image: "/Imgs/ochi-work03.png"
    },
    {
      title: "Vise",
      tags: ["Agency", "Company Presentation"],
      image: "/Imgs/ochi-work04.png"
    }
  ]

  return (
    <div data-scroll data-scroll-speed="-0.2" className='w-full py-25 rounded-tl-3xl rounded-tr-3xl text-black font-["NeueMontreal"] bg-zinc-100'>
      <div className='w-full px-[60px] border-b-1 border-zinc-700 pb-7'>
        <h1 className='text-[55px]'>Featured projects</h1>
      </div>

      <div className='px-[60px]'>
        <div className='cards w-full'>
          {[0, 2].map((row) => (
            <div className='flex gap-4 mt-10' key={row}>
              {[row, row + 1].map((index) => (
                <div key={index}>
                  <h2 className='text-md mb-4 flex gap-2 uppercase'>
                    <GoDotFill className='mt-1' />
                    {featuredData[index].title}
                  </h2>

                  <motion.div
                    onHoverStart={() => handleHover(index)}
                    onHoverEnd={() => handleHoverEnd(index)}
                    className='cardcontainer relative w-full h-[38vw]'
                  >
                    <h1 className={`absolute flex ${index % 2 === 0 ? 'left-full -translate-x-1/2' : 'right-full translate-x-1/2'} top-1/2 -translate-y-1/2 whitespace-nowrap z-[9] uppercase text-[9vw] text-[#CDEA68] overflow-hidden leading-none tracking-[-0.10vw] font-["FoundersGrotesk"]`}>
                      {featuredData[index].title.split('').map((item, i) => (
                        <motion.span
                          initial={{ y: "100%" }}
                          animate={cards[index]}
                          transition={{ ease: [0.22, 1, 0.36, 1], delay: i * 0.02 }}
                          className='inline-block'
                          key={i}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </h1>

                    <motion.div
                      className='card w-full h-full rounded-xl overflow-hidden'
                      animate={{ scale: hovered[index] ? 0.96 : 1 }}
                      transition={{ duration: 2, ease: [0.215, 0.61, 0.355, 1] }}
                    >
                      <motion.img
                        className="w-full h-full object-cover"
                        src={featuredData[index].image}
                        alt="Featured Work"
                        animate={{ scale: hovered[index] ? 1.10 : 1 }}
                        transition={{ duration: 2, ease: [0.215, 0.61, 0.355, 1] }}
                      />
                    </motion.div>
                  </motion.div>

                  <div className='flex gap-4 mt-5'>
                    {featuredData[index].tags.map((tag, i) => (
                      <div key={i} className='px-4 py-1 uppercase font-light border-1 rounded-full text-md'>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <button
          onMouseEnter={() => setHovered([true, ...hovered.slice(1)])}
          onMouseLeave={() => setHovered([false, ...hovered.slice(1)])}
          className='px-6 py-4 mt-35 mx-auto uppercase bg-zinc-900 rounded-full text-white flex items-center gap-10 font-["NeueMontreal"] group'
        >
          View all case studies
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

      <div className='w-full h-[40vw] px-[60px] bg-zinc-100 flex items-center gap-4 mt-20'>
        <div className='cardcontainer w-1/2 h-[54vh]'>
          <div className='card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004D43]'>
            <img className='w-37' src="/Imgs/ochi-logo-green.svg" alt="#" />
            <button className='absolute px-3 py-1 border-2 rounded-3xl left-7 bottom-10 font-["NeueMontreal"] border-[#669C56] text-[#CDEA68]'>©2019-2022</button>
          </div>
        </div>

        <div className='cardcontainer flex gap-5 w-1/2 h-[54vh]'>
          <div className='card relative rounded-xl w-1/2 h-full flex items-center justify-center bg-[#212121]'>
            <img className='w-37' src="/Imgs/clutch-logo.svg" alt="" />
            <button className='absolute px-3 py-1 border-2 rounded-3xl left-7 tracking-tight bottom-10 uppercase border-zinc-400 text-zinc-200 font-["NeueMontreal"]'>
              Rating 5.0 on CLUTCH
            </button>
          </div>

          <div className='card relative rounded-xl w-1/2 h-full flex items-center justify-center bg-[#212121]'>
            <img className='w-25' src="/Imgs/stump.png" alt="" />
            <button className='absolute px-3 py-1 border-2 rounded-3xl left-7 tracking-tight bottom-10 uppercase border-zinc-400 text-zinc-200 font-["NeueMontreal"]'>
              Business Bootcamp Alumni
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
import React from 'react'
import { motion } from "motion/react"

const Marquee = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full h-[45vw] py-25 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-500 flex overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", duration: 10, repeat: Infinity }} className='text-[28vw] leading-[0.85] tracking-[-0.40vw] font-["FoundersGrotesk"] uppercase pb-10 pr-12'>We are ochi</motion.h1>
        <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", duration: 10, repeat: Infinity }} className='text-[28vw] leading-[.85] tracking-[-0.40vw] font-["FoundersGrotesk"] uppercase pr-12'>We are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
import { motion } from 'motion/react'
import React from 'react'
import { GoArrowUpRight } from "react-icons/go"

const LandingPage = () => {
    return (
        <div data-scroll data-scroll-speed="-0.3" className='w-full h-screen pt-[1vw]'>
            <div className="textstructure mt-30 px-13">
                {["We Create", "Eye-Opening", "Presentations"].map((items, index) => {
                    return (
                        <div key={index} className="masker">
                            <div className='w-fit flex item-end overflow-hidden'>
                                {index === 1 && (
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "8.5vw" }}
                                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 0.2 }}
                                        className='relative mt-[0.9vw] mr-[1vw] w-[8.5vw] h-[6vw] rounded-xl overflow-hidden'
                                    >
                                        <img className="w-full h-full object-cover" src="/Imgs/ochi-image01.webp" alt="" />
                                    </motion.div>
                                )}
                                <h1 className=' uppercase text-[9vw] leading-[.76] h-full font-["FoundersGrotesk"] text-black'>
                                    {items}
                                </h1>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='border-t-[1px] border-zinc-700 mt-40 flex justify-between items-center px-13 py-3 text-black font-["NeueMontreal"]'>
                {["For public and private companies", "From the first pitch to IPO"].map((items, index) => (
                    <p key={index} className='text-[1.2vw] font-light leading-none'>{items}</p>
                ))}

                <div className='start flex items-center gap-2 group'>
                    <div className='cursor-pointer px-4 py-1 uppercase font-light border-1 rounded-full text-md group-hover:bg-black group-hover:text-white transition-all duration-500 ease-in-out'>
                        Start the project
                    </div>

                    <div className='cursor-pointer w-9 h-9 flex items-center justify-center border-1 rounded-full group-hover:bg-black group-hover:text-white transition-all duration-500 ease-in-out'>
                        <GoArrowUpRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage

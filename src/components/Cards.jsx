import React from 'react'

const Cards = () => {
    return (
        <div data-scroll data-scroll-speed="0.1" className='w-full h-[40vw] px-[60px] bg-zinc-100 flex items-center gap-4'>
            <div className='cardcontainer w-1/2 h-[54vh] mb-50'>
                <div className='card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004D43]'>
                    <img className='w-37' src="/Imgs/ochi-logo-green.svg" alt="#" />

                    <button className='absolute px-3 py-1 border-2 rounded-3xl left-7 bottom-10 font-["NeueMontreal"] border-[#669C56] text-[#CDEA68]'>©2019-2022</button>
                </div>
            </div>

            <div className='cardcontainer flex gap-5 w-1/2 h-[54vh] mb-50'>
                <div className='card relative rounded-xl w-1/2 h-full flex items-center justify-center bg-[#212121]'>
                    <img className='w-37' src="/Imgs/clutch-logo.svg" alt="" />

                    <button className='absolute px-3 py-1 border-2 rounded-3xl left-7 tracking-tight bottom-10 uppercase border-zinc-400 text-zinc-200 font-["NeueMontreal"]'>Rating 5.0 on CLUTCH</button>
                </div>

                <div className='card relative rounded-xl w-1/2 h-full flex items-center justify-center bg-[#212121]'>
                    <img className='w-25' src="/Imgs/stump.png" alt="" />

                    <button className='absolute px-3 py-1 border-2 rounded-3xl left-7 tracking-tight bottom-10 uppercase border-zinc-400 text-zinc-200 font-["NeueMontreal"]'>Business Bootcamp Alumni</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
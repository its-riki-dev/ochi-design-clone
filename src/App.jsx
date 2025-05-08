import React, { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
/* import Cards from './components/Cards' */
import Footer from './components/Footer'

const App = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    })

    return () => {
      scroll.destroy()
    };
  }, [])

  return (
    <div data-scroll-container ref={scrollRef} className='w-full min-h-screen bg-zinc-100 text-white'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      {/* <Cards /> */}
      <Footer />
    </div>
  )
}

export default App

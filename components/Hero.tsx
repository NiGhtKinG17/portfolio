import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles'
import {motion} from "framer-motion"

function Hero() {
  const[text, count] = useTypewriter({
    words:[
      "Hi!👋 I am Hritik Shelar",
      "I am an IT Engineer ( ◑‿◑)",
      "I am currently looking for a job in IT Sector (^‿^)"
    ],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} 
    className="h-screen flex flex-col space-y-1 items-center justify-center text-center overflow-hidden">
      <h3 className="uppercase mb-20 tracking-[20px] text-[#1363DF] text-2xl">Introduction</h3>
      <BackgroundCircles />
      <img src="/hritik.jpg" className="relative rounded-full h-[200px] w-[200px] mx-auto object-cover border-solid border-[2px] border-[#47B5FF]" alt="hritik"/>
      <div className="z-20">
      <h2 className="text-sm uppercase text-[#47B5FF] pb-2 tracking-[15px]">IT ENGINEER</h2>
      <h1 className="text-4xl mt-4 lg:text-5xl font-semibold px-10">
      <span>{text}</span>
      <Cursor cursorColor="#DFF6FF" />
      </h1>
      </div>
    </motion.div>
  )
}

export default Hero
import React from 'react'
import {motion} from "framer-motion"
import Link from 'next/link'
import {Cursor, useTypewriter} from "react-simple-typewriter"

type Props = {}

function Landing({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-col  max-w-7xl px-10 justify-center mx-auto items-center">
        <h1 className="font-bold text-5xl tracking-[20px]">Welcome!</h1>
        <motion.img initial={{x:800, y:-200}} animate={{x:0, y:0}} transition={{duration:3}} src="/plane1.png" alt="" className="h-[300px] w-[300px]" />
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:4}} className="font-semibold text-3xl">
          You have successfully landed on Hritik's Portfolio Website!
        </motion.p>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:4}} className="text-lg mt-4 text-[#1363DF]">
          Scroll down or click one of the following buttons to teleport directly to that section...
        </motion.p>
        <br/>
        <div>
        <Link href="#intro">
        <button className="heroButton">Introduction</button>
        </Link>
        <Link href="#about">
        <button className="heroButton">About</button>
        </Link>
        <Link href="#education">
        <button className="heroButton">Education</button>
        </Link>
        </div>
        <div className="mt-4">
        <Link href="#skills">
        <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
        <button className="heroButton">Projects</button>
        </Link>
        <Link href="#certificates">
        <button className="heroButton">Certificates</button>
        </Link>
      </div>
    </div>
  )
}

export default Landing
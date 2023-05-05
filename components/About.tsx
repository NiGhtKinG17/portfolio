import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} 
    className="h-screen flex flex-col relative text-center md:text-left md:flex-row  max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#1363DF] text-2xl">About</h3>
        <div className="space-y-10 px-0 md:px-10 text-center w-[1000px]">
            <motion.div initial={{y:-100, opacity:0, scale:0.5}} whileInView={{y:0, opacity:1, scale:1}} transition={{duration:1.5}}>
            <h4 className="text-4xl font-semibold text-[#47B5FF]">Here's something about me :)</h4>
            </motion.div>
            <div >
                <motion.p initial={{x:-500, opacity:0, scale:0.5}} whileInView={{x:0, opacity:1, scale:1}} transition={{duration:1.5}} className="text-lg">
                Enthusiastic IT student currently seeking for training by industrial experts and be useful to the 
                organization and become a part of it.
                </motion.p>
                <br/>
                <motion.p initial={{x:500, opacity:0, scale:0.5}} whileInView={{x:0, opacity:1, scale:1}} transition={{duration:1.5}} className="text-lg">
                Hi there, I'm <span className="text-[#47B5FF]">Hritik Shelar</span>, an engineering student currently pursuing a bachelor's degree in Information Technology.
                With a strong foundation in programming languages like C++, Python, Javascript, Solidity, etc. I'm always excited to explore new technologies 
                and apply them to real-world projects.
                </motion.p>
                <br/>
                <motion.p initial={{y:100, opacity:0, scale:0.5}} whileInView={{y:0, opacity:1, scale:1}} transition={{duration:1.5}} className="text-lg">
                I have many hobbies. But most of my free time is spent in watching animes and web series.
                    My other hobbies include playing online fps games, cycling, cooking, listening to music, traveling, etc.
                </motion.p>
            </div>
        </div>
    </motion.div>
  )
}

export default About
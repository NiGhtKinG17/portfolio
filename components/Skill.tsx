import React from 'react'
import {motion} from "framer-motion"

type Props = {
  directionLeft? : boolean
}

function Skill({directionLeft}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img initial={{x:directionLeft?-200:200, opacity:0}}
      transition={{duration:1}}
      whileInView={{x:0, opacity:1}}
      src="/school/grad.png" alt=""
      className="rounded-full border border-[#47B5FF] object-cover h-24 w-24 filter group-hover:grayscale
      transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 easy-in-out group-hover:bg-[#DFF6FF]
      h-24 w-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-[#06283D] opacity-100">React</p>
        </div>
      </div>
    </div>
  )
}

export default Skill
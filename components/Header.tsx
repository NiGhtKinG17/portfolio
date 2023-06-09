import React from 'react'
import {SocialIcon} from "react-social-icons"
import {motion} from "framer-motion"
import Link from 'next/link'

type Props = {}

function Header({}: Props) {
  return (
    <div className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div initial={{x:-500, opacity:0, scale:0.5}} animate={{x:0, opacity:1, scale:1}} transition={{duration:1.5}} className="flex flex-row items-center">
            <SocialIcon url="https://www.linkedin.com/in/hritik-shelar-b239b51a2" fgColor="#47B5FF" bgColor="transparent"/>
            <SocialIcon url="https://github.com/NiGhtKinG17" fgColor="#47B5FF" bgColor="transparent"/>
            <SocialIcon url="https://twitter.com/HritikShelar7" fgColor="#47B5FF" bgColor="transparent"/>
            <SocialIcon url="https://www.instagram.com/_hritik_17_" fgColor="#47B5FF" bgColor="transparent"/>
            <SocialIcon url="https://www.facebook.com/profile.php?id=100076304222303" fgColor="#47B5FF" bgColor="transparent"/>
        </motion.div>
        <Link href="#contact">
        <motion.div initial={{x:500, opacity:0, scale:0.5}} animate={{x:0, opacity:1, scale:1}} transition={{duration:1.5}} className="flex flex-row items-center text-gray-300 cursor-pointer">
          <SocialIcon className="cursor-pointer" bgColor="transparent" fgColor="#47B5FF" network="email"/>
          <p className="uppercase hidden md:inline-flex text-sm text-[#47B5FF]">Contact Me</p>
        </motion.div>
        </Link>
    </div>
  )
}

export default Header
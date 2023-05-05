import React from 'react'
import School from './School'
import {motion} from "framer-motion"

type Props = {}

function Education({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    className="h-screen flex relative overflow-hidden flex-col test-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-[#1363DF]">Education History</h3>
      <div className="w-full flex space-x-5 overflow-x-scroll scrollbar-thin scrollbar-track-[#061f3d] scrollbar-thumb-[#47B5FF] p-10 snap-x snap-mandatory">
        <School title="Graduation" stream="B.E.(Information Technology)" school="Vidyalankar Institute of Technology, Mumbai"
        year="2019-present" grade="Avg. Grade: 9.23 CGPA" pic="/school/school1.jpeg" />
        <School title="Higher Secondary Education" stream="Science(PCM)" school="Sanjay Ghodawat Junior College, Kolhapur"
        year="2018-2019" grade="Percentage: 83.23%" pic="/school/school2.jpg"/>
        <School title="Secondary Education" stream="" school="S.P.M's English Medium School, Chiplun"
        year="2016-2017" grade="Percentage: 92.20%" pic="/school/school3.jpg"/>
      </div>
    </motion.div>
  )
}

export default Education
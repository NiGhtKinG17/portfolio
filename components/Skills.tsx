import React from 'react'
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center max-w-[2000px] justify-center mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-[#1363DF]">Skills</h3>
        <h3 className="absolute top-36 uppercase tracking-[3px] text-[#1363DF] text-sm">Hover over to see the name of the skill</h3>
        <div className="grid grid-cols-4 gap-5">
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
        </div>
    </div>
  )
}

export default Skills
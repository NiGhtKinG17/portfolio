import React from 'react'
import Project from './Project'

type Props = {}

function Projects({}: Props) {
  return (
    <div className="h-screen relative items-center justify-evenly text-center flex flex-col md:flex-row overflow-hidden
    max-w-full mx-auto z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-[#1363DF]">Projects</h3>
        <div className="relative w-full flex overflow-x-scroll scrollbar scrollbar-track-[#061f3d] scrollbar-thumb-[#47B5FF] overflow-y-hidden snap-x snap-mandatory z-20">
          <Project pic="/projects/Proj1.png" name="Blockchain based Crowdfunding Application"
          description="This is a crowdfunding application which uses blockchain technology. Every transaction 
          is recorded on blockchain and permanently stored. It enables transperancy and trustlessness among 
          the people." link="https://github.com/NiGhtKinG17/fund-blockchain.git" />
        </div>
    </div>
  )
}

export default Projects
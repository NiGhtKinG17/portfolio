import React from 'react'
import Certificate from './Certificate'

type Props = {}

function Certificates({}: Props) {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col test-lft 
    md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-[#1363DF]">Achievements</h3>
        <div className="absolute top-28 w-[800px] flex space-x-5 overflow-x-scroll scrollbar-thin scrollbar-track-[#061f3d] scrollbar-thumb-[#47B5FF] p-10 snap-x snap-mandatory">
        <Certificate pic="/certificates/Cert1.jpg"/>
        <Certificate pic="/certificates/Cert2.jpg"/>
        <Certificate pic="/certificates/Cert3.jpg"/>
        <Certificate pic="/certificates/Cert4.jpg"/>
        <Certificate pic="/certificates/Cert5.jpg"/>
        <Certificate pic="/certificates/Cert6.jpg"/>
        </div>
    </div>
  )
}

export default Certificates
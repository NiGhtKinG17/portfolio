import React from 'react'

type Props = {
    pic: string,
    name: string,
    description: string,
    link: string
}

function Project({pic, name, description, link}: Props) {
  return (
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
              p-20 md:p-44 h-screen">
            <img src={pic} className="h-[100%] w-[100%] xl:h-[520px] xl:w-[700px]" alt=""/>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">{name}</h4>
                <p className="text-lg text-center">{description}</p>
                <a href={link} className="text-sm text-[blue] underline text-center">{link}</a>
            </div>
        </div>
  )
}

export default Project
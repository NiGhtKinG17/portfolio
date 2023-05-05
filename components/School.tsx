import React from 'react'

type Props = {
  pic: string,
  title: string,
  stream: string,
  school: string,
  year: string,
  grade: string
}

function School({pic, title, stream, school, year, grade}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full snap-center
     p-11 overflow-hidden">
        <img className="h-32 w-32 xl:w-[400px] xl:h-[200px] object-cover object-center" src={pic} />
        <div className="px-0 md:px-10 text-center space-y-3 tracking-wider">
          <h4 className="font-bold text-3xl text-[#1363DF]">{title}</h4>
          <p className="font-semibold text-2xl text-[#47B5FF]">{stream}</p>
          <p className="font-semibold text-xl">{school}</p>
          <p className="font-light">{year}</p>
          <p className="font-extralight">{grade}</p>
        </div>
    </article>
  )
}

export default School
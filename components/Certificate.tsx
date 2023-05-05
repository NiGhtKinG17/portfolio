import React from 'react'

type Props = {
  pic: string
}

function Certificate({pic}: Props) {
  return (
    <article className="flex flex-col items-center flex-shrink-0 w-full snap-center
      overflow-hidden">
        <img className="h-[100%] w-[100%] xl:h-[520px] xl:w-[700px] object-cover object-center" src={pic} />
    </article>
  )
}

export default Certificate


import React from 'react'

export const Section = ({title,children}) => {
  return (
    <main className=" text-gray-900 max-w-[700px] mt-0 section py-5 md:py-36 scroll-m-20 w-full mx-auto lg:max-w-3xl ">
        {title && <h2 className="text-4xl font-bold leading-normal">{title}</h2>}
        {children}
    </main>
  )
}

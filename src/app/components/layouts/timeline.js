import React from 'react'

export const TimeLine = ({children}) => {
  return (
    <div className="relative mx-10 md:mx-12 pb-4 grid before:absolute before:left-[-30px] before:block before:h-full before:border-l before:border-gray-400 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
    {children}
    </div>
  )
}

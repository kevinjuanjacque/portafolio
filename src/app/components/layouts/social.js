import React from 'react'

export const Social = ({children,...props}) => {
  return (
    <a
    {...props}
    target="_blank"
    rel="noopener noreferrer" 
    className=' rounded-md border text-gray-600 border-gray-400 flex items-center justify-center px-2 py-1 gap-x-2 hover:bg-white/10 hover:scale-105 transition-all'>
        {children}
    </a>
  )
}

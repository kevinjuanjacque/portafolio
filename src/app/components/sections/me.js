import React from 'react'
import json from '../../lib/cv.json'

import { Section } from '../layouts/section'
import { ProfileCheck } from '../icons/ProfileCheck'

export const Me = () => {
  return (
    <section className=' w-full mx-auto container lg:max-w-4xl md:max-w-2xl'>
        
        <h2 className='text-2xl flex gap-2 items-center text-wrap text-gray-900 font-bold pb-4'>
        <ProfileCheck />Sobre Mi
        </h2>
        <blockquote> <p className=" text-gray-600">
            {json.basics.summary}
        </p></blockquote>
    </section>
  )
}

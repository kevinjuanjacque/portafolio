


import React from 'react'
import json from '../../lib/cv.json'
import { LinkedIn } from '../icons/LinkedIn'
import { Social } from '../layouts/social'
import { Mail } from '../icons/Mail'
import { Phone } from '../icons/Phone'
import { GitHub } from '../icons/GitHub'
import Addres from '../icons/Addres'

export const Hero = () => {
  return (
    <section className='scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10'>
       <div className='flex gap-5'>
       <figure className=' flex flex-col justify-center items-center'>
            <img className="aspect-square object-cover w-36 rounded-full mb-3" src={json.basics.picture} alt="Profile Picture" />
        </figure>
        <div>
        <h1 className='text-4xl md:text-5xl pb-4  flex flex-cols  font-bold'>
          {json.basics.presentation}

          
        </h1>
        <h2 className='text-xl md:text-2xl text-wrap text-gray-600 pb-4'>
          {json.basics.label}
        </h2>
        <p className='text-gray-500 flex gap-2 text-sm md:text-md  justify-start items-center'><Addres/>{json.basics.location.address}</p>
        </div>
       </div>
       <div className='h-[1px] w-full bg-gray-400  my-1 md:my-5 px-2' />
        <nav className='flex gap-2 flex-wrap  justify-center'>
          <Social
            href={`${json.basics.social.linkedin.url}`}
            title={`LinkedIn`} 
          >
            <LinkedIn />LinkedIn
          </Social>
          <Social
            title="Github"
            href={json.basics.social.github.url}
          >
            <GitHub />Github
          </Social>
          <Social
            title={`Enviar un correo electrónico a ${json.basics.name} al correo ${json.basics.email}`}
            href={`mailto:${json.basics.email}`}
          >
            <Mail />Email<span className='md:hidden'>{json.basics.email}</span>
          </Social>
          <Social
            title={`Llamar a ${json.basics.name} al numero ${json.basics.phone}`}
            href={`tel:${json.basics.phone}`}
          >
            <Phone />Celular<span className='md:hidden'>{json.basics.phone}</span>
          </Social>

        </nav>
    </section>
  )
}

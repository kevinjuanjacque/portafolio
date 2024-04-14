

import React from 'react'
import { Code } from '../icons/Code'

import json from '../../lib/cv.json';


const projects = json.projects;

export const Projects = () => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl flex gap-2 items-center text-wrap text-gray-900 font-bold pb-4">
        <Code />
        Proyectos
      </h2>
      <ul className='grid grid-cols-1 md:grid-cols-2 auto-cols-max rounded-md'>
        {projects.map((project, index) => (
          <li key={`${project.name}-${index}`} className='border border-gray-600 rounded-md p-4 flex flex-col justify-between items-baseline min-h-52'>
          <header className='pb-4'>
          <a href={project.url} target="_blank"><h3 className='text-lg font-semibold text-gray-900 cursor-pointer hover:underline'>{project.name}</h3></a>
          <p className='text-gray-700 text-md'>{project.description}</p>
          </header>
          <footer className='flex gap-2 flex-wrap'>
            {project.highlights.map((highlight,i) => (
              <span key={`${highlight}-${i}`} className='text-gray-600 rounded-lg text-xs px-2 py-1 bg-gray-200'>{highlight}</span>

            ))}
            </footer>
        </li>
        ))}
      </ul>
      </section>
  )
}

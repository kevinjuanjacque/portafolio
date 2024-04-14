import React from 'react'
import { Skill } from '../icons/Skill'
import json from '../../lib/cv.json';

const skills = json.skills;

export const Skills = () => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl flex gap-2 items-center text-wrap text-gray-900 font-bold pb-4">
        <Skill />
        Habilidades
      </h2>

        <ul className='flex flex-wrap gap-2 w-full'>
            {skills.map((skill, index) => (
            <li key={`${skill.name}-${index}`} className="bg-gray-200 text-gray-800 rounded-md px-2 py-1 text-sm">{skill.name}</li>

            ))}
        </ul>
      </section>
  )
}

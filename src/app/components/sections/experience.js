import React from 'react';
import { TimeLine } from '../layouts/timeline';

import json from '../../lib/cv.json';
import { Nest } from '../icons/Nest';
import { Nx } from '../icons/Nx';
import { Kotlin } from '../icons/Kotlin';
import { Node } from '../icons/Node';
import GitLab from '../icons/Gitlab';
import NextJS  from '../icons/NextJS';
import { Briefcase } from '../icons/Briefcase';
import Flutter from '../icons/Flutter';
import AmazonWebServices from '../icons/Amazon';
import Google from '../icons/GCP';
import ReactJs from '../icons/ReactJs';
import MongoDB from '../icons/MongoDb';

const works = json.work;

const dicionary = {
    nestjs:{
        svg: <Nest width="15"  />,
        name: 'NestJS',
        bg: 'border border-[#111]',
        color: 'text-gray-900'
    },
    nx:{
        svg: <Nx width="15"  />,
        name: 'Nx',
        bg: 'border border-[#111]',
        color: 'text-gray-900'
    },
    kotlin:{
        svg: <Kotlin width="13" />,
        name: 'Kotlin',
        bg: 'border border-[#111]',
        color: 'text-gray-900'
    },
    node:{
        svg: <Node width="15" />,
        name: 'NodeJs',
        bg: 'border border-[#111]',
        color: 'text-gray-900'
    }
    ,
    gitlab:{
        svg: <GitLab width="15" />,
        name: 'GitLab',
        bg: 'border border-[#111]',
        color: 'text-gray-900'
    },
    next:{
        svg: <NextJS width="15" />,
        name: 'NextJS',
        bg: 'border border-[#111]',
        color: 'text-gray-900'
    },
    flutter:{
        svg: <Flutter width="15" />,
        name: 'Flutter',
        bg: 'border border-[#111]',
        color: 'text-gray-900'
    }
    ,
    aws:{
        svg: <AmazonWebServices width="15" />,
        name: 'AWS',
        bg: 'border border-[#111]',
        color: 'text-gray-900'
    }
    ,
    gcp:{
        svg: <Google width="15" />,
        name: 'GCP',
        bg: 'border border-[#111]',
        color: 'text-gray-900'
    }
    ,
    react:{
        svg: <ReactJs width="15" />,
        name: 'React',
        bg: 'border border-[#111]',
        color: 'text-gray-900'
    }
    ,
    mongodb:{
        svg: <MongoDB width="15" />,
        name: 'MongoDB',
        bg: 'border border-[#111]',
        color: 'text-gray-900'
    }
}

export const Experience = () => {
  return (
    <section className="mt-16">
      <h2 className='text-2xl flex gap-2 items-center text-wrap text-gray-900 font-bold pb-4'>
        <Briefcase />Experience
        </h2>
    <ol className="relative">
      <li className="">
        <TimeLine>
          {works.map((work,i) => (
            <React.Fragment key={`${work.company}-${i}`}>
              <div className="relative pb-5 md:col-span-2">
                <div className="sticky top-0">
                  <span className="text-gray-900 -left-[42px] absolute rounded-full text-5xl">
                    •
                  </span>
                  <h3 className="text-xl font-bold text-gary-600">
                    {work.position}
                  </h3>
                  <h4 className="font-semibold text-xl text-gray-600 ">
                    {work.company}
                  </h4>
                  <time className="text-sm text-gray-600 ">{work.startDate} - {work.endDate}</time>
                  <ul className='flex gap-2 flex-wrap mt-5'>
                    {work.highlights.map((highlight,i) => (
                      <li key={`${highlight}-${i}`} className={`rounded-md justify-center items-center py-1 px-3 flex gap-2 text-xs ${dicionary[highlight].bg} ${dicionary[highlight].color}`}>{dicionary[highlight].svg} <span>{dicionary[highlight].name}</span></li>
                      
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative flex flex-col gap-2 pb-4 text-gray-600 md:col-span-3">
                {work.summary && (
                  <p className="text-gray-600">{work.summary}</p>
                )}
              </div>
            </React.Fragment>
          ))}
        </TimeLine>
      </li>
    </ol>
    </section>
  );
};

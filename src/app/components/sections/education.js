import React from 'react';

import { School } from '../icons/School';
import json from '../../lib/cv.json';

const educations = json.education;

export const Education = () => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl flex gap-2 items-center text-wrap text-gray-900 font-bold pb-4">
        <School />
        Educación & Certificaciones
      </h2>

      <ul>
        {educations.map((education, index) => (
          <li
            key={`${education.area}-${index}`}
            className="flex  justify-between p-0 m-0"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {education.area}
              </h3>
              <p className="text-gray-700 text-md">{education.institution}</p>
            </div>
            <span className="text-gray-500">
              {education.startDate} - {education.endDate}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

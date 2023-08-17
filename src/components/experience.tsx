'use client'

import { Fragment } from 'react';
import { Tab } from '@headlessui/react'

const experiences = [
  {
    name: `Web Dev Intern`,
    title: `Full Stack Developer Intern`,
    company: `Think Round Inc.`,
    dates: `June 2023 - Present`,
    description: [
        `Collaborate with the UX-UI Prototypers, 3D Modelers, and Unity Developers to develop and maintain the web application and database for The Center project`,
        `Develop and maintain the back-end and front-end of the web application `,
        `Ensure that the web application is optimized for performance and scalability`,
    ],
  },
  {
    name: `Mock Trial TA`,
    title: `Mock Trial Workshop Teaching Assistant`,
    company: `UCSC`,
    dates: `March 2023 - Present`,
    description: [
      `Assisting with course presentations and leading interactive activities`,
      `Providing constructive feedback on case analyses, witness examinations, and courtroom statements`
    ],
  },
  {
    name: `Lead Peer Advisor`,
    title: `Lead Peer Advisor & Editor-in-Chief`,
    company: `UCSC`,
    dates: `September 2022 - Present`,
    description: [
      `Leading onboarding for new peer advisors`,
      `Assisting with academic concerns of UCSC students`,
      `Managing, writing, and designing an informational bi-weekly Newsletter sent to UCSC students`
    ],
  },
  {
    name: `Research Intern`,
    title: `Research Intern`,
    company: `CAVEAT`,
    dates: `March 2021 - June 2021`,
    description: [
      `Conducted research and presented a proposed project to study the proliferation of hate speech within social media`,
      `Collaborated with fellow interns to redesign CAVEAT's logo and website`,
    ],
  },
];

export default function Experience() {
  return (
    <div className="py-3 sm:py-12 grid place-items-center">
      <div className="grid sm:grid-cols-7 sm:grid-rows-3 max-w-2xl text-base font-normal leading-6 text-amber-950">
        <Tab.Group vertical>
          <Tab.List className="sm:col-span-2 sm:row-span-3 flex overflow-x-auto sm:overflow-hidden px-2 sm:pr-0 pb-2 sm:pb-0">
            <div className="flex sm:flex-col sm:gap-7">
              {experiences.map((experience) => (
              //   <Tab key="experience.name" className="text-left">{experience.name}</Tab>
                <Tab as={Fragment} key={experience.name}> 
                  {({ selected }) => (
                    <span className={`${selected ? 'bg-pastel-green/50' : 'bg-none'}
                      outline-amber-900/50 rounded-3xl px-4 py-2 w-max sm:w-auto`
                    }>
                      <button>
                        {experience.name}
                      </button>
                    </span>
                  )}
                </Tab>
              ))} 
            </div>
          </Tab.List>
          <Tab.Panels className="sm:col-span-5 sm:row-span-3 bg-pastel-green/50 rounded-3xl h-fit min-h-custom sm:h-60 py-3 px-5 mx-2 sm:ml-0">
            {experiences.map((experience) => (
              <Tab.Panel key={experience.company}>
                <span className="pb-2">{experience.title}</span>
                <span className="text-amber-900/70 pb-2"> at {experience.company}</span>
                <div className="text-sm pb-2">{experience.dates}</div>
                <ul className="text-sm list-disc px-4">
                    {experience.description.map((item, index) => (
                        <li key={index} className="p-1">{item}</li>
                    ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

      </div>
    </div>
  )
}

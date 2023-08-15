'use client'

import { Tab } from '@headlessui/react'

const experiences = [
  {
    name: `Mock Trial TA`,
    title: `Mock Trial Workshop Teaching Assistant`,
    company: `UC Santa Cruz`,
    description: [
      `Assisting with course presentations and leading interactive activities`,
      `Providing constructive feedback on case analyses, witness examinations, and courtroom statements`
    ],
  },
  {
    name: `Lead Peer Advisor`,
    title: `Lead Peer Advisor & Editor-in-Chief`,
    company: `UC Santa Cruz`,
    description: [
      `Leading onboarding for new peer advisors`,
      `Assisting with academic concerns of UCSC students`,
      `Managing, writing, and designing an informational bi-weekly Newsletter sent to UCSC students`
    ],
  },
  {
    name: `Research Intern`,
    title: `Research Intern`,
    company: `CAVEAT: Center for Applied Values and Ethics in Advanced Technologies`,
    description: [
      `Conducted research and presented a proposed project to study the proliferation of hate speech within social media`,
      `Collaborated with fellow interns to redesign CAVEAT's logo and website`,
    ],
  },
];

export default function Experience() {
  return (
    <div className="py-3 sm:py-12 grid place-items-center">
      <div className="grid gap-x-10 grid-cols-7 grid-rows-3 max-w-2xl text-base font-normal leading-6 text-amber-950">
        <Tab.Group vertical>
          <Tab.List className="col-span-2 row-span-3 flex flex-col gap-8">
            {experiences.map((experience) => (
              <Tab key="experience.name">{experience.name}</Tab>
            ))} 
          </Tab.List>
          <Tab.Panels className="col-span-5 row-span-3">
            {experiences.map((experience) => (
              <Tab.Panel key="experience.company">
                <div>{experience.title}</div>
                <div>{experience.company}</div>
                <div>{experience.description}</div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

      </div>
    </div>
  )
}

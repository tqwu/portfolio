"use client";
import Image from "next/image";

const experiences = [
  {
    title: `Software Engineering Intern`,
    company: `Nutanix`,
    logo: `/Nutanix.png`,
    location: `San Jose, CA`,
    dates: `Dec 2023 - Present`,
    technologies: `Intel RDT, Docker, Prometheus, Grafana, Go`,
    description: [
      `Developed a cloud infrastructure monitoring system for advanced memory utilization analytics`,
      `Achieved enhanced visibility into memory usage patterns, projected to analyze over 6000 VMs`,
      `Projected to optimize shared resource allocation, enabling close to 100% memory and core utilization`,
    ],
  },
  {
    title: `Full Stack Developer Intern`,
    company: `Think Round, Inc.`,
    logo: `/ThinkRound.png`,
    location: `San Francisco, CA`,
    dates: `Jun 2023 - Sep 2023`,
    technologies: `React, Node.js, Next.js, PostgreSQL, Tailwind CSS, TypeScript`,
    description: [
      `Created website with industry-standard UI/UX and accessibility practices, achieving 98% client satisfaction rate`,
      `Presented web application at a Grand Launch unveiling, receiving 100% benefactor and founder approval`,
    ],
  },
  {
    title: `Engineering Tutor`,
    company: `University of California, Santa Cruz`,
    logo: `/Baskin.png`,
    location: `Santa Cruz, CA`,
    dates: `Dec 2023 - Present`,
    technologies: `for Computer Systems Design`,
    description: [
      `Held multiple weekly tutoring sessions for 150+ students`,
      `Reviewed course material and assisted students with programming assignments, successfully resolving over 95% of student bugs`,
    ],
  },
  {
    title: `Lead Advisor & Editor-in-Chief`,
    company: `University of California, Santa Cruz`,
    logo: `/UCSC.png`,
    location: `Santa Cruz, CA`,
    dates: `September 2022 - Present`,
    technologies: ``,
    description: [
      `Onboarded and supervised a team of academic peer advisors`,
      `Organized over 20 successful student events, consistently achieving over 90% projected attendance rates`,
      `Designed and wrote a bi-weekly Newsletter sent to over 2,000 students`,
    ],
  },
];

export default function Experience() {
  return (
    <div className="px-5 text-slate-200 font-mono grid pt-12 pb-16">
      <div className="text-5xl place-self-center pb-8">Experiences</div>

      <div className="place-self-center w-2/3">
        {experiences.map((experience) => (
          <div
            key={experience.title}
            className="grid gap-1 grid-cols-3 border-2 rounded-xl border-slate-500 py-6 px-3 my-12 my-2"
          >
            <div className="col-span-2 pl-2">
              <div className="text-2xl pb-2">{experience.title}</div>
              <div>{experience.location}</div>
              <div>{experience.dates}</div>
            </div>
            <div className="col-span-1 p-1.5 mr-3 w-64 grid justify-self-end items-center hidden md:block">
              <Image
                className=""
                src={experience.logo}
                height={500}
                width={350}
                alt="Avatar of Teresa Wu"
                priority
              />
            </div>
            <ul className="text-sm list-disc px-6 pt-2 col-span-3">
              {experience.description.map((item, index) => (
                <li key={index} className="py-0.5">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

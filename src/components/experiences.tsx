"use client";
import Image from "next/image";

const technical = [
  {
    header: `Capstone Project Team Member`,
    subheader: `Intel RDT, Docker, Prometheus, Grafana, Go`,
    company: `Nutanix`,
    logo: `/Nutanix.png`,
    location: `San Jose, CA`,
    dates: `Jan 2024 - Jun 2024`,
    description: [
      `Developed an end-to-end memory monitoring system to gain analytical insight into Nutanix's cloud infrastructure`,
      `Implemented a data exporter designed to gather virtual machine level metrics`,
      `Created a custom Grafana dashboard which visualizes collected metrics to diagnose performance issues and detect system bottlenecks, achieving enhanced visibility into memory usage patterns`,
    ],
  },
  {
    header: `Full Stack Developer Intern`,
    subheader: `React, Node.js, Next.js, PostgreSQL, Tailwind CSS, TypeScript`,
    company: `Think Round, Inc.`,
    logo: `/ThinkRound.png`,
    location: `San Francisco, CA`,
    dates: `Jun 2023 - Oct 2023`,
    description: [
      `Created a website that features the latest Think Round exhibitions and spotlights mental health/wellness resources, developed with industry-standard UI/UX and accessibility practices`,
      `Presented a live demo of version 1.0 at a Grand Launch unveiling to an audience of 100+ attendees`,
    ],
  },
];

const leadership = [
  {
    header: `Lead Advisor & Editor-in-Chief`,
    subheader: `Crown College Advising`,
    company: `University of California, Santa Cruz`,
    logo: `/UCSC.png`,
    location: `Santa Cruz, CA`,
    dates: `September 2022 - Jun 2024`,
    description: [
      `Supervised and trained a team of 5 academic peer advisors`,
      `Organized 20+ successful student outreach events`,
      `Designed and published bi-weekly newsletters for over 2,000 students`,
    ],
  },
  {
    header: `Engineering Tutor`,
    subheader: `Computer Systems Design in C`,
    company: `University of California, Santa Cruz`,
    logo: `/Baskin.png`,
    location: `Santa Cruz, CA`,
    dates: `Dec 2023 - Mar 2024`,
    description: [
      `Instructed 150+ students via weekly tutoring sessions`,
      `Reviewed course material and assisted students with troubleshooting and debugging programming assignments`,
    ],
  },
  {
    header: `Mock Trial Teaching Assistant`,
    subheader: ``,
    company: `University of California, Santa Cruz`,
    logo: `/UCSC.png`,
    location: `Santa Cruz, CA`,
    dates: `Mar 2023 - Mar 2024`,
    description: [
      `Delivered lectures on legal principles and courtroom procedures for a class of 60 students`,
      `Conducted weekly discussion sections and provided evaluations on written assignments, oral arguments, and trial performances to support students' skill development in legal analysis, public speaking, and critical thinking`,
    ],
  },
];

export default function Experiences() {
  return (
    <div className="px-5 text-slate-200 font-mono grid pt-12 pb-16">
      <div className="text-5xl place-self-center pb-4">Experiences</div>
      <div className="text-center text-sm sm:text-lg place-self-center pb-6">
        some of my key career highlights
      </div>

      <div className="text-center text-2xl sm:text-3xl place-self-center py-3">
        Technical Experiences
      </div>
      <div className="grid place-self-center place-items-center md:w-2/3 2xl:w-3/4">
        {technical.map((experience) => (
          <div
            key={experience.header}
            className="grid gap-1 grid-cols-3 2xl:w-2/3 border-2 rounded-xl border-slate-500 py-6 px-3 my-12 my-2 2xl:px-16"
          >
            {/* Mobile view image */}
            <div className="col-span-3 pb-4 w-2/3 grid justify-self-center place-items-center block lg:hidden">
              <Image
                className=""
                src={experience.logo}
                height={500}
                width={250}
                alt={`${experience.company} Logo`}
                priority
              />
            </div>

            {/* Experience headings */}
            <div className="col-span-3 lg:col-span-2 pl-2">
              <div className="text-2xl pb-1">{experience.header}</div>
              <div className="text-sm col-span-3 pb-2 text-slate-400">
                {experience.subheader}
              </div>
              <div>{experience.location}</div>
              <div>{experience.dates}</div>
            </div>

            {/* Desktop view image */}
            <div className="col-span-1 p-1.5 mr-3 grid justify-self-end items-center hidden lg:block">
              <Image
                className=""
                src={experience.logo}
                height={500}
                width={350}
                alt={`${experience.company} Logo`}
                priority
              />
            </div>

            {/* Experience description */}
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

      <div className="text-center text-2xl sm:text-3xl place-self-center pt-12 py-3">
        Leadership Experiences
      </div>
      <div className="grid place-self-center place-items-center md:w-2/3 2xl:w-3/4">
        {leadership.map((experience) => (
          <div
            key={experience.header}
            className="grid gap-1 grid-cols-3 2xl:w-2/3 border-2 rounded-xl border-slate-500 py-6 px-3 my-12 my-2 2xl:px-16"
          >
            {/* Mobile view image */}
            <div className="col-span-3 pb-4 w-2/3 grid justify-self-center place-items-center block lg:hidden">
              <Image
                className=""
                src={experience.logo}
                height={500}
                width={250}
                alt={`${experience.company} Logo`}
                priority
              />
            </div>

            {/* Experience headings */}
            <div className="col-span-3 lg:col-span-2 pl-2">
              <div className="text-2xl pb-1">{experience.header}</div>
              <div className="text-sm col-span-3 pb-2 text-slate-400">
                {experience.subheader}
              </div>
              <div>{experience.location}</div>
              <div>{experience.dates}</div>
            </div>

            {/* Desktop view image */}
            <div className="col-span-1 p-1.5 mr-3 grid justify-self-end items-center hidden lg:block">
              <Image
                className=""
                src={experience.logo}
                height={500}
                width={350}
                alt={`${experience.company} Logo`}
                priority
              />
            </div>

            {/* Experience description */}
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

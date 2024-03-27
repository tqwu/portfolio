"use client";

import Image from "next/image";
import Stepper from '@mui/joy/Stepper';
import Step, { stepClasses } from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import Typography, { typographyClasses } from '@mui/joy/Typography';

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
    <div className="px-5 text-slate-200 font-mono">

      <div className="text-3xl">Experiences</div>

      <div className="">
        {experiences.map((experience) => (
          <div key={experience.title} className="border-2 rounded-xl border-slate-500 p-2 my-2">
            <div>{experience.title}</div>
            <div>{experience.location}</div>
            <div>{experience.dates}</div>
            <ul className="text-sm list-disc px-6">
              {experience.description.map((item, index) => (
                <li key={index} className="py-0.5">
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-slate-100/90 p-2 rounded-xl w-64 grid place-self-center">
              <Image
                className=""
                src={experience.logo}
                height={400}
                width={250}
                alt="Avatar of Teresa Wu"
                priority
              />
            </div>
          </div>
        ))}
      </div>


      <Stepper
        orientation="vertical"
        sx={{
          '--Stepper-verticalGap': '2.5rem',
          '--StepIndicator-size': '2.5rem',
          '--Step-gap': '1rem',
          '--Step-connectorInset': '0.5rem',
          '--Step-connectorRadius': '1rem',
          '--Step-connectorThickness': '4px',
          '--joy-palette-success-solidBg': 'var(--joy-palette-success-400)',
          [`& .${stepClasses.completed}`]: {
            '&::after': { bgcolor: 'success.solidBg' },
          },
          [`& .${stepClasses.active}`]: {
            [`& .${stepIndicatorClasses.root}`]: {
              border: '4px solid',
              borderColor: '#fff',
              boxShadow: (theme) => `0 0 0 1px ${theme.vars.palette.primary[500]}`,
            },
          },
          [`& .${stepClasses.disabled} *`]: {
            color: 'neutral.softDisabledColor',
          },
          [`& .${typographyClasses['title-sm']}`]: {
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontSize: '10px',
          },
        }}
      >
        <Step
          completed
          indicator={
            <StepIndicator variant="solid" color="success">
            </StepIndicator>
          }
        >
          <div>
            <Typography level="title-sm">Step 1</Typography>
            Basic Details
          </div>
        </Step>
        <Step
          completed
          indicator={
            <StepIndicator variant="solid" color="success">
            </StepIndicator>
          }
        >
          <div>
            <Typography level="title-sm">Step 2</Typography>
            Company Details
          </div>
        </Step>
        <Step
          active
          indicator={
            <StepIndicator variant="solid" color="primary">
            </StepIndicator>
          }
        >
          <div>
            <Typography level="title-sm">Step 3</Typography>
            Subscription plan
          </div>
        </Step>
        <Step disabled indicator={<StepIndicator>3</StepIndicator>}>
          <div>
            <Typography level="title-sm">Step 4</Typography>
            Payment details
          </div>
        </Step>
      </Stepper>
    </div>
    // <div className="py-3 sm:py-12 grid place-items-center">
    //   <div className="grid sm:grid-cols-7 sm:grid-rows-3 max-w-2xl text-base font-normal leading-6 text-slate-200">
    //     <Tab.Group vertical>
    //       <Tab.List className="sm:col-span-2 sm:row-span-3 flex overflow-x-auto sm:overflow-hidden px-2 sm:pr-0 pb-2 sm:pb-0">
    //         <div className="flex sm:flex-col sm:gap-7">
    //           {experiences.map((experience) => (
    //             <Tab as={Fragment} key={experience.name}>
    //               {({ selected }) => (
    //                 <span
    //                   className={`${selected ? "bg-neon-purple/80" : "bg-neon-pink/80"}
    //                   outline-amber-900/50 rounded-3xl px-3 py-1 m-1 w-max sm:w-auto`}
    //                 >
    //                   <button>{experience.name}</button>
    //                 </span>
    //               )}
    //             </Tab>
    //           ))}
    //         </div>
    //       </Tab.List>
    //       <Tab.Panels className="sm:col-span-5 sm:row-span-3 bg-neon-pink/70 rounded-3xl h-fit min-h-custom sm:min-h-0 sm:h-60 py-3 px-5 mx-3 sm:ml-0">
    //         {experiences.map((experience) => (
    //           <Tab.Panel key={experience.company}>
    //             <span className="pb-2">{experience.title}</span>
    //             <span className="text-amber-900/70 pb-2">
    //               {" "}
    //               at {experience.company}
    //             </span>
    //             <div className="text-sm pb-2">{experience.dates}</div>
    //             <ul className="text-sm list-disc px-4">
    //               {experience.description.map((item, index) => (
    //                 <li key={index} className="p-1">
    //                   {item}
    //                 </li>
    //               ))}
    //             </ul>
    //           </Tab.Panel>
    //         ))}
    //       </Tab.Panels>
    //     </Tab.Group>
    //   </div>
    // </div>
  );
}

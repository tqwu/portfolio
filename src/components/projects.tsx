"use client";
import Image from "next/image";

const projects = [
  {
    title: `Slug Path`,
    preview: `/SlugPath.png`,
    technologies: `React, Node.js, Next.js, Prisma, SQL, GraphQL, Tailwind CSS, Joy UI, TypeScript`,
    webpage: `https://www.slugpath.com`,
    webpageDescription: `Discover`,
    webpageIcon: true,
    description: [
      `I co-pioneered this web application tool to help UCSC students comprehensively plan their future classes.`,
      `With support for over 1,500 courses, Slug Path makes degree planning simple.`,
      `(This project has been selected for/sponsored by UCSC for continued development and integration into official course planning use for students!)`,
    ],
  },
  {
    title: `Cache Simulator`,
    preview: `/cacheSimulator.png`,
    technologies: `C programming language`,
    webpage: `https://github.com/tqwu/cache-simulator`,
    webpageDescription: `Discover`,
    webpageIcon: true,
    description: [
      `A simple command line cache simulator using a doubly linked list and a bit array.`,
      `Supports three caching algorithms: FIFO, LRU, and clock.`,
    ],
  },
  {
    title: `Portfolio`,
    preview: `/portfolio.png`,
    technologies: `React, Node.js, Next.js, Tailwind CSS, Headless UI, Framer Motion, TypeScript`,
    webpage: `https://github.com/tqwu/portfolio`,
    webpageDescription: `You're looking at it!`,
    webpageIcon: false,
    description: [`A fun personal website!`],
  },
];

export default function Projects() {
  return (
    <div className="px-5 text-slate-200 font-mono grid pt-12 pb-16">
      <div className="text-5xl place-self-center pb-4">Projects</div>
      <div className="text-center text-sm sm:text-lg place-self-center pb-6">
        some of my favorite projects I&apos;ve worked on
      </div>

      <div className="place-self-center sm:w-4/5">
        {projects.map((project) => (
          <div
            key={project.title}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-1 2xl:gap-16 border-2 rounded-xl border-slate-500 py-6 px-3 my-12 my-2"
          >
            {/* Project Description Begin */}
            <div className="place-self-center col-span-1 pl-2 max-w-2xl xl:justify-self-end">
              <div className="text-2xl pb-2">{project.title}</div>
              <div className="text-sm col-span-3 pb-2 text-slate-400">
                {project.technologies}
              </div>
              <ul className="text-sm pt-2 col-span-3">
                {project.description.map((item, index) => (
                  <li key={index} className="py-1.5">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="grid w-full place-items-center">
                <a
                  href={project.webpage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center gap-2 bg-slate-400 hover:bg-slate-300 text-navy font-normal mt-4 py-2 px-4 rounded-full border border-white">
                    {project.webpageDescription}
                    {project.webpageIcon && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    )}
                  </button>
                </a>
              </div>
            </div>
            {/* Project Description End */}

            <div className="col-span-1 place-self-center p-1.5 md:ml-6 xl:justify-self-start">
              <Image
                className="rounded-xl"
                src={project.preview}
                height={600}
                width={500}
                alt={`${project.title} Preview`}
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

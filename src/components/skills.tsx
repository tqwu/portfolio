export default function Skills() {
  return (
    <div className="text-slate-200 font-mono pt-16 pb-6 grid place-items-center gap-3">
      <div className="text-5xl place-self-center pb-2">Skills</div>

      <div className="grid gap-3 w-4/5 pl-0 md:pl-24">
        <div>
          <span className="text-3xl">Languages: </span>
          <span className="">TypeScript/JavaScript, C, SQL</span>
        </div>

        <div>
          <span className="text-3xl">Technologies: </span>
          <span className="">
            React, Node.js, Next.js, Express.js, Vercel, PostgreSQL, Docker, Git
          </span>
        </div>

        <div>
          <span className="text-3xl">Knowledge: </span>
          <span className="">
            Agile/Scrum Methodologies, System Design, REST, GraphQL
          </span>
        </div>
      </div>
    </div>
  );
}

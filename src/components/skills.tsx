import * as motion from "motion/react-client";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="text-slate-200 font-mono pt-16 pb-6 grid place-items-center gap-3">
        <div className="text-5xl place-self-center pb-2">Skills</div>

        <div className="grid gap-3 w-4/5 xl:w-2/3 2xl:w-1/2 pl-0 md:pl-24">
          <div>
            <span className="text-xl sm:text-3xl">Languages: </span>
            <span className="text-sm sm:text-base">
              Python, TypeScript/JavaScript, C, SQL
            </span>
          </div>

          <div>
            <span className="text-xl sm:text-3xl">Technologies: </span>
            <span className="text-sm sm:text-base">
              React, Node.js, Next.js, Express.js, Vercel, PostgreSQL, Docker,
              Prometheus, Grafana, Git
            </span>
          </div>

          <div>
            <span className="text-xl sm:text-3xl">Knowledge: </span>
            <span className="text-sm sm:text-base">
              Agile/Scrum Methodologies, System Design, REST, GraphQL
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

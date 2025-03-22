import Image from "next/image";
import profile from "../../public/profile.png";
import * as motion from "motion/react-client";

export default function AboutMe() {
  return (
    <div className="py-3 sm:py-12 grid place-items-center font-mono">
      <div className="grid sm:grid-cols-7 sm:grid-rows-1 max-w-5xl text-base font-normal leading-7 text-slate-100">
        {/* Mobile text start */}
        <div className="block sm:hidden pt-4 px-3 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="pb-2">
              I&apos;m Teresa, a recent graduate from the University of
              California, Santa Cruz, where I studied Computer Science and
              History of Consciousness.
            </div>
            <div className="pb-2">
              I most recently worked on an advanced memory utilization analytics
              system for Nutanix to gain better insight into their cloud
              infrastructure memory usage.
            </div>
          </motion.div>
        </div>
        {/* Mobile text end */}

        <Image
          className="sm:col-span-3 sm:row-span-1 justify-self-center self-center p-2 md:p-0 sm:pl-7 rounded-xl"
          src={profile}
          height={380}
          alt="Picture of Teresa Wu"
        />

        {/* Desktop paragraph start */}
        <div className="hidden sm:grid col-span-4 gap-5 pt-2 pr-7 sm:pl-7 md:pl-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div>
              I&apos;m Teresa, a recent graduate from the University of
              California, Santa Cruz, where I studied Computer Science and
              History of Consciousness.
            </div>
            <br />
            <div>
              I most recently worked on an advanced memory utilization analytics
              system for Nutanix to gain better insight into their cloud
              infrastructure memory usage.
            </div>
            <br />
            <div>
              I aspire to continue to build efficient applications that provide
              optimal user experiences.
            </div>
            <br />
            <div>
              Outside of my technical studies, I enjoy hobbies that exercise
              creativity! I love trying new recipes, tending to novel plants,
              and I am passionate about fashion design and crafting funky new
              clothes.
            </div>
          </motion.div>
        </div>
        {/* Desktop paragraph end */}

        {/* Mobile text start */}
        <div className="block sm:hidden pb-3 pt-2 px-3 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="pb-2">
              I aspire to continue to build efficient applications that provide
              optimal user experiences.
            </div>
            <div>
              Outside of my technical studies, I enjoy hobbies that exercise
              creativity! I love trying new recipes, tending to novel plants,
              and I am passionate about fashion design and crafting funky new
              clothes.
            </div>
          </motion.div>
        </div>
        {/* Mobile text end */}
      </div>
    </div>
  );
}

import Image from "next/image";
import profile from "../../public/profile.png";

export default function AboutMe() {
  return (
    <div className="py-3 sm:py-12 grid place-items-center font-mono">
      <div className="grid sm:grid-cols-7 sm:grid-rows-1 max-w-5xl text-base font-normal leading-7 text-slate-100">
        {/* Mobile text start */}
        <div className="block sm:hidden pt-4 px-3 text-center">
          <div className="pb-2">
            I&apos;m Teresa, a senior at the University of California, Santa
            Cruz, studying Computer Science and History of Consciousness.
          </div>
          <div className="pb-2">
            I&apos;m currently working on an advanced memory utilization
            analytics project for Nutanix to gain better insight into their
            cloud infastructure memory usage.
          </div>
        </div>
        {/* Mobile text end */}

        <Image
          className="sm:col-span-3 sm:row-span-1 justify-self-center self-center p-2 lg:p-0 rounded-xl"
          src={profile}
          height={380}
          alt="Picture of Teresa Wu"
        />

        {/* Desktop paragraph start */}
        <div className="hidden sm:grid col-span-4 gap-5 pt-2 pr-7">
          <div>
            I&apos;m Teresa, a senior at the University of California, Santa
            Cruz, studying Computer Science BS and History of Consciousness.
          </div>
          <div>
            I&apos;m currently working on an advanced memory utilization
            analytics system for Nutanix to gain better insight into their cloud
            infastructure memory usage.
          </div>
          <div>
            I aspire to continue to build efficient applications that provide
            optimal user experiences.
          </div>
          <div>
            Outside of my technical studies, I enjoy hobbies that exercise
            creativity! I love trying new recipes, tending to novel plants, and
            I am passionate about fashion design and crafting funky new clothes.
          </div>
        </div>
        {/* Desktop paragraph end */}

        {/* Mobile text start */}
        <div className="block sm:hidden pb-3 pt-2 px-3 text-center">
          <div className="pb-2">
            I aspire to continue to build efficient applications that provide
            optimal user experiences.
          </div>
          <div>
            Outside of my technical studies, I enjoy hobbies that exercise
            creativity! I love trying new recipes, tending to novel plants, and
            I am passionate about fashion design and crafting funky new clothes.
          </div>
        </div>
        {/* Mobile text end */}
      </div>
    </div>
  );
}

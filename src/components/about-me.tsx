
import Image from 'next/image'
import profile from '../../public/profile.png'

export default function AboutMe() {
  return (
    <div className="py-3 sm:py-12 grid place-items-center">
      <div className="grid sm:grid-cols-7 sm:grid-rows-1 max-w-3xl text-base font-normal leading-6 text-amber-950">

        {/* Mobile text start */}
        <div className="block sm:hidden pt-4 px-3 text-center">
          <div className="pb-2">
            My name is Teresa, and I&apos;m a rising senior at the University of California, Santa Cruz, studying Computer Science (BS) and History of Consciousness.
          </div>
          <div className="pb-2">
            I currently work as a Full Stack Web Development Intern at Think Round Inc..
          </div>
        </div>
        {/* Mobile text end */}

        <Image className="sm:col-span-3 sm:row-span-1 justify-self-center self-center p-2 lg:p-0" src={profile} height={300} alt="Picture of Teresa Wu" />

        {/* Desktop paragraph start */}
        <div className="hidden sm:grid col-span-4 gap-5 pt-2 pr-7">
          <div>
            My name is Teresa, and I&apos;m a rising senior at the University of California, Santa Cruz, studying Computer Science (BS) and History of Consciousness.
          </div>
          <div>
            I currently work as a Full Stack Web Development Intern at Think Round Inc..
          </div>
          <div>
            I aspire to continue to build efficient applications that provide optimal user experiences.
          </div>
          <div>
            Check out my LinkedIn to learn more about me, or explore my GitHub to see some of my projects!
          </div>
        </div>
        {/* Desktop paragraph end */}

        {/* Mobile text start */}
        <div className="block sm:hidden pb-3 pt-2 px-3 text-center">
          <div className="pb-2">
            I aspire to continue to build efficient applications that provide optimal user experiences.
          </div>
          <div>
            Check out my LinkedIn to learn more about me, or explore my GitHub to see some of my projects! 
          </div>
        </div>
        {/* Mobile text end */}

      </div>
    </div>
  )
}
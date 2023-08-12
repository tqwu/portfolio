
import Image from 'next/image'
import profile from '../../public/profile.png'

export default function AboutMe() {
  return (
    <div className="py-3 sm:py-12 grid place-items-center">
      <div className="grid grid-cols-7 grid-rows-3 sm:grid-rows-1 max-w-3xl text-xs sm:text-base font-normal leading-4 sm:leading-6 text-amber-950">
        <Image className="col-span-2 sm:col-span-3 row-span-2 sm:row-span-1 justify-self-center self-center px-2 lg:p-0" src={profile} height={300} alt="Picture of Teresa Wu" />

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

        {/* Mobile paragraph start */}
        <div className="sm:hidden col-span-5 row-span-2 pt-4 pr-2 self-center">
          <div className="pb-2">
            My name is Teresa, and I&apos;m a rising senior at the University of California, Santa Cruz, studying Computer Science (BS) and History of Consciousness.
          </div>
          <div className="pb-2">
            I currently work as a Full Stack Web Development Intern at Think Round Inc..
          </div>
        </div>
        <div className="sm:hidden col-span-7 row-span-1 pl-3 pr-2 self-center">
          <div className="pb-2">
            I aspire to continue to build efficient applications that provide optimal user experiences.
          </div>
          <div>
            Check out my LinkedIn to learn more about me, or explore my GitHub to see some of my projects! 
          </div>
        </div>
        {/* Mobile paragraph end */}

      </div>
    </div>
  )
}
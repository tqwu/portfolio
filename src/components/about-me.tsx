
import Image from 'next/image'
import profile from '../../public/profile.png'

export default function AboutMe() {
  return (
    <div className="py-12 grid place-items-center">
      <div className="grid grid-cols-7 grid-rows-4 max-w-3xl items-center font-normal leading-6 text-amber-950">
        <Image className="col-span-3 row-span-4 pr-7 pb-2" src={profile} height={500} alt="Picture of Teresa Wu" />
        <div className="col-span-4 row-span-1">
          My name is Teresa, and I&apos;m a rising senior at the University of California, Santa Cruz, studying Computer Science (BS) and History of Consciousness.
        </div>
        <div className="col-span-4 row-span-1">
          I currently work as a Full Stack Web Development Intern at Think Round Inc..
        </div>
        <div className="col-span-4 row-span-1">
          I aspire to continue to build efficient applications that provide optimal user experiences.
        </div>
        <div className="col-span-4 row-span-1">
          Check out my LinkedIn to learn more about me, or explore my GitHub to see some of my projects! 
        </div>
      </div>
    </div>
  )
}
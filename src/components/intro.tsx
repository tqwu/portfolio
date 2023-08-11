
import Image from 'next/image'
import avatar from '../../public/avatar.png'
import avatar_mobile from '../../public/avatar_mobile.png'

export default function Intro() {
  return (
    <>
      <div className="h-fit sm:h-96 bg-[#cdebc5]">

        {/* Desktop elements start */}
          <div className="hidden sm:columns-2 sm:pt-16 sm:flex sm:flex-initial sm:justify-center">
            <div className="pt-14 pl-8 pr-10 text-center text-3xl font-semibold leading-9 text-amber-950">
              <div className="pb-4">Hi! I&apos;m Teresa.</div>
              <div>I turn coffee into code for the web.</div>
            </div>
            <Image className="pr-8" src={avatar} width={230} alt="Avatar of Teresa Wu" priority />
          </div>
        {/* Desktop elements end */}

        {/* Mobile elements start */}
        <div className="pb-5 grid grid-rows-5 grid-cols-3 items-center content-center">
          <div className="px-2 row-span-2 col-span-3 sm:hidden text-center text-2xl font-semibold leading-7 text-amber-950">
            <div className="pb-4">Hi! I&apos;m Teresa.</div>
            <div>I turn coffee into code for the web.</div>
          </div>
          <div className="col-span-1"/>
          <Image className="pr-5 row-span-3 col-span-2 justify-self-end sm:hidden" src={avatar_mobile} width={150} alt="Avatar of Teresa Wu" priority />
        </div>
        {/* Mobile elements end */}

      </div>
    </>
  )
}

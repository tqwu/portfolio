
import Image from 'next/image'
import avatar from '../../public/avatar.png'

export default function Intro() {
  return (
    <>
      <div className="h-96 bg-[#cdebc5]">
        <div className="columns-2 pt-16 flex flex-initial justify-center">
          <div className="pt-14 pl-8 pr-10 text-center text-3xl font-semibold leading-9 text-amber-950">
            <div className="pb-4">Hi! I&apos;m Teresa.</div>
            <div>I turn coffee into code for the web.</div>
          </div>
          <Image className="pr-8" src={avatar} width={230} alt="Avatar of Teresa Wu" priority />
        </div>
      </div>
    </>
  )
}

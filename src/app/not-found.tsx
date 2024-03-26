
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import avatar404 from '../../public/avatar404.png'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: `404 Error Page Not Found`,
}

export default function NotFound() {
    return (
        <main className="grid place-items-center h-screen bg-navy">
            <div className="max-w-xs h-96 grid grid-rows-2 grid-cols-3 pb-10">
                <Image className="row-span-1 col-span-1 self-end" src={avatar404} width={100} alt="404 Not Found" />
                <div className="row-span-1 col-span-2 self-end text-center font-semibold text-slate-200 pb-3">
                    <div className="text-6xl">404</div>
                    <div className="text-2xl">Page Not Found</div>
                </div>
                <div className="row-span-1 col-span-3 self-start text-center font-normal leading-6 text-slate-200 pt-5">
                    <div className="pb-5">Sorry, we can&apos;t find that page. It may have been removed, is temporarily unavailable, or possibly never existed.</div>
                    <Link href="/">
                        <button className="bg-slate-400 hover:bg-slate-300 text-navy font-normal py-2 px-4 rounded-full border border-white">Return Home</button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

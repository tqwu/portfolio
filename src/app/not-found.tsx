
import Link from 'next/link'
import Image from 'next/image'
import avatar_404 from '../../public/avatar_404.png'

export default function NotFound() {
    return (
        <main className="grid place-items-center h-screen">
            <div className="max-w-xs h-96 grid grid-rows-2 grid-cols-3">
                <Image className="row-span-1 col-span-1 self-end" src={avatar_404} width={100} alt="404 Not Found" />
                <div className="row-span-1 col-span-2 self-end text-center font-semibold text-amber-950 pb-3">
                    <div className="text-6xl">404</div>
                    <div className="text-2xl">Page Not Found</div>
                </div>
                <div className="row-span-1 col-span-3 self-start text-center font-normal leading-6 text-amber-950 pt-5">
                    <div className="pb-5">Sorry, we can&apos;t find that page. It may have been removed, is temporarily unavailable, or possibly never existed.</div>
                    <Link href="/">
                        <button className="bg-pastel-green hover:bg-pastel-green-light text-amber-950 font-normal py-2 px-4 rounded-full border border-pastel-green-dark">Return Home</button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

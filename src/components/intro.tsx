"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import IntroAnim from "./introAnimation";

export default function Intro() {
  const images = ["/avatarStart.png", "/avatarUp.png", "/avatarFront.png"];
  const imagesMobile = [
    "/avatarStartMobile.png",
    "/avatarUp.png",
    "/avatarFront.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="h-fit sm:h-96 bg-navy">
        {/* Desktop elements start */}
        <div className="hidden sm:columns-2 sm:pt-16 sm:flex sm:flex-initial sm:justify-center">
          <div className="pt-14 pl-8 pr-10 text-center text-3xl font-semibold leading-9 text-slate-200">
            <div className="pb-4 text-4xl">Hi! I&apos;m Teresa Wu</div>
            <IntroAnim />
          </div>
          <Image
            className="pr-8"
            src={images[currentImageIndex]}
            height={400}
            width={230}
            alt="Avatar of Teresa Wu"
            priority
          />
        </div>
        {/* Desktop elements end */}

        {/* Mobile elements start */}
        <div className="pb-5 grid grid-rows-5 grid-cols-3 items-center content-center">
          <div className="px-2 row-span-2 col-span-3 sm:hidden text-center text-2xl font-semibold leading-7 text-slate-200">
            <div className="pb-4">Hi! I&apos;m Teresa Wu</div>
            <IntroAnim />
          </div>
          <div className="col-span-1" />
          <Image
            className="pr-5 row-span-3 col-span-2 justify-self-end sm:hidden"
            src={imagesMobile[currentImageIndex]}
            height={400}
            width={150}
            alt="Avatar of Teresa Wu"
            priority
          />
        </div>
        {/* Mobile elements end */}
      </div>
    </>
  );
}

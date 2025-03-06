import Image from "next/image";

import HeaderBlog from "@/components/headerBlog";
import FooterBlog from "@/components/footerBlog";

export default function Fashion() {
  return (
    <>
      <HeaderBlog />
      <main className="bg-violet-100 font-mono font-light text-sm">
        {/* Groovy Pants Begin */}
        <div className="grid grid-cols-9 py-20 text-center">
          <div className="col-span-5 px-9 place-items-center">
            <Image
              className="rounded-3xl"
              src={"/designPants.png"}
              alt=""
              width={900}
              height={900}
            />
          </div>
          <div className="col-span-4 pr-8 place-self-center">
            <div className="flex flex-col gap-4 pb-4">
              <div className="text-3xl text-left">GROOVY PANTS</div>
              <div className="text-justify">
                Using two pairs of old jeans, I cut the edges into a wavy
                pattern and pieced them together to create this funky denim
                look.
              </div>
            </div>
            <div className="grid grid-cols-2">
              <Image
                className="col-span-1 rounded-3xl self-center pr-2"
                src={"/placeholder.png"}
                alt=""
                width={350}
                height={350}
              />
              <Image
                className="col-span-1 rounded-3xl self-center"
                src={"/placeholder.png"}
                alt=""
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>
        {/* Groovy Pants End */}

        {/* Broflovski Hat Begin */}
        <div className="bg-violet-200 py-12 px-9 grid place-items-center">
          <div className="grid grid-cols-5 w-5/6">
            <Image
              className="col-span-1 justify-self-end self-center"
              src={"/designKyleCostume.png"}
              alt=""
              width={300}
              height={300}
            />
            <div className="col-span-2 pt-24 pr-4">
              <div className="text-3xl text-right pb-8">
                KYLE BROFLOVSKI&apos;S HAT
              </div>
              <div className="text-right pb-6">
                For Halloween last year, I decided to go as an iconic character
                from one of my favorite shows: South Park!
              </div>
              <div className="text-right">
                His memorable green hat was made with some neon felt and
                stuffing.
              </div>
            </div>
            <div className="col-span-2 place-self-center">
              <Image
                className="rounded-3xl pb-6"
                src={"/designKyleHat.png"}
                alt=""
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>
        {/* Broflovski Hat End */}

        {/* White Denim Purse Begin */}
        <div className="px-12 py-24 flex gap-6">
          <Image
            className="rounded-3xl"
            src={"/placeholder.png"}
            alt=""
            width={200}
            height={200}
          />
          <Image
            className="rounded-3xl"
            src={"/designWhiteDenimBag.png"}
            alt=""
            width={630}
            height={630}
          />
          <div className="self-center pb-14">
            <div className="text-3xl text-left pb-6">WHITE DENIM BAG</div>
            <div className="text-left">
              Made with an old pair of jeans and a navy skirt.
            </div>
          </div>
        </div>

        {/* White Denim Purse End */}
      </main>
      <FooterBlog />
    </>
  );
}

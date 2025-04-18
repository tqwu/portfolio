import Image from "next/image";

import HeaderBlog from "@/components/headerBlog";
import FooterBlog from "@/components/footerBlog";
import ButtonWithArrow from "@/components/buttonWithArrow";

export default function Fashion() {
  return (
    <>
      <HeaderBlog />
      <main className="bg-violet-100 font-mono font-light text-sm grid pt-16 gap-16 place-items-center">
        {/* Groovy Pants Begin */}
        <div className="grid grid-cols-3 text-center w-3/4">
          <div className="col-span-2 grid grid-cols-2 gap-6 px-9 place-items-center">
            <Image
              className="col-span-1 rounded-3xl self-center"
              src={"/placeholder.png"}
              alt=""
              width={400}
              height={400}
            />
            <Image
              className="col-span-1 rounded-3xl self-center"
              src={"/placeholder.png"}
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div className="col-span-1 pr-8 place-self-center">
            <div className="flex flex-col gap-4 pb-4">
              <div className="text-3xl text-left">GROOVY PANTS</div>
              <div className="text-justify">
                Using two pairs of old jeans, I cut the edges into a wavy
                pattern and pieced them together to create this funky denim
                look.
              </div>
              <ButtonWithArrow buttonText="Read more" endpoint="groovy-pants" />
            </div>
          </div>
        </div>
        {/* Groovy Pants End */}

        {/* Broflovski Hat Begin */}
        <div className="bg-violet-200 w-full text-center py-12 grid place-items-center">
          <div className="grid place-items-center gap-5">
            <div className="text-3xl">KYLE BROFLOVSKI&apos;S HAT</div>
            <div className="pb-6">
              For Halloween last year, I decided to go as an iconic character
              from one of my favorite shows: South Park!
              <div className="p-2" />
              His memorable green hat was made with some neon felt and stuffing.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12 pb-8">
            <Image
              className="rounded-3xl"
              src={"/placeholder.png"}
              alt=""
              width={300}
              height={300}
              blurDataURL={"/placeholder.png"}
              placeholder="blur"
            />
            <Image
              className="rounded-3xl"
              src={"/placeholder.png"}
              alt=""
              width={300}
              height={300}
              blurDataURL={"/placeholder.png"}
              placeholder="blur"
            />
          </div>
          <ButtonWithArrow buttonText="Read more" endpoint="kyle-hat" />
        </div>
        {/* Broflovski Hat End */}

        {/* White Denim Purse Begin */}
        <div className="px-12 flex gap-12">
          <Image
            className="rounded-3xl"
            src={"/placeholder.png"}
            alt=""
            width={300}
            height={300}
          />
          <div className="flex flex-col gap-4 self-center text-left">
            <div className="text-3xl">WHITE DENIM BAG</div>
            <div className="">
              Made with an old pair of jeans and a navy skirt.
            </div>
            <ButtonWithArrow
              buttonText="Read more"
              endpoint="white-denim-bag"
            />
          </div>
        </div>
        {/* White Denim Purse End */}

        {/* Bottega Venetta Begin */}
        <div className="bg-violet-200 w-full text-center py-12 grid place-items-center">
          <div className="text-3xl">BOTTEGA VENETTA INSPIRED DENIM BAG</div>
        </div>
        {/* Bottega Venetta End */}
      </main>
      <FooterBlog />
    </>
  );
}

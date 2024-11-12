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
          <div className="grid grid-cols-4 w-3/4 gap-16">
            <div className="col-span-2">
              <div className="text-3xl text-right pb-8">
                KYLE BROFLOVSKI'S HAT
              </div>
              <div className="grid grid-cols-7">
                <Image
                  className="col-span-4 justify-self-end"
                  src={"/designKyleCostume.png"}
                  alt=""
                  width={200}
                  height={200}
                />
                <div className="col-span-3 pt-3">
                  <div className="text-left pb-6">
                    For Halloween last year, I decided to go as an iconic
                    character from one of my favorite shows:
                    <br />
                    South Park!
                  </div>
                  <div className=" col-span-1 text-left">
                    His iconic green hat was made with some neon felt and
                    stuffing.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 self-center">
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
      </main>
      <FooterBlog />
    </>
  );
}

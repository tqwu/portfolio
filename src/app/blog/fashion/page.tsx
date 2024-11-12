import Image from "next/image";

import HeaderBlog from "@/components/headerBlog";
import FooterBlog from "@/components/footerBlog";

export default function Fashion() {
  return (
    <>
      <HeaderBlog />
      <main className="bg-peach font-mono font-light text-sm">
        <div className="grid grid-cols-9 py-12 text-center">
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
      </main>
      <FooterBlog />
    </>
  );
}

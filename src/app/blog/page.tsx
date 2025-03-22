import Image from "next/image";
import HeaderBlog from "@/components/headerBlog";
import FooterBlog from "@/components/footerBlog";

export default function Blog() {
  return (
    <>
      <HeaderBlog />
      <main className="bg-peach py-16">
        <div className="grid grid-cols-2">
          <div className="col-span-1 justify-self-end self-center mt-24">
            <Image
              className=""
              src={"/blogMainSide.png"}
              alt=""
              width={450}
              height={900}
            />
          </div>
          <div className="col-span-1 justify-self-start self-center mb-24">
            <Image
              className=""
              src={"/blogMainProfile.png"}
              alt=""
              width={450}
              height={900}
            />
          </div>
        </div>
      </main>
      <FooterBlog />
    </>
  );
}

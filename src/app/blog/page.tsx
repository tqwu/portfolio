import Image from "next/image";
import HeaderBlog from "@/components/headerBlog";
import FooterBlog from "@/components/footerBlog";
import blogMainProfile from "../../../public/blogMainProfile.png";
import blogMainSide from "../../../public/blogMainSide.png";

export default function Blog() {
  return (
    <>
      <HeaderBlog />
      <main className="bg-peach py-24">
        <div className="grid grid-cols-2">
          <div className="col-span-1 justify-self-end self-center mt-24">
            <Image className="" src={blogMainSide} alt="" width={450} />
          </div>
          <div className="col-span-1 justify-self-start self-center mb-24">
            <Image className="" src={blogMainProfile} alt="" width={450} />
          </div>
        </div>
      </main>
      <FooterBlog />
    </>
  );
}

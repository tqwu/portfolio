import Image from "next/image";
import HeaderBlog from "@/components/headerBlog";
import FooterBlog from "@/components/footerBlog";
import * as motion from "motion/react-client";

export default function Blog() {
  return (
    <>
      <HeaderBlog />
      <main className="bg-peach py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
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
        </motion.div>
      </main>
      <FooterBlog />
    </>
  );
}

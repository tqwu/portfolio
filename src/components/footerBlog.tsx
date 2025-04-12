import Divider from "@/components/divider";
import Link from "next/link";

export default function FooterBlog() {
  return (
    <>
      <hr className="border-0.5 border-amber-950" />
      <div className="bg-amber-100 flex flex-col place-items-center text-xs text-amber-950 font-normal font-mono text-center py-4 leading-6">
        <div className="">Thanks for stopping by!</div>
        <div className="">
          Check out the code for this site{" "}
          <Link
            href="https://github.com/tqwu/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-300"
          >
            here
          </Link>
          !
        </div>
      </div>
      <Divider />
    </>
  );
}

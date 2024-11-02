import Divider from "@/components/divider";

export default function FooterBlog() {
  return (
    <>
      <div className="bg-amber-100 flex flex-col gap-2 place-items-center text-sm text-amber-950 font-normal font-mono text-center py-4 leading-6">
        <div className="">Thanks for stopping by!</div>
        <div className="">
          Check out the code for this site{" "}
          <a
            href="https://github.com/tqwu/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-300"
          >
            here
          </a>
          !
        </div>
      </div>
      <Divider />
    </>
  );
}

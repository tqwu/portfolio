import HeaderBlog from "@/components/headerBlog";
import FooterBlog from "@/components/footerBlog";
import Link from "next/link";

export default function Plants() {
  return (
    <>
      <HeaderBlog />
      <main className="bg-lime-100 font-mono text-sm font-light">
        <div>This is the Plants page.</div>
        <div>
          <div>Some helpful / interesting resources about plants</div>
          <Link
            href="https://pollinator.art/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-300"
          >
            Pollinator Pathmaker
          </Link>
          <br />
          <Link
            href="https://www.youtube.com/@tannertheplanter102"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-300"
          >
            Tanner the Planter
          </Link>
        </div>
      </main>
      <FooterBlog />
    </>
  );
}

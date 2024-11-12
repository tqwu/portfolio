import HeaderBlog from "@/components/headerBlog";
import FooterBlog from "@/components/footerBlog";

export default function Plants() {
  return (
    <>
      <HeaderBlog />
      <main className="bg-lime-100 font-mono text-sm font-light">
        <div>This is the Plants page.</div>
      </main>
      <FooterBlog />
    </>
  );
}

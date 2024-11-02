import HeaderBlog from "@/components/headerBlog";
import FooterBlog from "@/components/footerBlog";

export default function Writing() {
  return (
    <>
      <HeaderBlog />
      <main className="bg-peach">
        <div>This is the Writing page.</div>
      </main>
      <FooterBlog />
    </>
  );
}

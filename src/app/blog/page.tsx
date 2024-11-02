import HeaderBlog from "@/components/headerBlog";
import FooterBlog from "@/components/footerBlog";

export default function Blog() {
  return (
    <>
      <HeaderBlog />
      <main className="bg-peach">
        <div>This is the Blog page.</div>
        <div>Writings</div>
        <div>Plants</div>
        <div>Fashion Design</div>
      </main>
      <FooterBlog />
    </>
  );
}

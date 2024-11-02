import HeaderBlog from "../../components/headerBlog";
import Divider from "../../components/divider";

export default function Blog() {
  return (
    <>
        <Divider />
        <HeaderBlog />    
        <main className="bg-peach">
        <div>This is the Blog page.</div>
        <div>Writings</div>
        <div>Plants</div>
        <div>Fashion Design</div>
        </main>
        <Divider />
    </>
  );
}

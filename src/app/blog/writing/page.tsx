import HeaderBlog from "@/components/headerBlog";
import FooterBlog from "@/components/footerBlog";
import Card from "@/components/card";

const writingCards = [
  {
    title: `Test 1`,
    description: `Started walking into the water I won't lie I was terrified but I pressed on and I made my way past the breakers as a strange calm came over me.`,
    endpoint: `/blog`,
    imageSrc: `/blogMainProfile.png`,
  },
  {
    title: `Test 2`,
    description: `Description 2`,
    endpoint: `/blog`,
    imageSrc: `/blogMainProfile.png`,
  },
];

export default function Writing() {
  return (
    <>
      <HeaderBlog />
      <main className="bg-peach font-mono font-light grid justify-items-center">
        <div className="grid grid-cols-2 justify-items-center w-3/4 py-12">
          {writingCards.map((w) => (
            <div key={w.endpoint} className="col-span-1">
              <Card
                title={w.title}
                description={w.description}
                endpoint={w.endpoint}
                imageSrc={w.imageSrc}
              />
            </div>
          ))}
        </div>
      </main>
      <FooterBlog />
    </>
  );
}

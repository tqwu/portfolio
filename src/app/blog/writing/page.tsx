import HeaderBlog from "@/components/headerBlog";
import FooterBlog from "@/components/footerBlog";
import Card from "@/components/card";

const writingCards = [
  {
    title: `Test 1`,
    description: `Description 1`,
    endpoint: `Endpoint 1`,
    imageSrc: `/blogMainProfile.png`,
  },
  {
    title: `Test 2`,
    description: `Description 2`,
    endpoint: `Endpoint 2`,
    imageSrc: `/blogMainProfile.png`,
  },
];

export default function Writing() {
  return (
    <>
      <HeaderBlog />
      <main className="bg-peach">
        {writingCards.map((w) => (
          <div key={w.endpoint}>
            <Card
              title={w.title}
              description={w.description}
              endpoint={w.endpoint}
              imageSrc={w.imageSrc}
            />
          </div>
        ))}
        <div>This is the Writing page.</div>
      </main>
      <FooterBlog />
    </>
  );
}

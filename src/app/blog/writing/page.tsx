import HeaderBlog from "@/components/headerBlog";
import FooterBlog from "@/components/footerBlog";
import Card from "@/components/card";

const writingCards = [
  {
    title: `GRADUATION`,
    description: `I had the honor of giving my class's 2024 commencement speech.`,
    endpoint: `/commencement-speech`,
    imageSrc: `/graduation.jpg`,
    buttonText: `Listen to it here`,
  },
  {
    title: `GIVE & TAKE`,
    description: `This short dystopian piece awarded me 3rd place in a micro-science-fiction competition in 2019.`,
    endpoint: `/give-and-take`,
    imageSrc: `/placeholder.png`,
    buttonText: `Read more`,
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
                titleClickable={false}
                description={w.description}
                endpoint={w.endpoint}
                imageSrc={w.imageSrc}
                buttonText={w.buttonText}
              />
            </div>
          ))}
        </div>
      </main>
      <FooterBlog />
    </>
  );
}

import HeaderBlog from "@/components/headerBlog";
import FooterBlog from "@/components/footerBlog";
import Card from "@/components/card";
import * as motion from "motion/react-client";

const writingCards = [
  {
    title: `GRADUATION`,
    description: `I had the honor of giving my class's 2024 commencement speech.`,
    endpoint: `/commencement-speech`,
    imageSrc: `/graduation.png`,
    buttonText: `Listen to it here`,
  },
  {
    title: `GIVE & TAKE`,
    description: `This short dystopian piece awarded me 3rd place in a micro-science-fiction competition when I was 17.`,
    endpoint: `/give-and-take`,
    imageSrc: `/giveAndTake.png`,
    buttonText: `Read more`,
  },
];

export default function Writing() {
  return (
    <>
      <HeaderBlog />
      <main className="bg-peach font-mono font-light grid justify-items-center h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-48 justify-items-center w-3/4 py-12">
          {writingCards.map((w, idx) => (
            <div key={w.endpoint} className="col-span-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.2,
                  delay: idx * 0.2,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Card
                  title={w.title}
                  titleClickable={false}
                  description={w.description}
                  endpoint={w.endpoint}
                  imageSrc={w.imageSrc}
                  borderColor="[#d98586]"
                  buttonText={w.buttonText}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </main>
      <FooterBlog />
    </>
  );
}

import HeaderBlog from "@/components/headerBlog";
import FooterBlog from "@/components/footerBlog";
import Link from "next/link";
import Card from "@/components/card";
import * as motion from "motion/react-client";

const plantCards = [
  {
    title: `flowering snake plant`,
    description: `Under the right conditions, snake plants can flower during the spring`,
    endpoint: `snake-plants/flowering`,
    imageSrc: `/placeholder.png`,
    buttonText: ``,
  },
  {
    title: `annual poinsettia blooms`,
    description: `With a bit of planning, you can push your poinsettias to bloom every year`,
    endpoint: `poinsettias/blooms`,
    imageSrc: `/placeholder.png`,
    buttonText: ``,
  },
  {
    title: `bolting cilantro`,
    description: `[placeholder]`,
    endpoint: `cilantro/bolting`,
    imageSrc: `/placeholder.png`,
    buttonText: ``,
  },
];

export default function Plants() {
  return (
    <>
      <HeaderBlog />
      <main className="bg-lime-100 font-mono text-sm font-light">
        <div className="grid justify-items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:gap-x-24 lg:gap-56 justify-items-center md:w-3/4 py-12">
            {plantCards.map((p, idx) => (
              <div key={p.endpoint} className="col-span-1">
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
                    title={p.title}
                    titleClickable={true}
                    description={p.description}
                    endpoint={p.endpoint}
                    imageSrc={p.imageSrc}
                    borderColor="green-forest"
                    buttonText={p.buttonText}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
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

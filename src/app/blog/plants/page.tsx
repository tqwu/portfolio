import HeaderBlog from "@/components/headerBlog";
import FooterBlog from "@/components/footerBlog";
import Link from "next/link";
import Card from "@/components/card";

const plantCards = [
  {
    title: `flowering snake plant`,
    description: `Under the right conditions, snake plants can flower during the spring`,
    endpoint: `/snake-plants/flowering`,
    imageSrc: `/placeholder.png`,
    buttonText: ``,
  },
  {
    title: `annual poinsettia blooms`,
    description: `With a bit of planning, you can push your poinsettias to bloom every year`,
    endpoint: `/poinsettias/blooms`,
    imageSrc: `/placeholder.png`,
    buttonText: ``,
  },
  {
    title: `bolting cilantro`,
    description: `[placeholder]`,
    endpoint: `/cilantro/bolting`,
    imageSrc: `/placeholder.png`,
    buttonText: ``,
  },
];

export default function Plants() {
  return (
    <>
      <HeaderBlog />
      <main className="bg-lime-100 font-mono text-sm font-light">
        <div>This is the Plants page.</div>
        <div className="grid justify-items-center">
          <div className="grid grid-cols-4 gap-48 justify-items-center w-3/4 py-12">
            {plantCards.map((p) => (
              <div key={p.endpoint} className="col-span-1">
                <Card
                  title={p.title}
                  titleClickable={true}
                  description={p.description}
                  endpoint={p.endpoint}
                  imageSrc={p.imageSrc}
                  buttonText={p.buttonText}
                />
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

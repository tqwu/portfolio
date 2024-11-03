import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  endpoint: string;
  imageSrc: string;
}

export default function Card({
  title,
  description,
  endpoint,
  imageSrc,
}: CardProps) {
  return (
    <>
      <main className="">
        <Image
          className=""
          src={`${imageSrc}`}
          alt=""
          width={450}
          height={450}
        />
      </main>
    </>
  );
}

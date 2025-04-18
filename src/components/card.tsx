import Image from "next/image";
import Link from "next/link";
import ButtonWithArrow from "@/components/buttonWithArrow";
import * as motion from "motion/react-client";

interface CardProps {
  title: string;
  titleClickable: boolean;
  description: string;
  endpoint: string;
  imageSrc: string;
  borderColor: string;
  buttonText: string;
}

export default function Card({
  title,
  titleClickable,
  description,
  endpoint,
  imageSrc,
  borderColor,
  buttonText,
}: CardProps) {
  return (
    <>
      <main className="p-6 flex items-start">
        <div className="flex flex-col items-center w-96 text-center gap-2">
          {!titleClickable && <div className="text-3xl">{title}</div>}
          <motion.div
            whileHover={{
              scale: [null, 1.08],
              transition: {
                duration: 0.3,
                ease: ["easeInOut", "easeOut"],
              },
            }}
          >
            <Link href={endpoint}>
              <Image
                className={`rounded-sm border-2 border-${borderColor}`}
                src={`${imageSrc}`}
                alt=""
                width={300}
                height={300}
                blurDataURL={imageSrc}
                placeholder="blur"
              />
            </Link>
          </motion.div>
          {titleClickable && (
            <Link
              href={endpoint}
              className="pt-2 text-2xl text-blue-600 hover:text-blue-300"
            >
              {title}
            </Link>
          )}
          <div className="text-sm px-6 py-3">{description}</div>
          {!titleClickable && (
            <ButtonWithArrow endpoint={endpoint} buttonText={buttonText} />
          )}
        </div>
      </main>
    </>
  );
}

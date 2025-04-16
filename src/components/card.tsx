import Image from "next/image";
import Link from "next/link";
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
            <Link href={endpoint}>
              <button className="text-sm font-semibold flex items-center gap-2 hover:opacity-50">
                {buttonText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </Link>
          )}
        </div>
      </main>
    </>
  );
}

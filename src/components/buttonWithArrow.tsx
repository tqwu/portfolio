import Link from "next/link";

interface ButtonWithArrowProps {
  buttonText: string;
  endpoint: string;
}

export default function ButtonWithArrow({
  buttonText,
  endpoint,
}: ButtonWithArrowProps) {
  return (
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
  );
}

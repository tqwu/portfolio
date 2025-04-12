"use client";
import Link from "next/link";

import { Popover } from "@headlessui/react";
import Divider from "@/components/divider";

export default function HeaderBlog() {
  return (
    <header className="top-0 bg-amber-100 font-mono font-light text-amber-950">
      <Divider />
      <div className="p-6 grid place-items-center gap-2 text-4xl">
        <div className="flex gap-4 place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width="25"
            height="25"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-0.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <Link href="/blog" className="">
            teresa wu
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width="25"
            height="25"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-0.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>
      </div>
      <hr className="border-0.5 border-amber-950" />
      <nav
        className="mx-auto grid max-w-7xl place-items-center m-3"
        aria-label="Navigation Panel Desktop"
      >
        <Popover.Group className="flex gap-x-12">
          <Link href="/blog" className="text-sm leading-6 hover:opacity-50">
            LANDING PAGE
          </Link>
          <Link
            href="/blog/writing"
            className="text-sm leading-6 hover:opacity-50"
          >
            WRITING
          </Link>
          <Link
            href="/blog/fashion"
            className="text-sm leading-6 hover:opacity-50"
          >
            FASHION
          </Link>
          <Link
            href="/blog/plants"
            className="text-sm leading-6 hover:opacity-50"
          >
            PLANTS
          </Link>
          <Link
            href="/blog/random"
            className="text-sm leading-6 hover:opacity-50"
          >
            RANDOM
          </Link>
          <Link href="/" className="text-sm leading-6 hover:opacity-50">
            BACK HOME
          </Link>
        </Popover.Group>
      </nav>
      <hr className="border-0.5 border-amber-950" />
    </header>
  );
}

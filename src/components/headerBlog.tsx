"use client";
import Link from "next/link";

import { Popover } from "@headlessui/react";
import Divider from "@/components/divider";

export default function HeaderBlog() {
  return (
    <header className="top-0 bg-amber-100 font-mono font-light text-amber-950">
      <Divider />
      <div className="p-6 grid place-items-center text-4xl">
        <Link href="/blog" className="">
          teresa wu
        </Link>
      </div>
      <hr className="border-0.5 border-amber-950" />
      <nav
        className="mx-auto grid max-w-7xl place-items-center m-3"
        aria-label="Navigation Panel Desktop"
      >
        <Popover.Group className="flex gap-x-12">
          <Link
            href="/blog/writing"
            className="text-sm leading-6 hover:text-yellow-600"
          >
            WRITING
          </Link>
          <Link
            href="/blog/fashion"
            className="text-sm leading-6 hover:text-yellow-600"
          >
            FASHION
          </Link>
          <Link
            href="/blog/plants"
            className="text-sm leading-6 hover:text-yellow-600"
          >
            PLANTS
          </Link>
          <Link href="/" className="text-sm leading-6 hover:text-yellow-600">
            BACK HOME
          </Link>
        </Popover.Group>
      </nav>
      <hr className="border-0.5 border-amber-950" />
    </header>
  );
}

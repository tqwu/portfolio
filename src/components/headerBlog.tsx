"use client";
import Link from "next/link";

import { useState, Fragment } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function HeaderBlog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-amber-100 font-mono font-light text-amber-950">
      <div className="p-8 grid place-items-center text-4xl">
        <Link
            href="/blog"
            className=""
            >
            teresa wu
        </Link>
      </div>
      <hr className="border-0.5 border-amber-950"/>
      <nav
        className="mx-auto grid max-w-7xl place-items-center p-5 lg:px-8"
        aria-label="Navigation Panel Desktop"
      >
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/blog/writing"
            className="text-base leading-6 hover:text-yellow-600"
          >
            WRITING
          </Link>
          <Link
            href="/blog/fashion"
            className="text-base leading-6 hover:text-yellow-600"
          >
            FASHION
          </Link>
          <Link
            href="/blog/plants"
            className="text-base leading-6 hover:text-yellow-600"
          >
            PLANTS
          </Link>
          <Link
            href="/"
            className="text-base leading-6 hover:text-yellow-600"
          >
            BACK HOME
          </Link>
        </Popover.Group>
      </nav>
      <hr className="border-0.5 border-amber-950"/>
    </header>
  );
}

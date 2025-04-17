"use client";
import Link from "next/link";

import { Dialog, Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Divider from "@/components/divider";
import { Fragment, useState } from "react";

export default function HeaderBlog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="top-0 bg-amber-100 font-mono font-light text-amber-950">
      <Divider />

      {/* Header Name Start */}
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

        {/* Menu Button Start */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="text-sm underline" aria-hidden="true">
              MENU
            </div>
          </button>
        </div>
        {/* Menu Button End */}
      </div>
      {/* Header Name End */}

      {/* Mobile View Start */}
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen}>
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
          </Transition.Child>

          <div className="fixed inset-0 z-10" />

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-700 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-500 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-64 overflow-y-auto bg-pastel-green-dark text-amber-950 px-6 py-6 sm:max-w-sm">
              <div className="flex items-center justify-end pr-4">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="grid place-items-center gap-4 pt-5 font-mono">
                <Link href="/blog" className="leading-6 hover:opacity-50">
                  landing page
                </Link>
                <Link
                  href="/blog/writing"
                  className="leading-6 hover:opacity-50"
                >
                  writing
                </Link>
                <Link
                  href="/blog/fashion"
                  className="leading-6 hover:opacity-50"
                >
                  fashion
                </Link>
                <Link
                  href="/blog/plants"
                  className="leading-6 hover:opacity-50"
                >
                  plants
                </Link>
                <Link
                  href="/blog/random"
                  className="leading-6 hover:opacity-50"
                >
                  random
                </Link>
                <Link href="/" className="leading-6 hover:opacity-50">
                  back home
                </Link>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
      {/* Mobile View End */}

      <hr className="border-0.5 border-amber-950 hidden lg:block" />

      {/* Desktop Navigation Menu Start */}
      <nav
        className="hidden lg:mx-auto lg:m-3 lg:grid max-w-7xl place-items-center"
        aria-label="Navigation Panel Desktop"
      >
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link href="/blog" className="text-sm leading-6 hover:opacity-50">
            landing page
          </Link>
          <Link
            href="/blog/writing"
            className="text-sm leading-6 hover:opacity-50"
          >
            writing
          </Link>
          <Link
            href="/blog/fashion"
            className="text-sm leading-6 hover:opacity-50"
          >
            fashion
          </Link>
          <Link
            href="/blog/plants"
            className="text-sm leading-6 hover:opacity-50"
          >
            plants
          </Link>
          <Link
            href="/blog/random"
            className="text-sm leading-6 hover:opacity-50"
          >
            random
          </Link>
          <Link href="/" className="text-sm leading-6 hover:opacity-50">
            back home
          </Link>
        </Popover.Group>
        {/* Desktop Navigation Menu End */}
      </nav>
      <hr className="border-0.5 border-amber-950" />
    </header>
  );
}

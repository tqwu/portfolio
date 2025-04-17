"use client";
import Link from "next/link";

import { useState, Fragment } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function HeaderMain() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-navy">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Navigation Panel Desktop"
      >
        {/* Logos Start */}
        <div className="flex flex-1 gap-4">
          {/* Socials Begin */}
          <div className="flex flex-row gap-4">
            {/* Github */}
            <a
              href="https://github.com/tqwu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-50"
            >
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 496 512"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </span>
            </a>
            {/* LinkedIn */}
            <a
              href="http://linkedin.com/in/tqwu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-50"
            >
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
            </a>
          </div>
          {/* Socials End */}

          <span className="text-3xl leading-4 text-slate-200">&middot;</span>
          <span className="text-base font-semibold leading-6 text-slate-200">
            Teresa Wu
          </span>
        </div>
        {/* Logos End */}

        {/* Menu Button Start */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* Menu Button End */}

        {/* Desktop Navigation Menu Start */}
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            href="#top"
            className="text-base font-semibold leading-6 text-slate-200 hover:text-slate-500"
          >
            Home
          </Link>
          <Link
            href="#skills"
            className="text-base font-semibold leading-6 text-slate-200 hover:text-slate-500"
          >
            Skills
          </Link>
          <Link
            href="#experience"
            className="text-base font-semibold leading-6 text-slate-200 hover:text-slate-500"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="text-base font-semibold leading-6 text-slate-200 hover:text-slate-500"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="text-base font-semibold leading-6 text-slate-200 hover:text-slate-500"
          >
            Blog
          </Link>
        </Popover.Group>
        {/* Desktop Navigation Menu End */}
      </nav>

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
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-64 overflow-y-auto bg-navy px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-end pr-4">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-slate-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="flex justify-center mt-6">
                <div className="-my-6 divide-y divide-gray-950/10">
                  <div className="space-y-2 pt-6 pb-4">
                    <Link
                      href="#top"
                      className="-mx-3 block rounded-lg px-3 py-1 text-base text-center font-semibold leading-7 text-slate-200 hover:text-slate-500"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="#skills"
                      className="-mx-3 block rounded-lg px-3 py-1 text-base text-center font-semibold leading-7 text-slate-200 hover:text-slate-500"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Skills
                    </Link>
                    <Link
                      href="#experience"
                      className="-mx-3 block rounded-lg px-3 py-1 text-base text-center font-semibold leading-7 text-slate-200 hover:text-slate-500"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Experience
                    </Link>
                    <Link
                      href="#projects"
                      className="-mx-3 block rounded-lg px-3 py-1 text-base text-center font-semibold leading-7 text-slate-200 hover:text-slate-500"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Projects
                    </Link>
                    <Link
                      href="/blog"
                      className="-mx-3 block rounded-lg px-3 py-1 text-base text-center font-semibold leading-7 text-slate-200 hover:text-slate-500"
                    >
                      Blog
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
      {/* Mobile View End */}
    </header>
  );
}

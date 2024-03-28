"use client";
import Link from "next/link";

import { useState, Fragment } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-navy">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Navigation Panel Desktop"
      >
        {/* Logo Start */}
        <div className="lg:flex lg:flex-1 lg:justify-start">
          <span className="text-base font-semibold leading-6 text-slate-200">
            Teresa Wu
          </span>
        </div>
        {/* Logo End */}

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

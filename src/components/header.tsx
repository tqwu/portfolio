'use client'
import Link from 'next/link'

import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 bg-white">

      {/* Desktop View Start */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Navigation Panel Desktop">

        {/* Logo Start */}
        <div className="lg:flex lg:flex-1 lg:justify-start">
          <span className="text-base font-semibold leading-6 text-gray-900">
            Teresa Wu
          </span>
        </div>
        {/* Logo End */}
        
        {/* Menu Button Start */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* Menu Button End */}

        {/* Navigation Menu Start */}
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link href="#top" className="text-base font-semibold leading-6 text-gray-900 hover:text-gray-300">
            Home
          </Link>
          <Link href="#skills" className="text-base font-semibold leading-6 text-gray-900 hover:text-gray-300">
            Skills
          </Link>
          <Link href="#experience" className="text-base font-semibold leading-6 text-gray-900 hover:text-gray-300">
            Experience
          </Link>
          <Link href="#projects" className="text-base font-semibold leading-6 text-gray-900 hover:text-gray-300">
            Projects
          </Link>
          <Link href="#about-me" className="text-base font-semibold leading-6 text-gray-900 hover:text-gray-300">
            About Me
          </Link>
        </Popover.Group>
        {/* Navigation Menu End */}

        {/* Resume Start */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="text-base font-semibold leading-6 text-gray-900 hover:text-gray-300">
            Resume
          </Link>
        </div>
        {/* Resume End */}

      </nav>
      {/* Desktop View End */}


      {/* Mobile View Start */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-64 overflow-y-auto bg-slate-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="flex justify-center mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">

              <div className="space-y-2 pt-6 pb-4">
                <Link
                  href="#top"
                  className="-mx-3 block rounded-lg px-3 py-1 text-base text-center font-semibold leading-7 text-gray-900 hover:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#skills"
                  className="-mx-3 block rounded-lg px-3 py-1 text-base text-center font-semibold leading-7 text-gray-900 hover:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Skills
                </Link>
                <Link
                  href="#experience"
                  className="-mx-3 block rounded-lg px-3 py-1 text-base text-center font-semibold leading-7 text-gray-900 hover:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Experience
                </Link>
                <Link
                  href="#projects"
                  className="-mx-3 block rounded-lg px-3 py-1 text-base text-center font-semibold leading-7 text-gray-900 hover:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="#about-me"
                  className="-mx-3 block rounded-lg px-3 py-1 text-base text-center font-semibold leading-7 text-gray-900 hover:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Me
                </Link>
              </div>

              <div className="py-3">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base text-center font-semibold leading-7 text-gray-900 hover:text-gray-300"
                >
                  Resume
                </Link>
              </div>

            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      {/* Mobile View End */}

    </header>
  )
}

"use client";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { Fragment } from "react";
import Image from "next/image";
import logo from "@/components/logo.png";
import mobilelogo from "@/components/mobile-logo.png";
function Navbar() {
  return (
    <Popover className=" mx-auto flex items-center justify-around border-b-2 px-6 py-2 h-16 text-black grow bg-white">
      <h1 className=" font-bold ">
        <Link href="/">
          <Image src={logo} alt="logo" className="w-[100px]" />
        </Link>
      </h1>
      <div className=" grow  md:grow-0">
        <div className=" hidden sm:flex items-center justify-center gap-2 md:gap-8">
          <Link href="/">Home</Link>
          <Link href="/#vision">Vision</Link>
          <Link href="/#mission">Mission</Link>
          <Link href="/#team">Core Team</Link>
          <Link href="/#contact">Contact us</Link>
          <Link href="/newsletter">Newsletter</Link>
        </div>

        <div className=" flex grow items-center justify-end sm:hidden w-full ">
          <Popover.Button className=" inline-flex items-center justify-center rounded-md bg-black p-2 text-white-400   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray">
            <span className=" sr-only ">Open menu</span>
            <Bars3Icon className=" h-6 w-6 text-white" aria-hidden="true" />
          </Popover.Button>
        </div>

        <Transition
          as={Fragment}
          enter=" duration-200 ease-out "
          enterFrom=" opacity-0 scale-95 "
          enterTo=" opacity-100 scale-100 "
          leave=" duration-100 ease-in"
          leaveFrom="duration-100 scale-100  "
          leaveTo=" opacity-0 scale-95 "
        >
          <Popover.Panel className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50 ">
            <div className=" rounded-lg bg-black shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50 text-white ">
              <div className=" px-5 pt-5 pb-6 ">
                <div className=" flex items-center justify-between w-full ">
                  <Image
                    src={mobilelogo}
                    alt="logo"
                    className="w-[40px] rounded-full"
                  />
                  <div className=" mr-2 ">
                    <Popover.Button className=" inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
                      <span className=" sr-only ">Close menu</span>
                      <XMarkIcon className=" h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className=" mt-6 ">
                  <nav className="grid gap-y-8">
                    <Link
                      href="/"
                      className=" focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 hover:bg-white hover:text-black py-2 rounded-lg ease duration-200"
                    >
                      <Popover.Button className="">
                        <span className=" sr-only ">Close menu</span>
                        Home
                      </Popover.Button>
                    </Link>
                    <Link
                      href="/#vision"
                      className=" focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 hover:bg-white hover:text-black py-2 rounded-lg ease duration-200 "
                    >
                      <Popover.Button className="">
                        <span className=" sr-only ">Close menu</span>
                        Vision
                      </Popover.Button>
                    </Link>
                    <Link
                      href="/#mission"
                      className=" focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 hover:bg-white hover:text-black py-2 rounded-lg ease duration-200 "
                    >
                      <Popover.Button className="">
                        <span className=" sr-only ">Close menu</span>
                        Mission
                      </Popover.Button>
                    </Link>
                    <Link
                      href="/#team"
                      className=" focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2  hover:bg-white hover:text-black py-2 rounded-lg ease duration-200"
                    >
                      <Popover.Button className="">
                        <span className=" sr-only ">Close menu</span>
                        Core Team
                      </Popover.Button>
                    </Link>
                    <Link
                      href="/#contact"
                      className=" focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 hover:bg-white hover:text-black py-2 rounded-lg ease duration-200"
                    >
                      <Popover.Button className="">
                        <span className=" sr-only ">Close menu</span>
                        Contact us
                      </Popover.Button>
                    </Link>
                    <Link
                      href="/newsletter"
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 hover:bg-white hover:text-black py-2 rounded-lg ease duration-200"
                    >
                      <Popover.Button className="">
                        <span className=" sr-only ">Close menu</span>
                        newsletter
                      </Popover.Button>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </div>
    </Popover>
  );
}
export default Navbar;

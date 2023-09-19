"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between flex-nowrap w-full pb-3 border-b-[1px] border-neutral-500">
      <div className="sm:text-3xl text-xl font-bold inline-block">
        <Link href="/" className="inline-block">
          Pelumi Adetoye
        </Link>
      </div>
      <div
        className="sm:hidden cursor-pointer"
        onClick={() => setShowNav(!showNav)}
      >
        <GiHamburgerMenu size={24} />
      </div>
      <nav
        className={`max-sm:absolute max-sm:w-full left-0 transition ease-in duration-300 ${
          showNav ? "top-16 visible" : "max-sm:invisible top-0"
        }`}
      >
        <ul className="flex mt-8 sm:mt-0 items-center max-sm:text-sm justify-between max-sm:justify-around">
          <li
            className={`py-1 hover:bg-[#f7a025] transition ease-in duration-300 delay-100 rounded mx-1 ${
              showNav ? "max-sm:translate-x-0" : "max-sm:-translate-x-32"
            }`}
          >
            <Link
              href="https://docs.google.com/document/d/1jA2l3StIbzDNkNtgKBWB3VkozDbN-rHHaqb_xQyYzts/view"
              target="_blank"
              className="px-2 sm:text-xl"
              rel="noopener noreferrer"
            >
              Resume
            </Link>
          </li>
          <li
            className={`py-1 hover:bg-[#f7a025]  rounded mx-1 transition ease-in duration-300 delay-200 ${
              showNav ? "max-sm:translate-x-0" : "max-sm:-translate-x-40"
            }`}
          >
            <Link href="#projects" className="px-2 sm:text-xl">
              Projects
            </Link>
          </li>
          <li
            className={`py-1 hover:bg-[#f7a025]  rounded mx-1 transition ease-in duration-300 delay-200 ${
              showNav ? "max-sm:translate-x-0" : "max-sm:-translate-x-40"
            }`}
          >
            <Link
              href="https://wa.link/0wqvvf"
              target="_blank"
              className="px-2 sm:text-xl"
              rel="noopener noreferrer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

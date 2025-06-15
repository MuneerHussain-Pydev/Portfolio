"use client";
import React, { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 90);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={` border-gray-200  fixed top-0 z-50 w-full
      ${
        isScrolled
          ? " bg-[#0a0a0a]/40 backdrop-blur-sm"
          : "bg-[#0a0a0a]"
      }
    `}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">
            <span className="text-red-700 font-bold text-4xl">M</span>uneer{" "}
            <span className="text-red-700 font-bold text-4xl">H</span>ussain
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul
            className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   ${
              isScrolled
                ? "bg-transparent backdrop-filter-sm"
                : "bg-[#0a0a0a]"
            } border-gray-700`}
          >
            <li>
              <a
                href="/#home"
                className="block py-2 px-3 text-white bg-red-700 rounded-sm md:bg-transparent md:text-red-700 md:p-0 text-white md:text-red-600"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/#about"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 text-white md:hover:text-red-700 hover:bg-[#1f1f1f] hover:text-white md:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/#services"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 text-white md:hover:text-red-700 hover:bg-[#1f1f1f] hover:text-white md:hover:bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/#projects"
               className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 text-white md:hover:text-red-700 hover:bg-[#1f1f1f] hover:text-white md:hover:bg-transparent"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 text-white md:hover:text-red-700 hover:bg-[#1f1f1f] hover:text-white md:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

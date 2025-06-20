import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] mt-16">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 ">
            <a className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-red-600">
                Muneer's Portfolio
              </span>
            </a>
            <p className="md:w-1/2 text-sm text-justify text-red-200">
              Passionate Software Engineer with 2+ years of experience in MERN
              stack. I craft seamless frontend and powerful backend solutions.
              Always exploring, learning, and building cool things.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-lg font-semibold text-red-600 uppercase dark:text-red-600">
                Services
              </h2>
              <ul className="text-red-200 dark:text-red-200">
                <li className="mb-1">
                  <a href="#services" className="hover:underline">
                    REST API
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#services" className="hover:underline">
                    Responsive UI
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#services" className="hover:underline">
                    BI Dashboards
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#services" className="hover:underline">
                    Management Systems
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-xl font-semibold text-red-600 uppercase dark:text-red-600">
                Links
              </h2>
              <ul className="text-red-200 dark:text-red-200">
                <li className="mb-1">
                  <a href="#home" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#about" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#services" className="hover:underline">
                    Services
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#projects" className="hover:underline">
                    Projects
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Muneer Hussain
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
            target="_blank"
              href="https://www.facebook.com/muneer.hussain.12345"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="discord.com/users/609737600822935582"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>

            <a
            target="_blank"
              href="https://github.com/MuneerHussain-Pydev"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

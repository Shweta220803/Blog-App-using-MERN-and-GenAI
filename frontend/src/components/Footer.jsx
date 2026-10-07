import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { footer_data } from "../assets/assets";

const Footer = () => {
  return (
    <footer
      className="
        border-t border-gray-200 dark:border-gray-800
        bg-gray-50 dark:bg-[#0a0c10]
        text-gray-600 dark:text-gray-400
        transition-colors duration-300
      "
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Main Footer */}
        <div
          className="
            flex flex-col
            gap-12
            border-b border-gray-200 dark:border-gray-800
            py-14
            md:flex-row
            md:items-start
            md:justify-between
            lg:gap-20
          "
        >
          {/* Brand Column */}
          <div className="max-w-md">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-xl
                  bg-gradient-to-br from-emerald-600 to-green-600
                  shadow-md shadow-violet-500/20
                "
              >
                <span className="text-lg font-bold text-white">I</span>
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  InkForge
                  <span className="text-primary/100 dark:text-primary/45">
                    {" "}
                    AI
                  </span>
                </h2>

                <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500">
                  AI-Powered Publishing
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-[410px] text-sm leading-7 text-gray-500 dark:text-gray-400">
              A modern AI-powered publishing platform built for creators,
              writers, and curious minds. Create meaningful content, discover
              new ideas, and share your stories with the world.
            </p>
          </div>

          {/* Footer Links */}
          <div
            className="
              grid
              grid-cols-2
              gap-10
              sm:grid-cols-3
              md:w-[50%]
              lg:w-[45%]
            "
          >
            {footer_data.map((section, index) => (
              <div key={index}>
                <h3
                  className="
                    mb-4
                    text-sm font-semibold
                    text-gray-900 dark:text-white
                  "
                >
                  {section.title}
                </h3>

                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="
                          group
                          flex items-center gap-1
                          text-sm
                          text-gray-500 dark:text-gray-400
                          transition-colors duration-200
                          hover:text-primary/100
                          dark:hover:text-primary/45
                        "
                      >
                        {link}

                        <FiArrowUpRight
                          className="
                            text-xs
                            opacity-0
                            transition-all duration-200
                            group-hover:translate-x-0.5
                            group-hover:-translate-y-0.5
                            group-hover:opacity-100
                          "
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          className="
            flex flex-col
            items-center
            justify-between
            gap-3
            py-5
            text-center
            text-xs
            text-gray-500 dark:text-gray-500
            sm:flex-row
            sm:text-left
          "
        >
          <p>
            © {new Date().getFullYear()} InkForge AI. All rights reserved.
          </p>

          <p className="text-gray-400 dark:text-gray-600">
            Built with MERN & AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

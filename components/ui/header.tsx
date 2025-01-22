
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";
import logo from "../../public/images/logo.png";
import { CiMenuFries } from "react-icons/ci";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  let no_of_clicks = 0;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const windowResize = () => {
      if (no_of_clicks !== 0) handleMenuToggle();
      const uls = document.querySelectorAll(".navigation-li");
      for (let i = 0; i < uls.length; i++) {
        if (window.innerWidth < 480) {
          if (i !== uls.length - 1) uls[i].classList.add("hidden");
          else uls[i].classList.remove("hidden");
        } else {
          if (i !== uls.length - 1) uls[i].classList.remove("hidden");
          else uls[i].classList.add("hidden");
        }
      }
    };

    windowResize();
    window.addEventListener("resize", windowResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", windowResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    const ulMobile = document.querySelector(".navigation-ul-mobile");
    if (ulMobile) {
      ulMobile.classList.toggle("hidden");
      const heroHeaderMain = document.querySelector(".hero-header-main");
      if (heroHeaderMain) {
        heroHeaderMain.classList.toggle("pt-[16rem]");
      }
      no_of_clicks++;
    }
  };

  return (
    <header className={`z-30 mt-2 w-full md:mt-5 flex flex-col justify-center items-center pb-8 transition-all duration-200 ${
      isScrolled ? "h-16 shadow-md" : "h-20 "}`} >
      <div className="fixed mx-auto max-w-6xl px-4 sm:px-6 w-full top-4">
      <div
          className={`relative rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm ${
            isScrolled
              ? "py-2 bg-gray-900/90 text-sm"
              : "py-4 bg-gray-900/90 text-base"
          } transition-all duration-200`}
        >
           <div className="relative flex items-center justify-between gap-3">
            {/* Logo */}
            <div className="flex flex-1 items-center">
            <img src={logo.src} alt="logo" width={150} height={70} className={`transition-transform ${isScrolled ? "scale-90" : "scale-130"}`} 
               onClick={() =>
                window.scrollTo(0, document.body.scrollHeight / 0)
              }/>
            </div>

            {/* Desktop Navigation */}
            <ul
              className={`navigation-ul flex flex-1 items-center justify-end gap-3 transition-all ${
                isScrolled ? "gap-2" : "gap-4"
              }`}
            >
              <li className="navigation-li">
                <button
                  className={`btn-sm relative transition-all duration-200 ${
                    isScrolled
                      ? "text-gray-300 text-sm py-2"
                      : "text-gray-200 text-base py-3"
                  }`}
                  onClick={() =>
                    window.scrollTo(0, document.body.scrollHeight / 11)
                  }
                >
                  ABOUT
                </button>
              </li>
              <li className="navigation-li">
                <button
                  className={`btn-sm relative transition-all duration-200 ${
                    isScrolled
                      ? "text-gray-300 text-sm py-2"
                      : "text-gray-200 text-base py-3"
                  }`}
                  onClick={() =>
                    window.scrollTo(0, document.body.scrollHeight / 3)
                  }
                >
                  PRODUCTS
                </button>
              </li>
              <li className="navigation-li">
                <button
                  className={`relative rounded-3l btn-sm transition-all duration-200 ${
                    isScrolled
                      ? "bg-indigo-600 text-white text-sm py-2"
                      : "bg-indigo-600 text-white text-base py-3"
                  }`}
                  onClick={() =>
                    window.scrollTo(0, document.body.scrollHeight - 1 / 3)
                  }
                >
                  SCHEDULE DEMO
                </button>
              </li>
              <li
                id="mobile-menu"
                className={`navigation-li hidden transition-transform ${
                  isScrolled ? "scale-90" : "scale-100"
                }`}
                onClick={handleMenuToggle}
              >
                <Link href="" className="btn-sm relative text-gray-300">
                  <CiMenuFries />
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Navigation */}
          <ul className="navigation-ul-mobile flex flex-col items-end gap-6 p-6 pt-12 hidden">
            <li>
              <button
                className={`btn-sm relative transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-300 text-sm py-2"
                    : "text-gray-200 text-base py-3"
                }`}
                onClick={() =>
                  window.scrollTo(0, document.body.scrollHeight / 11)
                }
              >
                ABOUT
              </button>
            </li>
            <li>
              <button
                className={`btn-sm relative transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-300 text-sm py-2"
                    : "text-gray-200 text-base py-3"
                }`}
                onClick={() =>
                  window.scrollTo(0, document.body.scrollHeight / 3)
                }
              >
                PRODUCTS
              </button>
            </li>
            <li>
              <button
                className={`relative rounded-3l btn-sm transition-all duration-300 ${
                  isScrolled
                    ? "bg-indigo-600 text-white text-sm py-2"
                    : "bg-indigo-600 text-white text-base py-3"
                }`}
                onClick={() =>
                  window.scrollTo(0, document.body.scrollHeight - 1 / 3)
                }
              >
                SCHEDULE DEMO
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}


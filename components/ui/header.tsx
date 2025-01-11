"use client";

import React, { useEffect } from 'react';
import Link from "next/link";
import Logo from "./logo";
import { CiMenuFries } from "react-icons/ci";

// function windowResize() {
//   if (window.innerWidth < 480) {
//     const uls = document.querySelectorAll("li");
//     uls.forEach((ul) => {
//       if (ul.classList.contains("hidden")) ul.classList.remove("hidden");
//       else ul.classList.add("hidden");
//     });
//   }
//   else{
//     const uls = document.querySelectorAll("li");
//     uls.forEach((ul) => {
//       if (ul.classList.contains("hidden")) ul.classList.remove("hidden");
//       else ul.classList.add("hidden");
//     });
//   }
// }

export default function Header() {
  let no_of_clicks = 0;

  useEffect(() => {
    const windowResize = () => {
      if (no_of_clicks != 0) handleMenuToggle();
      const uls = document.querySelectorAll(".navigation-li");
      for (let i=0; i<uls.length; i++){
        if (window.innerWidth < 480) {
          if (i != uls.length-1) uls[i].classList.add("hidden");
          else uls[i].classList.remove("hidden");
        }
        else{
          if (i != uls.length-1) uls[i].classList.remove("hidden");
          else uls[i].classList.add("hidden");
        }
      }
    };
    windowResize();
    window.addEventListener("resize", windowResize);
  }, []);

  const handleMenuToggle = () => {
    const ul = document.querySelector(".navigation-ul");
    const ulMobile = document.querySelector(".navigation-ul-mobile");
    if (ul && ulMobile) {
      if (ulMobile.classList.contains("hidden") && window.innerWidth < 480) {
        ulMobile.classList.remove("hidden");
        const heroHeaderMain = document.querySelector(".hero-header-main");
        if (heroHeaderMain) heroHeaderMain.classList.add('pt-[16rem]');
        no_of_clicks++;
      }
      else {
        ulMobile.classList.add("hidden");
        const heroHeaderMain = document.querySelector(".hero-header-main");
        if (heroHeaderMain) heroHeaderMain.classList.remove('pt-[16rem]');
        no_of_clicks++;
      }
    }
  };

  return (
    <header className="z-30 mt-2 w-full md:mt-5 flex flex-col justify-center items-center pb-8">
      <div className="fixed mx-auto max-w-6xl px-4 sm:px-6 w-full top-4">
        <div className="relative rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          <div className='relative flex h-14 items-center justify-between gap-3'>
            {/* Site branding */}
            <div className="flex flex-1 items-center">
              <Logo />
            </div>

            {/* Desktop sign in links */}
            <ul className="navigation-ul flex flex-1 items-center justify-end gap-3">
              <li className='navigation-li'>
                {/* <Link
                  href="/components/hero-home"
                  className="btn-sm relative w-[100px] bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                >
                  <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle font-semibold text-transparent"
                  data-aos="fade-up">ABOUT</span>
                </Link> */}
                <button
                  className="btn-sm relative w-[100px] bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                 onClick={() => window.scrollTo(0, document.body.scrollHeight / 11)}>
                   <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle font-semibold text-transparent"
                  data-aos="fade-up">ABOUT</span>
                </button>
              </li>
              <li className='navigation-li'>
                {/* <Link
                  href="/signin"
                  className="btn-sm relative w-[100px] bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                >
                  <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle font-semibold text-transparent"
                  data-aos="fade-up">PRODUCTS</span>
                </Link> */}
                <button
                  className="btn-sm relative w-[100px] bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                 onClick={() => window.scrollTo(0, document.body.scrollHeight / 3)}>
                   <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle font-semibold text-transparent"
                  data-aos="fade-up">PRODUCTS</span>
                </button>
              </li>
              <li className='navigation-li'>
                <button
                  className="btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
                 onClick={() => window.scrollTo(0, document.body.scrollHeight-1 / 3)}>
                  SCHEDULE DEMO
                </button>
              </li>
              <li id='mobile-menu' className="navigation-li hidden" onClick={handleMenuToggle}>
                <Link
                  href=""
                  className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                >
                  <CiMenuFries />
                </Link>
              </li>
            </ul>
          </div>
          <ul className="navigation-ul-mobile flex flex-col items-end justify-center gap-6 p-6 pt-12 hidden">
            <li>
              <button
                  className="btn-sm relative w-[100px] bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                 onClick={() => window.scrollTo(0, document.body.scrollHeight / 11)}>
                   <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle font-semibold text-transparent"
                  data-aos="fade-up">ABOUT</span>
              </button>
            </li>
            <li>
              <button
                  className="btn-sm relative w-[100px] bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                 onClick={() => window.scrollTo(0, document.body.scrollHeight / 3)}>
                   <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle font-semibold text-transparent"
                  data-aos="fade-up">PRODUCTS</span>
              </button>
            </li>
            <li>
              <button
                  className="btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
                 onClick={() => window.scrollTo(0, document.body.scrollHeight-1 / 3)}>
                  SCHEDULE DEMO
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

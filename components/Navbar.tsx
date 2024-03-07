"use client";

import Image from "next/image";
import React from "react";
import Logo from "@/public/images/The-cinema-fans-logo.png";
import LogCinema from "@/public/images/LOGO.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navbarLinks = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/movies",
      text: "Movies",
    },
    {
      path: "/series",
      text: "Series",
    },

    {
      path: "/news",
      text: "News",
    },
    {
      path: "/contact",
      text: "Contact",
    },
  ];
  const pathname = usePathname();

  return (
    <nav className="w-full flex justify-end items-center fixed z-50 p-6 bg-slate-950/80">
      <Link href={"/"} className="absolute left-10 -bottom-10">
        <Image src={LogCinema} alt="logo" width={240} height={100} />
      </Link>

      <ul className="flex gap-12 text-[#F8F7F4] [&>li]:text-lg pr-5">
        {navbarLinks.map((link, i) => {
          return (
            <li
              key={i}
              className={`${
                pathname == link.path
                  ? `text-white font-bold bg-sky-700 rounded-xl px-2 py-1`
                  : ` font-normal`
              } hover:text-white hover:font-bold`}
            >
              <Link href={link.path}>{link.text}</Link>
            </li>
          );
        })}
      </ul>
      {/* <div className="w-[300px]"></div> */}
      <div className="flex gap-2 px-5 text-[#F8F7F4] hidden">
        <Link href={"/login"}>
          <button className="px-6 py-2 rounded bg-slate-500">login</button>
        </Link>
        <Link href={"/register"}>
          <button className="px-6 py-2 rounded bg-slate-500">Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

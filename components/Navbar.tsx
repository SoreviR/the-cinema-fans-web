import Image from "next/image";
import React from "react";
import Logo from "@/public/images/The-cinema-fans-logo.png";
import Link from "next/link";

const Navbar = () => {
  const navbarLinks = [
    {
      path: "/movies",
      text: "Movies",
    },
    {
      path: "/series",
      text: "Series",
    },
    {
      path: "/reviews",
      text: "Reviews",
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
  return (
    <nav className="w-full flex justify-between items-center fixed z-50 p-6 bg-slate-950/80">
      <Link href={"/"}>
        <Image src={Logo} alt="logo" width={300} height={200} />
      </Link>

      <ul className="flex gap-8 text-white font-bold [&>li]:px-2 [&>li]:py-2 [&>li]:rounded-xl">
        {navbarLinks.map((link, i) => {
          return (
            <li key={i} className="hover:bg-white/20">
              <Link href={link.path}>{link.text}</Link>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-2 px-5 text-white">
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

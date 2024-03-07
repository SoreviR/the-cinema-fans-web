import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
  const iconsColor = "#00FFFF";
  const iconsSize = "2rem";

  return (
    <footer className="flex flex-col gap-4">
      <div className="flex justify-center p-5 pb-10 gap-5">
        <Link href={""}>
          <FaInstagram color={iconsColor} size={iconsSize} />
        </Link>
        <Link href={""}>
          <FaFacebook color={iconsColor} size={iconsSize} />
        </Link>
        <Link href={""}>
          <FaSquareXTwitter color={iconsColor} size={iconsSize} />
        </Link>
        <Link href={""}>
          <MdAlternateEmail color={iconsColor} size={iconsSize} />
        </Link>
      </div>
      <h4 className="text-[#F8F7F4] text-sm text-center pb-3">
        ©Copyrigth. All rights reserved.
      </h4>
    </footer>
  );
};

export default Footer;

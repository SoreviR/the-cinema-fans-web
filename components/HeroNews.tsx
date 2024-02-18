import Image from "next/image";
import React from "react";
import Dune2Poster from "@/public/images/Dune2-poster.jpeg";
import HeroNewsCard from "./HeroNewsCard";

const HeroNews = () => {
  return (
    <div className="h-screen">
      <Image
        className="rounded-lg"
        src={Dune2Poster}
        alt="Poster"
        width={800}
        height={800}
      />
      <div className="absolute right-20 top-1/2">
        <HeroNewsCard />
      </div>
    </div>
  );
};

export default HeroNews;

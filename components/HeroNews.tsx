import Image from "next/image";
import React, { useRef } from "react";
import Dune2Poster from "@/public/images/Dune2-poster.jpeg";
import HeroNewsCard from "./HeroNewsCard";
import { useScroll, useTransform, motion } from "framer-motion";

const HeroNews = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 2], [0, -150]);

  return (
    <div ref={container} className="flex flex-col w-scren h-screen p-5 gap-5 ">
      <h2 className="text-4xl text-white">News</h2>
      <div className="self-center">
        <Image
          className="rounded-lg"
          src={Dune2Poster}
          alt="Poster"
          width={800}
          height={800}
        />
        <motion.div
          transition={{
            duration: 2,
          }}
          initial={{
            x: 0,
            position: "absolute",
            top: 300,
          }}
          animate={{
            x: 700,
          }}
          exit={{
            x: 0,
            position: "absolute",
            top: 300,
          }}
          className="left-0 "
        >
          <HeroNewsCard />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroNews;

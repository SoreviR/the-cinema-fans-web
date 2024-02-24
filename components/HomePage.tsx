"use client";

import React, { useRef } from "react";
import HeroNews from "./HeroNews";
import MoviesCarousel from "./MoviesCarousel";
import ReviewsWrapper from "./ReviewsWrapper";
import { useScroll, useTransform, motion } from "framer-motion";

const HomePage = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <main
      ref={container}
      className="flex min-h-screen flex-col items-center justify-between p-10 pt-20 gap-20"
    >
      <motion.div style={{ y: sm }} className="pt-10">
        <HeroNews />
      </motion.div>

      <motion.div style={{ y: md }}>
        <MoviesCarousel />
      </motion.div>

      <motion.div style={{ y: lg }}>
        <ReviewsWrapper />
      </motion.div>

      <h2 className="text-white">News</h2>

      <h2 className="text-white">Recent news section</h2>
    </main>
  );
};

export default HomePage;

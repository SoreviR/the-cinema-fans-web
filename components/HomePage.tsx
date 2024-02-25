"use client";

import React, { useRef } from "react";
import HeroNews from "./HeroNews";
import MoviesCarousel from "./MoviesCarousel";
import ReviewsWrapper from "./ReviewsWrapper";
import { useScroll, useTransform, motion } from "framer-motion";
import SeriesCarousel from "./SeriesCarousel";

const HomePage = () => {
  const container = useRef(null);
  const { scrollYProgress, scrollXProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <main
      ref={container}
      className="flex min-h-screen flex-col items-center justify-between pt-28 gap-20"
    >
      <motion.div style={{ y: sm }} className="pt-10">
        <HeroNews />
      </motion.div>

      <motion.div style={{ y: md }} className="flex flex-col">
        <MoviesCarousel />
      </motion.div>

      <motion.div style={{ y: md }} className="flex flex-col">
        <SeriesCarousel />
      </motion.div>

      <motion.div style={{ y: md }}>
        <ReviewsWrapper />
      </motion.div>
    </main>
  );
};

export default HomePage;

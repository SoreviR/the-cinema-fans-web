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
      className="flex min-h-screen flex-col items-center justify-between pt-10 "
    >
      <div className="pt-14">
        <HeroNews />
      </div>

      <div className="flex flex-col">
        <MoviesCarousel />
      </div>

      <div className="flex flex-col">
        <SeriesCarousel />
      </div>

      <div>
        <ReviewsWrapper />
      </div>
    </main>
  );
};

export default HomePage;

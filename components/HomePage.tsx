import React from "react";
import HeroNews from "./HeroNews";
import MoviesCarousel from "./MoviesCarousel";
import ReviewsWrapper from "./ReviewsWrapper";

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 gap-10">
      <HeroNews />

      <MoviesCarousel />

      <ReviewsWrapper />

      <h2 className="text-white">News</h2>

      <h2 className="text-white">Recent news section</h2>
    </main>
  );
};

export default HomePage;

"use client";

import React from "react";
import MoviesSeriesPagesCard from "./MoviesSeriesPagesCard";
import { useMovies } from "@/hooks/useMoviesAndSeries";

const MoviesPage = () => {
  const { movies, isLoading } = useMovies();

  interface MovieProps {
    title: string;
    poster_path: string;
    vote_average: number;
    overview: string;
    id: string;
    page: string;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="flex flex-col items-center w-screen">
      <div className="h-24"></div>
      <div className="text-white ">Movies Page</div>;
      <div className="flex justify-center w-[1200px] gap-x-10 gap-y-12 p-10 flex-wrap">
        {movies.map((movie: MovieProps) => {
          return (
            <div
              key={movie.id}
              className="flex flex-col gap-1 items-center group"
            >
              <MoviesSeriesPagesCard
                cardImg={movie.poster_path}
                cardRate={movie.vote_average}
                cardInfo={movie.overview}
                cardId={movie.id}
                cardPage="movies"
              />
              <p className="text-white text-wrap w-44 text-center group-hover:font-bold group-hover:text-[#9C3CBE]">
                {movie.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoviesPage;

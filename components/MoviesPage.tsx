"use client";

import React from "react";
import MoviesSeriesPagesCard from "./MoviesSeriesPagesCard";
import { useMovies } from "@/hooks/useMoviesAndSeries";
import PaginationControls from "./PaginationControls";

const MoviesPage = ({
  start,
  end,
  page,
}: {
  start: number;
  end: number;
  page: string | string[];
}) => {
  const { movies, isLoading } = useMovies(page);
  console.log(movies);

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
    <div className="flex flex-col items-center pb-6 w-screen">
      <div className="h-24"></div>
      <div className="text-white ">Movies Page</div>;
      <div className="flex justify-center w-[1200px] gap-x-10 gap-y-12 p-10 flex-wrap">
        {movies?.map((movie: MovieProps) => {
          return (
            <div
              key={movie.id}
              className="flex flex-col gap-1 items-center group"
            >
              <MoviesSeriesPagesCard
                key={movie.id}
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
      <PaginationControls start={start} type={"movies"} />
    </div>
  );
};

export default MoviesPage;

"use client";

import { useSeries } from "@/hooks/useMoviesAndSeries";
import React from "react";
import MoviesSeriesPagesCard from "./MoviesSeriesPagesCard";

const SeriesPage = () => {
  const { series, isLoading } = useSeries();

  interface MovieProps {
    poster_path: string;
    name: string;
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
      <div className="text-white ">Series Page</div>;
      <div className="flex justify-center w-[1200px] gap-x-10 gap-y-12 p-10 flex-wrap ">
        {series.map((serie: MovieProps) => {
          return (
            <div
              key={serie.id}
              className="flex flex-col gap-1 items-center group"
            >
              <MoviesSeriesPagesCard
                cardImg={serie.poster_path}
                cardRate={serie.vote_average}
                cardInfo={serie.overview}
                cardId={serie.id}
                cardPage={"series"}
              />
              <p className="text-white text-wrap w-44 text-center  group-hover:font-bold group-hover:text-[#9C3CBE]">
                {serie.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SeriesPage;

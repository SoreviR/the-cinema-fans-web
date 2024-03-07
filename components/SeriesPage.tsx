"use client";

import { useSeries } from "@/hooks/useMoviesAndSeries";
import React from "react";
import MoviesSeriesPagesCard from "./MoviesSeriesPagesCard";
import PaginationControls from "./PaginationControls";

const SeriesPage = ({
  start,
  end,
  page,
}: {
  start: number;
  end: number;
  page: string | string[];
}) => {
  const { series, isLoading } = useSeries(page);

  interface SerieProps {
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
    <div className="flex flex-col items-center pb-6 w-screen">
      <div className="h-24"></div>
      <div className="text-white ">Series Page</div>;
      <div className="flex justify-center w-[1200px] gap-x-10 gap-y-12 p-10 flex-wrap ">
        {series.map((serie: SerieProps) => {
          return (
            <div
              key={serie.id}
              className="flex flex-col gap-1 items-center group"
            >
              <MoviesSeriesPagesCard
                key={serie.id}
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
      <PaginationControls start={start} type={"series"} />
    </div>
  );
};

export default SeriesPage;

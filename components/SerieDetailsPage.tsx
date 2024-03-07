"use client";

import { useSerieDetails } from "@/hooks/useMoviesAndSeries";
import { Spinner } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SerieDetailsPage = ({ serieid: serieid }: { serieid: string }) => {
  interface SerieProps {
    name: string;
    id: number;
  }

  const { serieDetails, isLoading } = useSerieDetails(serieid);
  console.log(serieDetails);

  return (
    <div className="flex flex-col items-center p-5 pb-16">
      {isLoading ? (
        <div className="flex flex-col h-screen items-center justify-center gap-3 text-[#F8F7F4]">
          <Spinner className="h-10 w-10" />
          <h2 className="text-[#F8F7F4] text-3xl">Loading...</h2>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-5">
          <Image
            className="w-400 h-400 rounded-xl p-5"
            src={`https://image.tmdb.org/t/p/w500${serieDetails.backdrop_path}`}
            alt="movie-poster"
            width={500}
            height={500}
          />

          <p className="text-[#F8F7F4] text-5xl w-[500px] font-bold flex-wrap text-center">
            {serieDetails.name}
          </p>
          <div className="flex gap-4">
            {serieDetails.genres.map((genre: SerieProps) => {
              return (
                <div key={genre.id} className="">
                  <p className="text-[#F8F7F4] text-sm">{genre.name}</p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-5 w-2/4 items-center">
            <p className="text-[#F8F7F4]">{serieDetails.overview}</p>
            <Link href={`/series/${serieid}/reviews/${serieid}`}>
              <button className="bg-sky-700 font-extrabold text-[#F8F7F4] p-2 px-6 rounded-lg hover:bg-sky-500 transition-colors">
                Review
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SerieDetailsPage;

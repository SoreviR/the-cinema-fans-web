"use client";

import { useMovieDetails } from "@/hooks/useMoviesAndSeries";
import { Spinner } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieDetailsPage = ({ movieid }: { movieid: string }) => {
  interface MovieProps {
    name: string;
    id: number;
  }

  const { movieDetails, isLoading } = useMovieDetails(movieid);
  return (
    <div className="flex flex-col items-center p-5 pb-16">
      {isLoading ? (
        <div className="flex flex-col h-screen items-center justify-center gap-3 text-white">
          <Spinner className="h-10 w-10" />
          <h2 className="text-white text-3xl">Loading...</h2>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-5">
          <Image
            className="w-400 h-400 rounded-xl p-5"
            src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
            alt="movie-poster"
            width={500}
            height={500}
          />

          <p className="text-white text-5xl w-[500px] font-bold flex-wrap text-center">
            {movieDetails.original_title}
          </p>
          <div className="flex gap-4">
            {movieDetails.genres.map((genre: MovieProps) => {
              return (
                <div key={genre.id} className="">
                  <p className="text-white text-sm">{genre.name}</p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-5 w-2/4 items-center">
            <p className="text-white">{movieDetails.overview}</p>
            <Link href={`/movies/${movieid}/reviews/${movieid}`}>
              <button className="bg-sky-700 font-extrabold text-white p-2 px-6 rounded-lg hover:bg-sky-500 transition-colors">
                Review
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;

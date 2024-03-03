"use client";

import { useMovieDetails, useMovieReview } from "@/hooks/useMoviesAndSeries";
import { Spinner } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

const MovieReviewPage = ({ movieid }: { movieid: string }) => {
  const { movieReview, isLoading } = useMovieReview(movieid);
  const { movieDetails } = useMovieDetails(movieid);

  return (
    <div className="flex flex-col items-center gap-1 p-5">
      <div className="text-white flex gap-4">
        {isLoading ? (
          <Spinner className="h-10 w-10" />
        ) : (
          <Image
            className="w-400 h-400 rounded-xl p-5"
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt="movie-poster"
            width={200}
            height={200}
          />
        )}
        <div className="flex flex-col gap-3 justify-center">
          <p className="text-xl font-bold">{movieDetails.original_title}</p>
          <aside>
            <p>rate: {movieReview.rating}</p>
          </aside>
        </div>
      </div>
      <div className="p-10 w-3/4 text-center flex flex-col gap-2">
        <h4 className="text-white text-xl self-start">Review:</h4>
        {isLoading ? (
          <div className="flex flex-col justify-center">
            <h2 className="text-white text-3xl">Loading...</h2>
          </div>
        ) : (
          <p className="text-white">
            {movieReview.length > 1 && movieReview.length > 2
              ? movieReview[2].content
              : movieReview[0].content}
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieReviewPage;

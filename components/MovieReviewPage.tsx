"use client";

import { useMovieDetails, useMovieReview } from "@/hooks/useMoviesAndSeries";
import { starsCount } from "@/utils/RateStarsCount";
import { Spinner } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

const MovieReviewPage = ({ movieid }: { movieid: string }) => {
  const { movieReview, isLoading } = useMovieReview(movieid);
  const { movieDetails } = useMovieDetails(movieid);

  console.log(movieReview[0]?.author_details.name);

  return (
    <div className="flex flex-col items-center gap-1 p-5">
      <div className="text-[#F8F7F4] flex  gap-4">
        {isLoading ? (
          <Spinner className="h-10 w-10" />
        ) : (
          <Image
            className="w-400 h-400 rounded-xl p-5"
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt="movie-poster"
            width={350}
            height={350}
          />
        )}
        <div className="flex flex-col gap-3 justify-center">
          <p className="text-[#F8F7F4] text-5xl w-[500px] font-bold flex-wrap">
            {movieDetails.original_title}
          </p>
          <aside>
            <div className="flex gap-1 items-center">
              <p>Rate:</p>
              <div className="rounded-full flex px-1 py-3 bg-[#00FFFF] font-bold">
                {movieReview.length > 1 || movieReview.length > 2
                  ? starsCount(movieReview[2]?.author_details.rating)
                  : starsCount(movieReview[0]?.author_details.rating)}{" "}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <div className="p-10 w-3/4 text-center flex flex-col gap-2">
        <h4 className="text-[#F8F7F4] text-xl self-start">Review:</h4>
        {isLoading ? (
          <div className="flex flex-col items-start text-[#F8F7F4]">
            <h2 className="text-[#F8F7F4] text-3xl">Loading...</h2>
          </div>
        ) : (
          <div className="flex flex-col items-start gap-3 text-[#F8F7F4]">
            <p>
              Author:{" "}
              {movieReview.length > 1 && movieReview.length > 2
                ? movieReview[2]?.author_details.name
                : movieReview[0]?.author_details.name}
            </p>
            <p className="text-[#F8F7F4] text-left">
              {movieReview.length > 1 && movieReview.length > 2
                ? movieReview[2]?.content
                : movieReview[0]?.content}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieReviewPage;

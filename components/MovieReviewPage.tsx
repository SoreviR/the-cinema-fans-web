"use client";

import { useMovieReview } from "@/hooks/useMoviesAndSeries";
import React from "react";

const MovieReviewPage = ({ movieid }: { movieid: string }) => {
  const { movieReview, isLoading } = useMovieReview(movieid);

  return (
    <div className="flex flex-col items-center gap-5 p-6">
      <div className="text-white flex gap-4">
        <p>Imagen</p>
        <aside>
          <p>rating</p>
        </aside>
      </div>
      <div className="p-10">
        {!isLoading && (
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

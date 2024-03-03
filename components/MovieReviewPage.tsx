"use client";

import { useMovieReview } from "@/hooks/useMoviesAndSeries";
import React from "react";

const MovieDetailsPage = ({ movieid }: { movieid: string }) => {
  const { movieReview, isLoading } = useMovieReview(movieid);
  console.log(movieReview[1]);

  return (
    <div className="flex flex-col items-center gap-5 p-6">
      <div className="text-white flex gap-4">
        <p>Imagen</p>
        <aside>
          <h3>title</h3>
          <p>rating</p>
        </aside>
      </div>
      <div className="p-10">
        <p className="text-white">{movieReview[2].content}</p>
      </div>
    </div>
  );
};

export default MovieDetailsPage;

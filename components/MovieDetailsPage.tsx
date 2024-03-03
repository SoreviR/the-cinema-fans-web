"use client";

import { useMovieDetails } from "@/hooks/useMoviesAndSeries";
import React from "react";

const MovieDetailsPage = ({ movieid }: { movieid: string }) => {
  const { movieDetails, isLoading } = useMovieDetails(movieid);
  return (
    <div>
      {!isLoading && (
        <p className="text-white">{movieDetails.original_title}</p>
      )}
    </div>
  );
};

export default MovieDetailsPage;

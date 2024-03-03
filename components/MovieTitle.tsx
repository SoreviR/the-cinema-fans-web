import { useMovieDetails } from "@/hooks/useMoviesAndSeries";
import React from "react";

const MovieTitle = ({ movieid }: { movieid: string }) => {
  const { movieDetails, isLoading } = useMovieDetails(movieid);
  console.log(movieDetails);

  return (
    <div>
      {!isLoading && <p className="text-white">Movie details. Title </p>}
    </div>
  );
};

export default MovieTitle;

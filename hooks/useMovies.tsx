"use client";

import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/utils/MoviesData";

export const useMovies = () => {
  const {
    isLoading,
    isError,
    data: movies = [],
    isFetching,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });
  return {
    isLoading,
    isError,
    movies,
    isFetching,
  };
};

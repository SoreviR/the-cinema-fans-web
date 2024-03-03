"use client";

import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/utils/MoviesData";
import { getSeries } from "@/utils/TvSeriesData";
import { getMovieReview } from "@/utils/MovieReviewData";

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

export const useSeries = () => {
  const {
    isLoading,
    isError,
    data: series = [],
    isFetching,
  } = useQuery({
    queryKey: ["series"],
    queryFn: getSeries,
  });
  return {
    isLoading,
    isError,
    series,
    isFetching,
  };
};

export const useMovieReview = (movieid: string) => {
  const {
    isLoading,
    isError,
    data: movieReview = [],
    isFetching,
  } = useQuery({
    queryKey: ["movieReview", movieid],
    queryFn: () => getMovieReview(movieid),
  });
  return {
    isLoading,
    isError,
    movieReview,
    isFetching,
  };
};

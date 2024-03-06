"use client";

import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/utils/MoviesData";
import { getSeries } from "@/utils/TvSeriesData";
import { getMovieReview } from "@/utils/MovieReviewData";
import { getMovieDetails } from "@/utils/MovieDetailsData";
import { getSerieDetails } from "@/utils/TvSeriesDetailsData";
import { getSerieReview } from "@/utils/TvSerieReviewData";

export const useMovies = (page: string | string[]) => {
  const {
    isLoading,
    isError,
    data: movies = [],
    isFetching,
  } = useQuery({
    queryKey: ["movies", page],
    queryFn: () => getMovies(page),
  });
  return {
    isLoading,
    isError,
    movies,
    isFetching,
  };
};

export const useSeries = (page: string | string[]) => {
  const {
    isLoading,
    isError,
    data: series = [],
    isFetching,
  } = useQuery({
    queryKey: ["series", page],
    queryFn: () => getSeries(page),
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

export const useMovieDetails = (movieid: string) => {
  const {
    isLoading,
    isError,
    data: movieDetails = [],
    isFetching,
  } = useQuery({
    queryKey: ["movieDetail", movieid],
    queryFn: () => getMovieDetails(movieid),
  });
  return {
    isLoading,
    isError,
    movieDetails,
    isFetching,
  };
};

export const useSerieDetails = (serieid: string) => {
  const {
    isLoading,
    isError,
    data: serieDetails = [],
    isFetching,
  } = useQuery({
    queryKey: ["serieDetail", serieid],
    queryFn: () => getSerieDetails(serieid),
  });
  return {
    isLoading,
    isError,
    serieDetails,
    isFetching,
  };
};

export const useSerieReview = (serieid: string) => {
  const {
    isLoading,
    isError,
    data: serieReview = [],
    isFetching,
  } = useQuery({
    queryKey: ["serieReview", serieid],
    queryFn: () => getSerieReview(serieid),
  });
  return {
    isLoading,
    isError,
    serieReview,
    isFetching,
  };
};

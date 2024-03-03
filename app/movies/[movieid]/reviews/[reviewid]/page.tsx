import MovieReviewPage from "@/components/MovieReviewPage";
import React from "react";

const page = ({
  params,
}: {
  params: { movieid: string; reviewid: string };
}) => {
  return <MovieReviewPage movieid={params.movieid} />;
};

export default page;

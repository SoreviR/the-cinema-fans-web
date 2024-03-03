import MovieReviewPage from "@/components/MovieReviewPage";
import React from "react";

const page = ({
  params,
}: {
  params: { movieid: string; reviewid: string };
}) => {
  return (
    <div>
      <div className="h-24"></div>
      <MovieReviewPage movieid={params.movieid} />;
    </div>
  );
};

export default page;

import MovieDetailsPage from "@/components/MovieReviewPage";
import React from "react";

const page = ({ params }: { params: { movieid: string } }) => {
  return (
    <div>
      <div className="h-24"></div>

      <MovieDetailsPage movieid={params.movieid} />
    </div>
  );
};

export default page;

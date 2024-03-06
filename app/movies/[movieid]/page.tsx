import MovieDetailsPage from "@/components/MovieDetailsPage";
import React from "react";

const page = ({ params }: { params: { movieid: string } }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-24"></div>
      <MovieDetailsPage movieid={params.movieid} />
    </div>
  );
};

export default page;

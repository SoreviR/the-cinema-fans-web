import MovieDetailsPage from "@/components/MovieDetailsPage";
import React from "react";

const page = ({ params }: { params: { movieid: string } }) => {
  return (
    <div>
      <div className="h-24"></div>
      <p className="text-white">param {params.movieid}</p>
      <MovieDetailsPage movieid={params.movieid} />
    </div>
  );
};

export default page;

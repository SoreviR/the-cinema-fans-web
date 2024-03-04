import MovieReviewPage from "@/components/MovieReviewPage";
import SerieReviewPage from "@/components/SerieReviewPage";
import React from "react";

const page = ({
  params,
}: {
  params: { serieid: string; reviewid: string };
}) => {
  return (
    <div>
      <div className="h-24"></div>
      <SerieReviewPage serieid={params.serieid} />;
    </div>
  );
};

export default page;

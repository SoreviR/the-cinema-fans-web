import SerieDetailsPage from "@/components/SerieDetailsPage";
import React from "react";

const page = ({ params }: { params: { serieid: string } }) => {
  return (
    <div>
      <div className="h-24"></div>
      <SerieDetailsPage serieid={params.serieid} />
    </div>
  );
};

export default page;

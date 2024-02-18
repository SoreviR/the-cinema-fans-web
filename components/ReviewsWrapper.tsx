import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewsWrapper = () => {
  return (
    <div className="h-screen flex flex-col gap-5">
      <h2 className="text-4xl text-white">Reviews</h2>
      <div className="flex gap-12 flex-wrap">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default ReviewsWrapper;

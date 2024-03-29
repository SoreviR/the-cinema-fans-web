import React, { useRef } from "react";
import ReviewCard from "./ReviewCard";
import { useScroll, useTransform, motion } from "framer-motion";
import { useMovies } from "@/hooks/useMoviesAndSeries";
import { useSearchParams } from "next/navigation";

const ReviewsWrapper = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const { movies, isLoading } = useMovies(page);
  const reviewsArray = movies.splice(0, 3);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // const initialAnimation =
  const lg = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <div
      ref={container}
      className="h-screen w-[1200px] flex flex-col gap-10 p-8"
    >
      <h2 className="text-5xl font-bold text-[#F8F7F4] ml-44">
        Movies Reviews
      </h2>
      <div className="flex gap-12 flex-wrap">
        <motion.div
          initial={{
            position: "absolute",
            x: 800,
          }}
          whileInView={{
            x: 0,
          }}
          transition={{
            duration: 2,
          }}
        >
          <ReviewCard
            cardImg={reviewsArray[0]?.backdrop_path}
            cardTitle={reviewsArray[0]?.title}
            cardInfo={reviewsArray[0]?.overview}
            cardRate={reviewsArray[0]?.vote_average}
            cardId={reviewsArray[0]?.id}
          />
        </motion.div>

        <motion.div
          initial={{
            position: "absolute",
            x: 800,
          }}
          whileInView={{
            x: 400,
          }}
          transition={{
            duration: 2,
          }}
        >
          <ReviewCard
            cardImg={reviewsArray[1]?.backdrop_path}
            cardTitle={reviewsArray[1]?.title}
            cardInfo={reviewsArray[1]?.overview}
            cardRate={reviewsArray[1]?.vote_average}
            cardId={reviewsArray[1]?.id}
          />
        </motion.div>

        <motion.div
          className="z-50"
          initial={{
            position: "absolute",
            z: 50,
            x: 800,
          }}
          whileInView={{
            x: 800,
            z: 50,
          }}
          transition={{
            duration: 2,
          }}
        >
          <ReviewCard
            cardImg={reviewsArray[2]?.backdrop_path}
            cardTitle={reviewsArray[2]?.title}
            cardInfo={reviewsArray[2]?.overview}
            cardRate={reviewsArray[2]?.vote_average}
            cardId={reviewsArray[2]?.id}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewsWrapper;

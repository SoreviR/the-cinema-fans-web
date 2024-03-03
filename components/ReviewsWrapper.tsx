import React, { useRef } from "react";
import ReviewCard from "./ReviewCard";
import { useScroll, useTransform, motion } from "framer-motion";

const ReviewsWrapper = () => {
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
      className="h-screen w-[1200px] flex flex-col gap-10 p-8 overflow-hidden"
    >
      <h2 className="text-4xl text-white ml-44">Movies Reviews</h2>
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
          <ReviewCard />
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
          <ReviewCard />
        </motion.div>

        <motion.div
          initial={{
            position: "absolute",
            x: 800,
          }}
          whileInView={{
            x: 800,
          }}
          transition={{
            duration: 2,
          }}
        >
          <ReviewCard />
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewsWrapper;

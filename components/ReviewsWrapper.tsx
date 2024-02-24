import React, { useRef } from "react";
import ReviewCard from "./ReviewCard";
import { useScroll, useTransform, motion } from "framer-motion";

const ReviewsWrapper = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const md = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <div ref={container} className="h-screen flex flex-col gap-5 p-14">
      <h2 className="text-4xl text-white">Reviews</h2>
      <div className="flex gap-12 flex-wrap">
        <motion.div style={{ y: sm }}>
          <ReviewCard />
        </motion.div>

        <motion.div style={{ y: md }}>
          <ReviewCard />
        </motion.div>

        <motion.div style={{ y: lg }}>
          <ReviewCard />
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewsWrapper;

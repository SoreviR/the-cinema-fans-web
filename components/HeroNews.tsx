import Image from "next/image";
import React, { useRef } from "react";
import HeroNewsCard from "./HeroNewsCard";
import { useScroll, useTransform, motion } from "framer-motion";
import Dune2Poster from "@/public/images/Dune2-poster.jpeg";
import TronImg from "@/public/images/tron-ares-first-look.avif";
import AvengersImg from "@/public/images/avengers-kang-dynasty-logo.avif";
import HouseOfDragonsTwoImg from "@/public/images/house-of-the-dragon-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const HeroNews = () => {
  const heroNewsArray = [
    {
      title: "Tron Ares Reveals First-Look Image From The Grid",
      info: "We've known that Tron: Ares, AKA the third movie set on the Grid following the original and 2010's Tron: Legacy, has been shooting since January. Joachim Rønning is in the director's chair and the first look at Jared Leto suited up as the title character is online — see it lower down the page.",
      image: TronImg,
    },
    {
      title: "TAvengers 5 Will No Longer Be Titled The Kang Dynasty",
      info: "For much of the last year, the question has hung in the air around what Marvel is going to do with Kang. First, Ant-Man And The Wasp: Quantumania underperformed significantly, intended to be the Multiverse Saga uber-villain’s big launch on the world. Then, months after allegations were made against him, actor Jonathan Majors was found guilty of assault in December, at which point he was dropped by the studio. In the wake of all that, Marvel Studios is said to be retooling its plans for the future – plans which originally had the next Avengers movie down as The Kang Dynasty.",
      image: AvengersImg,
    },
    {
      title: "House of the Dragon season 2",
      info: "Vhagar took one massive bite out of prince Lucerys (Elliot Grihault) and his dragon Arrax, so Rhaenyra's boy will not be returning for season two. We're sure, however, that the implications of his death will be massive. Also not joining season two's cast is Paddy Considine. Sadly, King Viserys has hung his crown up on the Iron Throne, leaving his squabbling children to cut each other down on their way to retrieve it.",
      image: HouseOfDragonsTwoImg,
    },
  ];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 2], [0, -150]);

  return (
    <div
      ref={container}
      className="flex flex-col w-scren h-screen p-5 pt-10 gap-5 "
    >
      <h2 className="text-5xl font-bold text-white ml-48">News</h2>
      <div className="self-center justify-center w-[1200px]">
        <div className="w-full pl-60 pr-60 flex justify-center -z-10">
          <Swiper
            className="w-full h-full  flex justify-center"
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            slidesPerView={1}
            modules={[Autoplay]}
          >
            {heroNewsArray.map((news, i) => {
              return (
                <SwiperSlide key={i} className="w-[600px] h-[600px]">
                  <Image
                    style={{ objectFit: "contain" }}
                    className=""
                    src={news.image}
                    alt="image"
                    width={700}
                    height={700}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* <Image
          className="rounded-lg"
          src={TronImg}
          alt="Poster"
          width={800}
          height={800}
        /> */}
        <motion.div
          transition={{
            duration: 2,
          }}
          initial={{
            x: 0,
            top: 300,
            position: "absolute",
          }}
          animate={{
            x: 900,
          }}
          exit={{
            x: 0,
            position: "absolute",
            top: 300,
          }}
          className="left-0 z-50"
        >
          <HeroNewsCard />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroNews;

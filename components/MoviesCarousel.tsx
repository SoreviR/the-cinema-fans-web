"use client";

import React from "react";
import Image from "next/image";
import SpidermanMovie from "@/public/images/Spidermwn-movie.jpg";
import InceptionMovie from "@/public/images/inception.jpg";
import DuneMovie from "@/public/images/dune-2-poster.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import MovieCardSlider from "./MovieCardSlider";

const MoviesCarousel = () => {
  const slides: {
    key: number;
    movieName: string;
    description: string;
    movieImg: any;
  }[] = [
    {
      key: 1,
      movieName: "Spiderman",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      movieImg: (
        <Image
          className="w-full h-400 block rounded-xl"
          src={SpidermanMovie}
          alt="spiderman"
          width={130}
          height={130}
        />
      ),
    },
    {
      key: 2,
      movieName: "Inception",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      movieImg: (
        <Image
          className="w-full block rounded-xl"
          src={InceptionMovie}
          alt="Inception"
          width={130}
          height={130}
        />
      ),
    },
    {
      key: 3,
      movieName: "Dune",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      movieImg: (
        <Image
          className="w-full block rounded-xl"
          src={DuneMovie}
          alt="Dune2"
          width={130}
          height={130}
        />
      ),
    },
  ];

  return (
    <div className="w-500 h-screen p-14 bg-transparent flex flex-col gap-5">
      <h2 className="text-4xl text-white">Movies</h2>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="pt-12 pb-12 w-500 h-800 "
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide className=" w-[300] h-auto p-10" key={slide.key}>
              <MovieCardSlider
                movieImg={slide.movieImg}
                movieTitle={slide.movieName}
                movieInfo={slide.description}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MoviesCarousel;

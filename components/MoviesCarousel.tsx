"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import MovieCardSlider from "./MovieCardSlider";
import { useMovies } from "@/hooks/useMovies";

const MoviesCarousel = () => {
  // const { movies, isLoading } = useMovies();

  // console.log(movies);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  const movies = [
    {
      poster_path: "/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg",
      original_title: "probando",
      overview: "mas pruebas",
      id: 1,
    },
    {
      poster_path: "/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg",
      original_title: "probando",
      overview: "mas pruebas",
      id: 2,
    },
    {
      poster_path: "/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg",
      original_title: "probando",
      overview: "mas pruebas",
      id: 3,
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
        className="pt-12 pb-12 w-500 h-800"
      >
        {movies.map(
          (movie: {
            poster_path: string;
            original_title: string;
            overview: string;
            id: number;
          }) => {
            return (
              <SwiperSlide className=" w-[300] h-auto p-10" key={movie.id}>
                <MovieCardSlider
                  movieImg={movie.poster_path}
                  movieTitle={movie.original_title}
                  movieInfo={movie.overview}
                />
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </div>
  );
};

export default MoviesCarousel;

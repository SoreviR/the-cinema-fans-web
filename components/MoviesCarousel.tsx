"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import CarouselSliderCard from "./CarouselSliderCard";
import { useMovies } from "@/hooks/useMoviesAndSeries";
import { useSearchParams } from "next/navigation";

const MoviesCarousel = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const { movies, isLoading } = useMovies(page);

  interface MovieProps {
    poster_path: string;
    original_title: string;
    overview: string;
    id: number;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="h-screen w-[1200px] flex flex-col gap-10 p-14 pl-20">
      <h2 className="text-5xl font-bold text-[#F8F7F4] ml-32">Movies</h2>
      <Swiper
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
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
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full h-[480px] "
      >
        {movies.map((movie: MovieProps) => {
          return (
            <SwiperSlide className="w-[300px] h-500 pt-8 " key={movie.id}>
              <CarouselSliderCard
                cardId={movie.id}
                cardImg={movie.poster_path}
                cardTitle={movie.original_title}
                cardInfo={movie.overview}
                cardPage="movies"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MoviesCarousel;

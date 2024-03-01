"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import CarouselSliderCard from "./CarouselSliderCard";
import { useSeries } from "@/hooks/useMoviesAndSeries";

const SeriesCarousel = () => {
  const { series, isLoading } = useSeries();

  interface MovieProps {
    poster_path: string;
    name: string;
    overview: string;
    id: number;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="w-[1200px] p-14 flex flex-col gap-5 ">
      <h2 className="text-4xl text-white">Series</h2>
      <Swiper
        loop={false}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
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
        className="p-14 w-[1100px] h-[450px]"
      >
        {series.map((serie: MovieProps) => {
          return (
            <SwiperSlide className=" w-[300px] h-auto pt-10" key={serie.id}>
              <CarouselSliderCard
                cardImg={serie.poster_path}
                cardTitle={serie.name}
                cardInfo={serie.overview}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SeriesCarousel;

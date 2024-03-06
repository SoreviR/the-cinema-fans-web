"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import CarouselSliderCard from "./CarouselSliderCard";
import { useSeries } from "@/hooks/useMoviesAndSeries";
import { useSearchParams } from "next/navigation";

const SeriesCarousel = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const { series, isLoading } = useSeries(page);

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
    <div className="h-screen w-[1200px] flex flex-col gap-10 p-14 pl-20">
      <h2 className="text-4xl text-white ml-32">Series</h2>
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
        className="w-full h-[480px]"
      >
        {series.map((serie: MovieProps) => {
          return (
            <SwiperSlide className=" w-[300px] h-auto pt-10" key={serie.id}>
              <CarouselSliderCard
                cardId={serie.id}
                cardImg={serie.poster_path}
                cardTitle={serie.name}
                cardInfo={serie.overview}
                cardPage="series"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SeriesCarousel;

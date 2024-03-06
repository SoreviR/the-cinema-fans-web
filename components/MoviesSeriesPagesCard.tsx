import { starsCount } from "@/utils/RateStarsCount";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { RiTriangleFill, RiTriangleLine } from "react-icons/ri";

interface CardProps {
  cardImg: string;
  cardRate: number;
  cardInfo: string;
  cardId: string;
  cardPage: string;
}

const MoviesSeriesPagesCard: React.FC<CardProps> = ({
  cardImg,
  cardRate,
  cardInfo,
  cardId,
  cardPage,
}) => {
  // let starts = [];
  // const startsCount = (cardRate: number) => {
  //   for (let i = 0; i < cardRate / 2; i++) {
  //     starts.push(<RiTriangleFill />);
  //   }
  //   if (cardRate < 10) {
  //     for (let i = cardRate / 2; i < 10 / 2; i++) {
  //       starts.push(<RiTriangleLine />);
  //     }
  //   }
  //   return starts;
  // };

  return (
    <Link href={`/${cardPage}/${cardId}`}>
      <div className="relative overflow-hidden w-44 h-60 rounded-xl cursor-pointer text-2xl font-bold bg-slate-950">
        <div className="z-10 absolute w-full h-full peer"></div>
        <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-60 -left-28 w-32 h-44  bg-slate-900 transition-all duration-500"></div>
        <div className="absolute flex text-xl text-center text-white items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-60 -right-16 w-36 h-44 bg-slate-900 transition-all duration-500">
          <div className="flex flex-col gap-5">
            <span className="absolute flex bg-slate-500 py-[1px] px-1 rounded-lg top-2 right-4 text-sm">
              {starsCount(cardRate)}
            </span>
            <p className="text-xs text-left p-2">
              {cardInfo.substring(0, 150)}...
            </p>
          </div>
        </div>
        <div className="w-full h-full items-center justify-center flex uppercase text-white">
          <Image
            className="w-full h-400 block rounded-xl"
            src={`https://image.tmdb.org/t/p/w500${cardImg}`}
            alt="movie-poster"
            width={130}
            height={130}
          />
        </div>
      </div>
    </Link>
  );
};

export default MoviesSeriesPagesCard;

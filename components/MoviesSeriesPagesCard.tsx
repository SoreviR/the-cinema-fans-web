import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  return (
    <Link href={`/${cardPage}/${cardId}`}>
      <div className="relative overflow-hidden w-44 h-60 rounded-3xl cursor-pointer text-2xl font-bold bg-gray-700">
        <div className="z-10 absolute w-full h-full peer"></div>
        <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-60 -left-28 w-32 h-44  bg-gray-800 transition-all duration-500"></div>
        <div className="absolute flex text-xl text-center text-white items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-60 -right-16 w-36 h-44 bg-gray-800 transition-all duration-500">
          <div className="flex flex-col gap-5">
            <span className="absolute bg-slate-500 py-[1px] px-1 rounded-lg top-1 right-4 text-sm">
              {cardRate.toFixed(1)} / 10
            </span>
            <p className="text-xs text-center p-2">
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

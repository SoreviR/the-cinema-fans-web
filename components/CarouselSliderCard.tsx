import Image from "next/image";
import React from "react";
import Link from "next/link";

interface CardSliderProps {
  cardImg: string;
  cardTitle: string;
  cardInfo: string;
  cardId: number;
}
// width y higth 130
const CarouselSliderCard: React.FC<CardSliderProps> = ({
  cardImg,
  cardTitle,
  cardInfo,
  cardId,
}) => {
  return (
    <div className="w-60 h-96 bg-slate-950 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
      <div className="w-auto h-auto bg-slate-950 rounded-2xl self-center">
        <Image
          className="w-full h-400 block rounded-xl"
          src={`https://image.tmdb.org/t/p/w500${cardImg}`}
          alt="movie-poster"
          width={130}
          height={130}
        />
      </div>
      <div className="">
        <p className="font-extrabold ">{cardTitle.substring(0, 21)}</p>
        <p className="text-sm ">{cardInfo.substring(0, 50) + " ..."}</p>
      </div>
      <Link href={`/movies/${cardId}`}>
        <button className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">
          See more
        </button>
      </Link>
    </div>
  );
};

export default CarouselSliderCard;

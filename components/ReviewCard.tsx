import React from "react";
import Image from "next/image";
import Link from "next/link";
import { starsCount } from "@/utils/RateStarsCount";

const ReviewCard = ({
  cardImg,
  cardTitle,
  cardInfo,
  cardRate,
  cardId,
}: {
  cardImg: string;
  cardTitle: string;
  cardInfo: string;
  cardRate: number;
  cardId: string;
}) => {
  return (
    <div className="group flex flex-col justify-start items-start gap-2 w-80 h-52 duration-500 relative rounded-lg p-4 bg-gray-900 hover:-translate-y-2  shadow-gray-800  hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
      <div className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-800">
        <Image
          className="rounded-lg w-auto h-auto"
          src={`https://image.tmdb.org/t/p/w500${cardImg}`}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="image"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-2 text-gray-100">{cardTitle}</h2>
          <p className="h-4 flex px-1 py-[1px]  rounded-lg bg-slate-500 font-bold mb-2 text-gray-100">
            {starsCount(cardRate)}
          </p>
        </div>
        <p className="text-gray-200 line-clamp-3">{cardInfo}</p>
      </div>
      <Link href={`/movies/${cardId}/reviews/${cardId}`}>
        <button className=" text-white mt-6 bg-sky-700 font-extrabold p-2 px-6 rounded-lg hover:bg-sky-500 transition-colors">
          Explore
        </button>
      </Link>
    </div>
  );
};

export default ReviewCard;

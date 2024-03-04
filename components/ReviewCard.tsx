import React from "react";
import DuneImg from "@/public/images/Dune2-poster.jpeg";
import Image from "next/image";
import Link from "next/link";

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
    <div className="group flex flex-col justify-start items-start gap-2 w-80 h-52 duration-500 relative rounded-lg p-4 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800">
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
          <h3 className="text-2xl font-bold mb-2 text-gray-100">
            {cardRate?.toFixed(1)}/10
          </h3>
        </div>
        <p className="text-gray-200 line-clamp-3">{cardInfo}</p>
      </div>
      <Link href={`/movies/${cardId}/reviews/${cardId}`}>
        <button className="hover:bg-gray-700 bg-gray-800 text-gray-100 mt-6 rounded p-2 px-6">
          Explore
        </button>
      </Link>
    </div>
  );
};

export default ReviewCard;

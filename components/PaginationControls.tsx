"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface PaginationControlsProps {
  type: string;
  start: number;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  type,
  start,
}: {
  type: string;
  start: number;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "20";

  return (
    <div className="flex gap-2 text-white items-center">
      <button
        disabled={start < 1}
        className="text-white  bg-sky-700 font-extrabold p-2 px-6 rounded-lg hover:bg-sky-500 transition-colors"
        onClick={() => {
          router.push(`${type}/?page=${Number(page) - 1}&per_page=${per_page}`);
        }}
      >
        prev
      </button>

      <div>
        {page} / {type == "movies" ? "165" : "1000"}
      </div>

      <button
        disabled={page > (type == "movies" ? "165" : "1000")}
        className="text-white  bg-sky-700 font-extrabold p-2 px-6 rounded-lg hover:bg-sky-500 transition-colors"
        onClick={() => {
          router.push(`${type}/?page=${Number(page) + 1}&per_page=${per_page}`);
        }}
      >
        next
      </button>
    </div>
  );
};

export default PaginationControls;

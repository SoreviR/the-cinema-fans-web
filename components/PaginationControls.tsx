"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface PaginationControlsProps {
  type: string;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  type,
}: {
  type: string;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "20";

  return (
    <div className="flex gap-2 text-white">
      <button
        onClick={() => {
          router.push(`${type}/?page=${Number(page) - 1}&per_page=${per_page}`);
        }}
      >
        prev page
      </button>

      <div>
        {page} / {type == "movies" ? "165" : "1000"}
      </div>

      <button
        onClick={() => {
          router.push(`${type}/?page=${Number(page) + 1}&per_page=${per_page}`);
        }}
      >
        next page
      </button>
    </div>
  );
};

export default PaginationControls;

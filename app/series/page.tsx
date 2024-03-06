import SeriesPage from "@/components/SeriesPage";
import React from "react";

const Home = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams["page"] ?? "1";
  console.log(page);

  const per_page = searchParams["per_page"] ?? "20";

  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page); // 0, 20, 40 ...
  const end = start + Number(per_page); // 20, 40, 60 ...

  return <SeriesPage page={page} start={start} end={end} />;
};

export default Home;

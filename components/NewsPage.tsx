import movieNewsData from "@/utils/NewsData";
import React from "react";
import NewsPageCard from "./NewsPageCard";

const NewsPage = () => {
  interface NewsProps {
    title: string;
    content: string;
  }
  return (
    <div className="flex flex-col gap-4 pb-10">
      <div className="h-24"></div>
      <h2 className="text-[#F8F7F4] text-4xl font-bold pl-52">Trending News</h2>
      <div className="flex flex-col gap-10">
        {movieNewsData.map((news: NewsProps, i) => {
          return (
            <NewsPageCard key={i} title={news.title} content={news.content} />
          );
        })}
      </div>
    </div>
  );
};

export default NewsPage;

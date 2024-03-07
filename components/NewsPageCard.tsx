import React from "react";

const NewsPageCard = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="text-[#F8F7F4] pl-52 pr-52 flex flex-col gap-2 group ">
      <div className="flex flex-col gap-2 border p-5 rounded-lg hover:bg-slate-500 cursor-pointer hover:scale-105 duration-150">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
};

export default NewsPageCard;

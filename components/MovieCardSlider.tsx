import React from "react";

interface MovieCardSliderProps {
  movieImg: any;
  movieTitle: string;
  movieInfo: string;
}

const MovieCardSlider: React.FC<MovieCardSliderProps> = ({
  movieImg,
  movieTitle,
  movieInfo,
}) => {
  return (
    <div className="w-60 h-96 bg-slate-950 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
      <div className="w-auto h-auto bg-slate-950 rounded-2xl self-center">
        {movieImg}
      </div>
      <div className="">
        <p className="font-extrabold">{movieTitle}</p>
        <p className="text-sm">{movieInfo}</p>
      </div>
      <button className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">
        See more
      </button>
    </div>
  );
};

export default MovieCardSlider;

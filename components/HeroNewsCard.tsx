import React from "react";

const HeroNewsCard = () => {
  return (
    <div className="cursor-pointer transition-all duration-500 hover:translate-y-2 w-64 h-36 bg-slate-500/70 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
      <div>
        <span className="font-bold text-blue-600">Dune NEWS</span>
        <p className="line-clamp-3 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default HeroNewsCard;

"use client";

import { GameItemProps } from "./GameItemProps";

const GameItem = ({ game }: GameItemProps) => {
  return (
    <div className="bg-black/60 to-white/5 rounded-lg">
      <div className="flex flex-row items-center">
        <div className="text-3xl p-4">🐱‍🏍</div>
        <div className="p-3">
          <p className="text-xl font-bold">{game?.title}</p>
          <p className="text-gray-100 text-sm">{game?.content}</p>
        </div>
      </div>
      <div className="border-t border-white/5 p-4 text-right">
        <button
          className={`
           bg-transparent border-none p-0 m-0 focus:outline-none`}
          aria-label="Delete game"
        ></button>
      </div>
    </div>
  );
};

export default GameItem;

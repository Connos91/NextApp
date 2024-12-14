"use client";

import Edit from "@/components/edit";
import { GameItemProps } from "./GameItemProps";
import Delete from "@/components/delete";

const GameItem = ({ game }: GameItemProps) => {
  const handleDeleteGame = () => {
    alert("Delete");
  };

  return (
    <div className="bg-black/60 to-white/5 rounded-lg">
      <div className="flex flex-row items-center justify-between">
        <div className="text-3xl p-4">🐱‍🏍</div>
        <div className="p-3">
          <p className="text-xl font-bold">{game?.title}</p>
          <p className="text-gray-100 text-sm">{game?.content}</p>
        </div>
      </div>
      <div className="border-t border-white/5 p-4 text-right space-x-2">
        <Edit gameId={game?.id} />
        <Delete id={game?.id} handleDeleteGame={handleDeleteGame} />
      </div>
    </div>
  );
};

export default GameItem;

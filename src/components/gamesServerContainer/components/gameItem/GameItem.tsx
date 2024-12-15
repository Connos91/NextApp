"use client";

import Edit from "@/components/edit";
import { GameItemProps } from "./GameItemProps";
import Delete from "@/components/delete";
import GameContent from "@/components/gameContent";

const GameItem = ({ game }: GameItemProps) => {
  const handleDeleteGame = () => {
    alert("Delete");
  };

  return (
    <div className="bg-black/60 to-white/5 rounded-lg">
      <GameContent title={game?.title} content={game?.content} />
      <div className="border-t  border-custom-rgb p-4 text-right space-x-2">
        <Edit gameId={game?.id} isServer />
        <Delete id={game?.id} handleDeleteGame={handleDeleteGame} />
      </div>
    </div>
  );
};

export default GameItem;

"use client";

import { GameItemProps } from "./GameItemProps";
import Delete from "@/components/delete";
import GameContent from "@/components/gameContent";
import dynamic from "next/dynamic";

const Edit = dynamic(() => import("@/components/edit"));

const GameItem = ({ game }: GameItemProps) => {
  const handleDeleteGame = () => {
    alert("Delete");
  };

  return (
    <div className="bg-black/60 to-white/5 rounded-lg">
      <GameContent title={game?.title} content={game?.content} />
      <div className="w-full flex justify-end border-t border-custom-rgb p-4 space-x-2">
        <Edit gameId={game?.id} isServer />
        <Delete id={game?.id} handleDeleteGame={handleDeleteGame} />
      </div>
    </div>
  );
};

export default GameItem;

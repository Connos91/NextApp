"use client";

import React, { useState, useCallback } from "react";
import { GameProps } from "./GameProps";
import { useDeleteGame } from "@/hooks/useDeleteGame";
import { useLoading } from "@/context/Context";
import Delete from "@/components/delete";
import Edit from "@/components/edit";

const Game = (props: GameProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { isLoading } = useLoading();

  const deleteGame = useDeleteGame();

  const handleDeleteGame = useCallback(
    async (id: string | number) => {
      if (confirm("Are you sure you want to delete?")) {
        setIsDeleting(true);
        try {
          await deleteGame.mutateAsync(id);
        } catch (error) {
          console.error("Failed to delete game:", error);
        } finally {
          setIsDeleting(false);
        }
      }
    },
    [deleteGame]
  );

  return (
    <div className="bg-black/60 to-white/5 rounded-lg">
      <div className="flex flex-row items-center justify-between">
        <div className="text-3xl p-4">🐱‍🏍</div>
        <div className="p-3">
          <p className="text-xl font-bold">{props?.title}</p>
          <p className="text-gray-100 text-sm">{props?.category}</p>
        </div>
      </div>
      <div className="border-t border-custom-rgb p-4 text-right space-x-2">
        <Edit gameId={props?.id} />
        <Delete
          id={props?.id}
          isLoading={isLoading}
          isDeleting={isDeleting}
          handleDeleteGame={handleDeleteGame}
        />
      </div>
    </div>
  );
};

export default Game;

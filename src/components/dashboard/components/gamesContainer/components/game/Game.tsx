"use client";

import React, { useState, useCallback } from "react";
import { GameProps } from "./GameProps";
import { useDeleteGame } from "@/hooks/useDeleteGame";
import { useLoading } from "@/context/Context";

const Game = (props: GameProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { isLoading } = useLoading();

  const deleteGame = useDeleteGame();

  const handleDeleteGame = useCallback(
    async (id: string | number) => {
      if (confirm("Are you sure you want to delete?")) {
        setIsDeleting(true);
        try {
          await deleteGame.mutateAsync(id as string);
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
      <div className="flex flex-row items-center">
        <div className="text-3xl p-4">🐱‍🏍</div>
        <div className="p-3">
          <p className="text-xl font-bold">{props?.title}</p>
          <p className="text-gray-100 text-sm">{props?.category}</p>
        </div>
      </div>
      <div className="border-t border-white/5 p-4 text-right">
        <button
          onClick={() => handleDeleteGame(props?.id)}
          className={`${
            isLoading ? "cursor-not-allowed" : "cursor-pointer"
          } bg-transparent border-none p-0 m-0 focus:outline-none`}
          aria-label="Delete game"
          disabled={isLoading}
        >
          {isDeleting ? (
            <p className="text-red-500">Deleting...</p>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={isLoading ? "grey" : "red"}
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isLoading
                    ? "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    : "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                }
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Game;

"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";
import Game from "./components/game";
import { useGetGames } from "@/hooks/useGetGames";

const GamesContainer = () => {
  const { data: games, isLoading, error } = useGetGames();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {(error as Error)?.message}</div>;

  return (
    <div className="bg-white/10 rounded-lg p-6 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {games?.map((game: any) => (
          <Game id={game?.id} key={uuidv4()} {...game} />
        ))}
      </div>
    </div>
  );
};

export default GamesContainer;

"use client";

import GameTitle from "../gameTitle";
import GameItem from "./components/gameItem";

interface Game {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string | null;
}

interface GamesServerListProps {
  games: Game[];
}

const GamesServerList: React.FC<GamesServerListProps> = ({ games }) => {
  return (
    <div className="bg-white/10 rounded-lg p-6 mt-8">
      <GameTitle title="Server Games" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {games?.map((game) => (
          <GameItem key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GamesServerList;

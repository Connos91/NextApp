import GameHeader from "../gameHeader";
import { getGames } from "../queries/getGames";
import GameItem from "./components/gameItem";

const GamesServerList = async () => {
  const games = await getGames();

  return (
    <div className="bg-white/10 rounded-lg p-6 mt-10">
      <GameHeader title="Server Games" isServer />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {games?.map((game) => (
          <GameItem key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GamesServerList;

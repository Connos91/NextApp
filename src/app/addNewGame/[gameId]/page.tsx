import { getGame } from "@/components/queries/getGame";
import ServerForm from "@/components/addNewGame/components/serverForm";

type GameEditPageProps = {
  params: Promise<{
    gameId: string;
  }>;
};

const PageEditPage = async ({ params }: GameEditPageProps) => {
  const { gameId } = await params;
  const game = await getGame(gameId);

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <ServerForm game={game} />
    </div>
  );
};

export default PageEditPage;

import { getGame } from "@/components/queries/getGame";
import ServerForm from "@/components/addNewGame/components/serverForm";
import { loginIsRequiredServer } from "@/utils/login";

type GameEditPageProps = {
  params: Promise<{
    gameId: string;
  }>;
};

const PageEditPage = async ({ params }: GameEditPageProps) => {
  await loginIsRequiredServer();

  const { gameId } = await params;
  const game = await getGame(gameId);

  return (
    <div className="flex flex-col justify-center py-2 max-w-screen-md mx-auto space-y-10">
      <ServerForm game={game} />
    </div>
  );
};

export default PageEditPage;

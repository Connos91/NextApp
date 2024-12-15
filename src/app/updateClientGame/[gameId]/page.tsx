import { fetchGameById } from "@/api/calls";
import ClientForm from "@/components/addNewGame/components/clientForm";
import { loginIsRequiredServer } from "@/utils/login";

type GameEditPageProps = {
  params: Promise<{
    gameId: string;
  }>;
};

const PageEditClientPage = async ({ params }: GameEditPageProps) => {
  await loginIsRequiredServer();

  const { gameId } = await params;
  const { id, title, category } = await fetchGameById(gameId);
  const game = { id, title, category };

  return (
    <div className="flex flex-col justify-center py-2 max-w-screen-md mx-auto space-y-10">
      <ClientForm game={game} mode="update" />
    </div>
  );
};

export default PageEditClientPage;

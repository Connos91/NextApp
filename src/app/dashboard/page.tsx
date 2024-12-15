import Dashboard from "@/components/dashboard";
import { loginIsRequiredServer } from "@/utils/login";
import { getGames } from "@/components/queries/getGames";
import { auth } from "@/lib/auth";

const Page = async () => {
  await loginIsRequiredServer();

  const session = await auth();
  const games = await getGames();

  return <Dashboard name={session?.user?.name} games={games} />;
};

export default Page;

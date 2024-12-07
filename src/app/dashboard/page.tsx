import { auth } from "@/lib/auth";
import Dashboard from "@/components/dashboard";
import { loginIsRequiredServer } from "@/utils/login";
import { getGames } from "@/components/queries/getGames";

const Page = async () => {
  await loginIsRequiredServer();

  const session = await auth();
  const games = await getGames();

  return <Dashboard name={session?.user?.name} games={games} />;
};

export default Page;

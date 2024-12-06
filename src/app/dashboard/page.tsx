import { getServerSession } from "next-auth";
import { authConfig, loginIsRequiredServer } from "@/lib/auth";
import Dashboard from "@/components/dashboard";
import GamesServerList from "@/components/gamesServerContainer";

const Page = async () => {
  await loginIsRequiredServer();

  const session = await getServerSession(authConfig);

  return (
    <>
      <Dashboard name={session?.user?.name} />
      <GamesServerList />
    </>
  );
};

export default Page;

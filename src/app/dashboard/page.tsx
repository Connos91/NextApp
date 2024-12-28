import { loginIsRequiredServer } from "@/utils/login";
import { getGames } from "@/components/queries/getGames";
import { auth } from "@/lib/auth";
import Navbar from "@/components/dashboard/components/navbar";
import { Suspense } from "react";
import GamesServerList from "@/components/gamesServerContainer";
import Footer from "@/components/footer";

const Page = async () => {
  await loginIsRequiredServer();

  const session = await auth();
  const games = await getGames();

  // const GamesClientContainer = lazy(
  //   () => import("@/components/gamesServerContainer")
  // );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar name={session?.user?.name} />
      <main className="flex-grow p-4 mb-4">
        <Suspense>
          <GamesServerList games={games} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Page;

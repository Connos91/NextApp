import { prisma } from "@/lib/prisma";

export const getGames = async () => {
  try {
    const games = await prisma.game.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });

    return games ?? [];
  } catch (error) {
    console.error("[Server] Error fetching games:", error);
    return [];
  }
};

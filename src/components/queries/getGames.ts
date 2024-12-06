import { prisma } from "@/lib/prisma";

export const getGames = async () => {
  return await prisma.game.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });
};

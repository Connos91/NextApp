import { prisma } from "@/lib/prisma";

export const getGame = async (id: string) => {
  const game = await prisma.game.findUnique({
    where: {
      id
    }
  });

  if (!game) {
    return null;
  }

  return { ...game };
};

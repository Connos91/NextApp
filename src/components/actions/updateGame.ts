"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export const updateGame = async (id: string, game: FormData) => {
  const data = {
    title: game.get("title"),
    content: game.get("content")
  };

  await prisma.game.update({
    where: {
      id
    },
    data: {
      title: data.title as string,
      content: data.content as string
    }
  });

  revalidatePath("/dashboard");
  redirect("/dashboard");
};

"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const upsertGameSchema = z.object({
  title: z.string().min(1).max(191),
  content: z.string().min(1).max(1024)
});

type ActionState = {
  message: string;
  payload?: FormData;
};

export const upsertGame = async (
  id: string | undefined,
  _actionState: ActionState,
  formData: FormData
) => {
  try {
    const data = upsertGameSchema.parse({
      title: String(formData.get("title")),
      content: String(formData.get("content"))
    });

    await prisma.game.upsert({
      where: { id: id || "" },
      update: data,
      create: data
    });
    revalidatePath("./dashboard");

    return { message: "Game created" };
  } catch (error) {
    return { message: "Something went wrong", payload: formData };
  }
};

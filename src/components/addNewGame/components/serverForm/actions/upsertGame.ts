"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import {
  ActionState,
  fromErrorToActionState,
  toActionState
} from "../utils/actionState";

const upsertGameSchema = z.object({
  title: z.string().min(1).max(191),
  content: z.string().min(1).max(1024)
});

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
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }
  revalidatePath("./dashboard");

  return toActionState("Game created"); //{ message: "Game created", fieldErrors: {} };
};

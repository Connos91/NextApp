"use client";

import React, { useActionState, useEffect } from "react";
import { Game } from "@prisma/client";
import Form from "./Form";
import SubmitButton from "@/components/features/submit";
import { upsertGame } from "../serverForm/actions/upsertGame";
import { EMPTY_ACTION_STATE } from "./utils/actionState";
import { useRouter } from "next/navigation";

type GameFormProps = {
  game?: Game;
};

const ServerForm = ({ game }: GameFormProps) => {
  const router = useRouter();

  const [actionState, action] = useActionState(
    upsertGame.bind(null, game?.id),
    EMPTY_ACTION_STATE
  );

  useEffect(() => {
    if (actionState?.message === "Game created") {
      router.push("/dashboard");
    }
  }, [actionState, router]);

  return (
    <div className="flex flex-col justify-center border-2 border-green-500 rounded-lg p-10">
      <Form action={action} actionState={actionState}>
        <h1 className="block mb-2 text-lg font-medium mb-10">
          Create Game on Server
        </h1>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          className="text-black border rounded p-2"
          defaultValue={
            (actionState?.payload?.get("title") as string) ?? game?.title
          }
        />
        <span className="text-xs text-red-500">
          {actionState.fieldErrors?.title?.[0]}
        </span>
        <label htmlFor="content">Content</label>
        <input
          id="content"
          name="content"
          type="textarea"
          className="text-black border rounded p-2"
          defaultValue={
            (actionState?.payload?.get("content") as string) ?? game?.content
          }
        />
        <span className="text-xs text-red-500">
          {actionState.fieldErrors?.content?.[0]}
        </span>
        <SubmitButton label="Create" loading="Creating ..." />

        {actionState.message}
      </Form>
    </div>
  );
};

export default ServerForm;

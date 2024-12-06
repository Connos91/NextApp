"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Game } from "@prisma/client";
import Form from "./Form";
import SubmitButton from "@/components/features/submit";
import { upsertGame } from "../serverForm/actions/upsertGame";
import { useFormState } from "react-dom";

type GameFormProps = {
  game?: Game;
};

const ServerForm = ({ game }: GameFormProps) => {
  const router = useRouter();

  const [actionState, action] = useFormState(upsertGame.bind(null, game?.id), {
    message: ""
  });

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
          defaultValue={game?.title}
        />

        <label htmlFor="content">Content</label>
        <input
          id="content"
          name="content"
          type="textarea"
          className="text-black border rounded p-2"
          defaultValue={game?.content}
        />

        <SubmitButton label="Create" loading="Creating ..." />

        {actionState.message}
      </Form>
    </div>
  );
};

export default ServerForm;

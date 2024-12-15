"use client";

import React, { useState, useCallback, lazy } from "react";
import { useAddGameMutation } from "@/hooks/useAddGameMutation";
import Submit from "./features/submit";

import * as U from "./utils";
import { ErrorState } from "./errorState";

const Select = lazy(() => import("./features/select"));
const GameTitle = lazy(() => import("./features/title"));

type ClientFormProps = {
  id: string | number;
  title: string;
  category: string;
};

type GameFormProps = {
  game: ClientFormProps;
  mode: "add" | "update";
};

const ClientForm = ({ game, mode = "add" }: GameFormProps) => {
  const [tit, setTitle] = useState<string>(game?.title || "");
  const [cate, setCategory] = useState<string>(game?.category || "");
  const [errors, setErrors] = useState<ErrorState>({
    title: "",
    category: ""
  });

  const { mutate: addGame, isLoading: isAdding } = useAddGameMutation();
  // const { mutate: updateGame, isLoading: isUpdating } = useEditGame();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { hasError, newErrors } = U.handleError(tit, cate);

    if (!hasError) {
      // } else if (mode === "update" && initialData?.id) {
      //   updateGame({ id: initialData.id, title, category });
      // }
      setTitle("");
      setCategory("");
    } else {
      setErrors(newErrors);
    }
  };

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
      if (e.target.value.trim() !== "") {
        setErrors((prev) => ({ ...prev, title: "" }));
      }
    },
    []
  );

  const handleCategoryChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setCategory(e.target.value);
      if (e.target.value !== "") {
        setErrors((prev) => ({ ...prev, category: "" }));
      }
    },
    []
  );

  return (
    <div className="flex flex-col justify-center border-2 border-red-500 rounded-lg p-10 space-y-10">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-2">
        <h1 className="block mb-2 text-lg font-medium mb-10">
          {mode === "add" ? "Create Game on Client" : "Update Game on Client"}
        </h1>
        <GameTitle
          handleTitleChange={handleTitleChange}
          errors={errors}
          title={tit}
        />
        <Select
          handleCategoryChange={handleCategoryChange}
          errors={errors}
          category={cate}
        />
        <Submit isLoading={isAdding} isDisabled={!cate || !tit.trim()} />
      </form>
    </div>
  );
};

export default ClientForm;

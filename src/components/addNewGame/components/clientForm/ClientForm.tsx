"use client";

import React, { useState, useCallback, lazy } from "react";
import { useAddGameMutation } from "@/hooks/useAddGameMutation";
import Submit from "./features/submit";

import * as U from "./utils";
import { ErrorState } from "./errorState";

const Select = lazy(() => import("./features/select"));
const GameTitle = lazy(() => import("./features/title"));

const ClientForm = () => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [errors, setErrors] = useState<ErrorState>({
    title: "",
    category: ""
  });

  const { mutate, isLoading } = useAddGameMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { hasError, newErrors } = U.handleError(title, category);

    if (!hasError) {
      setTitle("");
      setCategory("");
      mutate({ title, category });
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
          Create Game on Client
        </h1>
        <GameTitle
          handleTitleChange={handleTitleChange}
          errors={errors}
          title={title}
        />
        <Select
          handleCategoryChange={handleCategoryChange}
          errors={errors}
          category={category}
        />
        <Submit isLoading={isLoading} isDisabled={!category || !title.trim()} />
      </form>
    </div>
  );
};

export default ClientForm;

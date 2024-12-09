"use client";

import React, { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLoading } from "@/context/Context";
import SpinnerIcon from "./SpinnerIcon";

type headerProps = {
  title: string;
};

const GameHeader = ({ title }: headerProps) => {
  const router = useRouter();
  const { isLoading, setIsLoading } = useLoading();

  const handleAddGame = useCallback(() => setIsLoading(true), [setIsLoading]);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        router.push("/addNewGame");
      }, 500);
    }
  }, [isLoading, router, setIsLoading]);

  return (
    <button
      className={`${
        isLoading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
      }font-semibold text-white inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white mt-4 lg:mt-0`}
      onClick={handleAddGame}
    >
      <SpinnerIcon title={title} isLoading={isLoading} />
    </button>
  );
};

export default GameHeader;

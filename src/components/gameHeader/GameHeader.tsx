"use client";

import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import SpinnerIcon from "./SpinnerIcon";
import { useLoading } from "@/context/Context";
import * as U from "@/utils/utils";

type headerProps = {
  title: string;
};

const GameHeader = ({ title }: headerProps) => {
  const { loadingMap } = useLoading();
  const isAnyLoading = U.checkLoading(loadingMap ?? {});

  const [mode, setMode] = useState(false);
  const router = useRouter();

  const handleAddGame = useCallback(() => {
    setMode(true);
    router.push("/addNewGame");
  }, [router]);

  return (
    <button
      className={`${
        mode || isAnyLoading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-green-500 hover:bg-green-600"
      } font-semibold text-white inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white mt-4 lg:mt-0`}
      onClick={handleAddGame}
      disabled={mode || isAnyLoading}
    >
      <SpinnerIcon title={title} isLoading={mode} />
    </button>
  );
};

export default GameHeader;

"use client";

import React, { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLoading } from "@/context/Context";

type headerProps = {
  title: string;
  isServer: boolean;
};

const GameHeader = ({ title, isServer }: headerProps) => {
  const router = useRouter();
  const { isLoading, setIsLoading } = useLoading();

  const handleAddGame = useCallback(() => setIsLoading(true), [setIsLoading]);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        router.push("/addNewGame");
      }, 1000);
    }
  }, [isLoading, router, setIsLoading]);

  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="font-bold py-4 uppercase">{title}</h1>
      {!isServer && (
        <button
          className={`${
            isLoading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
          } text-white font-bold py-2 px-4 rounded flex items-center`}
          onClick={handleAddGame}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Loading...
            </>
          ) : (
            "+Game"
          )}
        </button>
      )}
    </div>
  );
};

export default GameHeader;

"use client";

import React from "react";
import DeleteSVG from "@/components/SVG/DeleteSVG";

type deleteProps = {
  id: string | number;
  isLoading?: boolean;
  isDeleting?: boolean;
  handleDeleteGame: (id: string | number) => void;
};

const Delete = ({
  id,
  isLoading,
  isDeleting,
  handleDeleteGame
}: deleteProps) => {
  return (
    <button
      onClick={() => handleDeleteGame(id)}
      className={`${
        isLoading ? "cursor-not-allowed" : "cursor-pointer"
      } bg-transparent border-none p-0 m-0 focus:outline-none`}
      aria-label="Delete game"
      disabled={isLoading}
    >
      {isDeleting ? (
        <p className="text-red-500">Deleting...</p>
      ) : (
        <DeleteSVG isLoading={isLoading} />
      )}
    </button>
  );
};

export default Delete;

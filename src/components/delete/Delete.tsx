"use client";

import React, { useCallback } from "react";
import DeleteSVG from "@/components/SVG/DeleteSVG";
import { useLoading } from "@/context/Context";
import Loading from "../commonComponents/spinner/Loading";

type deleteProps = {
  id: string | number;
  isLoading?: boolean;
  flag?: string | undefined;
};

const Delete = ({ id, isLoading }: deleteProps) => {
  const { loadingMap, setLoadingMap } = useLoading();
  const deleteLoading = loadingMap?.[id]?.isDelete || false;

  const handleDeleteGame = useCallback(
    (id: number | string) => {
      if (setLoadingMap) {
        setLoadingMap((prevMap) => ({
          ...prevMap,
          [id]: {
            isEdit: false,
            isDelete: true
          }
        }));
      }

      alert("Delete:" + id);
    },
    [setLoadingMap]
  );

  return (
    <button
      onClick={() => handleDeleteGame(id)}
      className={`${
        isLoading ? "cursor-not-allowed" : "cursor-pointer"
      } bg-transparent border-none p-0 m-0 focus:outline-none`}
      aria-label="Delete game"
      disabled={isLoading}
    >
      {deleteLoading ? (
        <Loading flag="delete" />
      ) : (
        <DeleteSVG isLoading={isLoading} />
      )}
    </button>
  );
};

export default Delete;

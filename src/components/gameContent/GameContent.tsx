"use client";

import React from "react";
import { GameContentProps } from "./GameContentProps";

const GameContent = ({ title, category }: GameContentProps) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="text-3xl p-4">🐱‍🏍</div>
      <div className="p-3">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-gray-100 text-sm">{category}</p>
      </div>
    </div>
  );
};

export default GameContent;

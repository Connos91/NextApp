"use client";

import React from "react";
import { GameTitleProps } from "./GameTitleProps";

const GameTitle = ({ title }: GameTitleProps) => (
  <h1 className="font-semibold text-xl tracking-tight mb-4">{title}</h1>
);

export default GameTitle;

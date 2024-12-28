"use client";

import React from "react";
import "./Spinner.css";

type loadingProps = {
  className?: string;
};

const Loading = ({ className }: loadingProps) => (
  <div className="spinner"></div>
);

export default Loading;

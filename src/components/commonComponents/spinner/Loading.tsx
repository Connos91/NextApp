"use client";

import React from "react";
import "./Spinner.css";

type SpinnerProps = {
  flag: "edit" | "delete";
};

const Loading = ({ flag }: SpinnerProps) => (
  <div className={`spinner spinner-${flag}`}></div>
);

export default Loading;

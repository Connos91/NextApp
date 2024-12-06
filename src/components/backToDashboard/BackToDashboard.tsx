"use client";
import React from "react";

const BackToDashboard = () => {
  return (
    <a
      href="/dashboard"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 inline-block focus:outline-none font-sm m-4 py-2.5 px-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <span className="mr-2">←</span>
      <span>Back</span>
    </a>
  );
};

export default BackToDashboard;

"use client";

import React, { memo } from "react";
import { TitleProps } from "./TitleProps";
import * as C from "../constants";

const Title = (props: TitleProps) => {
  return (
    <div className="mb-6">
      <label
        htmlFor="gameTitle"
        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
      >
        {C.GAME_TITLE}
      </label>
      <div>
        <input
          id="gameTitle"
          type="text"
          value={props?.title}
          onChange={props?.handleTitleChange}
          placeholder="Enter a game title"
          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default memo(Title);

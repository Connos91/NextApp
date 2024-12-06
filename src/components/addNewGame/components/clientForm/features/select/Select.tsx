"use client";

import React, { memo } from "react";
import { SelectProps } from "./SelectProps";

import * as C from "../constants";

const Select = (props: SelectProps) => {
  return (
    <div className="mb-6">
      <label
        htmlFor="gamecategory"
        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
      >
        {C.CATEGORIES}
      </label>
      <select
        id="gamecategory"
        value={props?.category}
        onChange={props?.handleCategoryChange}
        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="" disabled>
          {C.SELECT_CATEGORY}
        </option>
        {C.CATEGORIES_OPTIONS.map((option) => (
          <option key={option?.id} value={option?.category}>
            {option?.category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(Select);

"use client";

import React, { memo } from "react";
import { SubmitProps } from "./SubmitProps";
import * as C from "./constants";

const Submit = (props: SubmitProps) => (
  <button
    disabled={props?.isLoading || props?.isDisabled}
    type="submit"
    className={`
      text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center
      focus:outline-none focus:ring-4
      ${
        props?.isLoading || props?.isDisabled
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-blue-800 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      }
    `}
  >
    {props?.isLoading ? C.SUBMITTING : C.SUBMIT}
  </button>
);

export default memo(Submit);

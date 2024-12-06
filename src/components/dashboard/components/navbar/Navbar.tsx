"use client";

import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { useLoading } from "@/context/Context";
import { SessionProps } from "../../SessionProps";
import * as C from "./constants";

const Navbar = ({ name }: SessionProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { isLoading } = useLoading();

  return (
    <>
      <nav className="w-full flex items-center justify-between flex-wrap bg-slate-900 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            {C.WELCOME_BACK} {name}
          </span>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex-grow"></div>
          <button
            onClick={() => signOut()}
            disabled={isLoading}
            className={`${
              isLoading
                ? "cursor-not-allowed"
                : "cursor-pointer hover:border-transparent hover:text-black hover:bg-white"
            } font-semibold text-white inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white mt-4 lg:mt-0`}
          >
            {C.LOGOUT}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

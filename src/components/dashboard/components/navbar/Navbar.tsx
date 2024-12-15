"use client";

import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { useLoading } from "@/context/Context";
import { SessionProps } from "../../SessionProps";
import * as C from "./constants";
import GameHeader from "@/components/gameHeader";
import MenuSVG from "@/components/SVG/MenuSVG";

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
            <MenuSVG />
          </button>
        </div>

        <div
          className={`w-full block flex lg:flex lg:w-auto space-x-5 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <GameHeader title="+ Games" />
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

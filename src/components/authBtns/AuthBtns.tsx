"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import { AuthBtnsProps } from "./AuthBtnsProps";
import * as U from "./utils";
import * as C from "./constants";

const AuthBtns = ({ type }: AuthBtnsProps) => {
  const handleClick = () => signIn(type);

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl  transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
    >
      <Image src={U.authImageType(type)} alt="Logo" width={20} height={20} />
      <span className="ml-4">
        {C.CONTINUE_WITH} {type}
      </span>
    </button>
  );
};

export default AuthBtns;

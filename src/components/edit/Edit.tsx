import React from "react";
import Link from "next/link";
import { GameFormProps } from "./GameFormProps";
import EditSVG from "../SVG/EditSVG";
import * as U from "./utils";

const Edit = ({ gameId, isServer }: GameFormProps) => {
  const href = U.href(gameId, isServer);

  return (
    <Link href={href}>
      <button>
        <EditSVG />
      </button>
    </Link>
  );
};

export default Edit;

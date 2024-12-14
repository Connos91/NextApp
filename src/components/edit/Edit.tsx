import React from "react";
import Link from "next/link";

type GameFormProps = {
  gameId: string | number;
};

const Edit = ({ gameId }: GameFormProps) => {
  return (
    <Link href={`/addNewGame/${gameId}`}>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="orange"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z" />
        </svg>
      </button>
    </Link>
  );
};

export default Edit;

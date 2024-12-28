// "use client";

// Solution 1

// import React, { useCallback } from "react";
// import { useRouter } from "next/navigation";
// import { GameFormProps } from "./GameFormProps";
// import * as U from "./utils";
// import EditSVG from "../SVG/EditSVG";
// import CustomBtn from "../commonComponents/CustomButton";
// import Loading from "../commonComponents/Loading";
// import { useLoading } from "@/context/Context";

// const Edit = ({ gameId, isServer }: GameFormProps) => {
//   const router = useRouter();
//   const { loadingMap, setLoadingMap } = useLoading();

//   const handleEditClick = useCallback(
//     (e: React.MouseEvent<HTMLButtonElement>) => {
//       e.preventDefault();
//       setLoadingMap((prevMap) => ({
//         ...prevMap,
//         [gameId]: true
//       }));

//       setTimeout(() => {
//         const url = U.href(gameId, isServer);
//         router.push(url);
//       }, 300);
//     },
//     [gameId, isServer, router, setLoadingMap]
//   );

//   const isLoading = !!loadingMap[gameId];

//   return (
//     <>
//       {isLoading ? (
//         <Loading className="text-sm text-orange-500" />
//       ) : (
//         <CustomBtn onClick={handleEditClick} className="w-6 h-6">
//           <EditSVG />
//         </CustomBtn>
//       )}
//     </>
//   );
// };

// export default Edit;

"use client";

// Solution 2

import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { GameFormProps } from "./GameFormProps";
import * as U from "./utils";
import EditSVG from "../SVG/EditSVG";
import CustomBtn from "../commonComponents/customBtn/CustomButton";
import Loading from "../commonComponents/spinner/Loading";

const Edit = ({ gameId, isServer }: GameFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleEditClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setIsLoading(true);
      setTimeout(() => {
        const url = U.href(gameId, isServer);
        router.push(url);
      }, 300);
    },
    [gameId, isServer, router]
  );

  return (
    <>
      {isLoading ? (
        <Loading className="text-sm text-orange-500" />
      ) : (
        <CustomBtn onClick={handleEditClick} className="w-6 h-6">
          <EditSVG />
        </CustomBtn>
      )}
    </>
  );
};

export default Edit;

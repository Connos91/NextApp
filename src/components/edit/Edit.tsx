"use client";

// Solution 1

import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { GameFormProps } from "./GameFormProps";
import * as U from "./utils";
import EditSVG from "../SVG/EditSVG";
import CustomBtn from "../commonComponents/customBtn/CustomButton";
import Loading from "../commonComponents/spinner/Loading";
import { useLoading } from "@/context/Context";

const Edit = ({ gameId, isLoading }: GameFormProps) => {
  const router = useRouter();
  const { loadingMap, setLoadingMap } = useLoading();

  const handleEditClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (setLoadingMap) {
        setLoadingMap((prevMap) => ({
          ...prevMap,
          [gameId]: true
        }));
      }

      // setTimeout(() => {
      //   const url = U.href(gameId);
      //   router.push(url);
      // }, 300);
    },
    [gameId, router, setLoadingMap]
  );

  const isEditLoading = loadingMap ? !!loadingMap[gameId] : false;

  return (
    <>
      {isEditLoading ? (
        <Loading />
      ) : (
        <CustomBtn
          onClick={handleEditClick}
          className="w-6 h-6"
          isLoading={isLoading}
        >
          <EditSVG isLoading={isLoading} />
        </CustomBtn>
      )}
    </>
  );
};

export default Edit;

//"use client";

// Solution 2

// import React, { useState, useCallback } from "react";
// import { useRouter } from "next/navigation";
// import { GameFormProps } from "./GameFormProps";
// import * as U from "./utils";
// import EditSVG from "../SVG/EditSVG";
// import CustomBtn from "../commonComponents/customBtn/CustomButton";
// import Loading from "../commonComponents/spinner/Loading";

// const Edit = ({ gameId, isServer }: GameFormProps) => {
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);

//   const handleEditClick = useCallback(
//     (e: React.MouseEvent<HTMLButtonElement>) => {
//       e.preventDefault();
//       setIsLoading(true);
//       setTimeout(() => {
//         const url = U.href(gameId, isServer);
//         router.push(url);
//       }, 300);
//     },
//     [gameId, isServer, router]
//   );

//   return (
//     <>
//       {isLoading ? (
//         <Loading />
//       ) : (
//         <CustomBtn onClick={handleEditClick} className="w-6 h-6">
//           <EditSVG />
//         </CustomBtn>
//       )}
//     </>
//   );
// };

// export default Edit;

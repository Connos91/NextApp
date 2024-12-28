import React from "react";

type editSVGProps = {
  isLoading?: boolean;
};

const EditSVG = ({ isLoading }: editSVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke={isLoading ? "grey" : "orange"}
      style={{
        cursor: isLoading ? "not-allowed" : "pointer"
      }}
    >
      <path d="M3 17.25V21h3.75l11-11-3.75-3.75-11 11zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </svg>
  );
};

export default EditSVG;

"use client";

import React, { createContext, useContext, useState } from "react";

interface LoadingContextType {
  loadingMap?: Record<string, { isEdit: boolean; isDelete: boolean }>;
  setLoadingMap?: React.Dispatch<
    React.SetStateAction<Record<string, { isEdit: boolean; isDelete: boolean }>>
  >;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [loadingMap, setLoadingMap] = useState<
    Record<string, { isEdit: boolean; isDelete: boolean }>
  >({});

  return (
    <LoadingContext.Provider value={{ loadingMap, setLoadingMap }}>
      {children}
    </LoadingContext.Provider>
  );
};

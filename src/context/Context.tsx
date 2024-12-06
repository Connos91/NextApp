import React, { createContext, useState, useContext } from "react";

export const Context = createContext<{
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}>({ isLoading: false, setIsLoading: () => {} });

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Context.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </Context.Provider>
  );
};

export const useLoading = () => useContext(Context);

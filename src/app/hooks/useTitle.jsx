import React, { createContext, useContext } from "react";

export const SelectedTitleContext = createContext();

export const useTitle = () => {
  return useContext(SelectedTitleContext);
};

export const SelectedTitleProvider = ({ children }) => {
  return (
    <SelectedTitleContext.Provider value={"Hello"}>
      {children}
    </SelectedTitleContext.Provider>
  );
};

import React from "react";
import { useContext, useReducer } from "react";

const AppProvider = React.createContext();

const Context = ({ children, initialState, reducer }) => {
  return (
    <AppProvider.Provider value={useReducer(reducer, initialState)}>
      {children}
    </AppProvider.Provider>
  );
};

export const useGlobal = () => useContext(AppProvider);

export default Context;

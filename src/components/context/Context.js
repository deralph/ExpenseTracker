import React from "react";
import { useContext, useReducer } from "react";
// import reducer from "./Reducer";
// import initialState from "./Reducer";

const AppProvider = React.createContext();

const Context = ({ children, initialState, reducer }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const [signin, setSignin] = useState(true);

  return (
    <AppProvider.Provider value={useReducer(reducer, initialState)}>
      {children}
    </AppProvider.Provider>
  );
};

export const useGlobal = () => useContext(AppProvider);

export default Context;

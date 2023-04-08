import React, { useReducer, createContext } from "react";

export const GlobalContext = createContext();

const initialState = {
  dentists: [],
  isDark: false,
  favs: [],
};

function globalReducer(state, action) {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "SWITCH_THEME":
      return { ...state, isDark: !state.isDark };
    default:
      return state;
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

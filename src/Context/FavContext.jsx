import React, { createContext, useReducer } from "react";

export const FavsContext = createContext();

const favsInitialState = {
  favs: JSON.parse(localStorage.getItem("favs")) || [],
};

const removeFav = (id, favsState) => {
  const newArr = favsState.favs.filter((fav) => fav.id !== id);
  localStorage.setItem("favs", JSON.stringify(newArr));
  return newArr;
};

const favsReducer = (favsState, action) => {
  switch (action.type) {
    case "HANDLE_FAVORITE":
      const isInFavorite = favsState.favs.some(
        (fav) => fav.id === action.payload.id
      );

      isInFavorite
        ? removeFav(action.payload.id, favsState)
        : localStorage.setItem(
            "favs",
            JSON.stringify([...favsState.favs, action.payload])
          );

      return isInFavorite
        ? { ...favsState, favs: removeFav(action.payload.id, favsState) }
        : { ...favsState, favs: [...favsState.favs, action.payload] };
    default:
      return state;
  }
};

export const FavsContextProvider = ({ children }) => {
  const [favsState, favsDispatch] = useReducer(favsReducer, favsInitialState);
  console.log(favsState);
  return (
    <FavsContext.Provider value={{ favsState, favsDispatch }}>
      {children}
    </FavsContext.Provider>
  );
};
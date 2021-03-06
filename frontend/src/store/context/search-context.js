import { createContext } from "react";
import { useCallback, useReducer } from "react";
import { updateObject } from "../../util/utility";

export const searchStateInit = {
  data: [],
};
export const SearchContext = createContext(searchStateInit);

export const searchReducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH_VALUE":
      return updateObject(state, { searchValue: action.searchValue });
    case "SET_DATA":
      return updateObject(state, { data: action.data });
    default:
      return state;
  }
};

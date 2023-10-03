import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions/favoriteActions";

const favoriteList = {
  content: [],
};

const favoritesReducer = (state = favoriteList, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        content: state.content.filter((element) => element.id !== action.payload),
      };

    default:
      return state;
  }
};

export default favoritesReducer;

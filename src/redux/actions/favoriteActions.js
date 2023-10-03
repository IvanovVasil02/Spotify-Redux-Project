export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITE";
export const addToFavorites = (element) => ({ type: ADD_TO_FAVORITES, payload: element });
export const removeFromFavorites = (element) => ({ type: REMOVE_FROM_FAVORITES, payload: element });

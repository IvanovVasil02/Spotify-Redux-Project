import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/mainReducer";
import genreReducer from "../reducers/genreReducer";
import favoritesReducer from "../reducers/favoriteReducer";

const rootReducers = combineReducers({
  songs: mainReducer,
  genre: genreReducer,
  favoriteList: favoritesReducer,
});

const store = configureStore({ reducer: rootReducers });

export default store;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/mainReducer";
import genreReducer from "../reducers/genreReducer";

const rootReducers = combineReducers({
  songs: mainReducer,
  genre: genreReducer,
});

const store = configureStore({ reducer: rootReducers });

export default store;

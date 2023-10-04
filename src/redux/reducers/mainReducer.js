import {
  DELETE_QUERY_SONGS,
  GET_CURRENT_TRUCKS,
  GET_QUERY_SONGS,
  GET_SELECTED_ELEMENT,
  SET_PLAYER_OFF,
  SET_PLAYER_ON,
} from "../actions";

const mainState = {
  searchResults: [],
  selectedElement: null,
  isPlayerOn: false,
  currentTrucks: [],
};

const mainReducer = (state = mainState, action) => {
  switch (action.type) {
    case GET_QUERY_SONGS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case DELETE_QUERY_SONGS:
      return {
        ...state,
        searchResults: action.payload,
      };

    case GET_SELECTED_ELEMENT:
      return {
        ...state,
        selectedElement: action.payload,
      };
    case GET_CURRENT_TRUCKS:
      return {
        ...state,
        currentTrucks: action.payload,
      };
    case SET_PLAYER_ON:
      return {
        ...state,
        isPlayerOn: action.payload,
      };
    case SET_PLAYER_OFF:
      return {
        ...state,
        isPlayerOn: action.payload,
      };

    default:
      return state;
  }
};
export default mainReducer;

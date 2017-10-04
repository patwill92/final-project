import { GET_MAIN_MENU, GET_DESSERT_MENU, GET_STARTER_MENU } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_MAIN_MENU:
      return {
        ...state,
        main: [...action.payload.data]
      };
      break;
    case GET_STARTER_MENU:
      return {
        ...state,
        starter: [...action.payload.data]
      };
      break;
    case GET_DESSERT_MENU:
      return {
        ...state,
        dessert: [...action.payload.data]
      };
      break;
    default:
      return state;
  }
}
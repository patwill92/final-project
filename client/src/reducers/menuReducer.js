import {GET_MAIN_MENU, GET_DESSERT_MENU, GET_STARTER_MENU,
  ADD_MENU_ITEM, GET_MENU_TAB, GET_ADMIN_MAIN, GET_ADMIN_DESSERT,
  GET_ADMIN_STARTER} from "../actions/types";

export default function(state = {
  tab: 'main'
}, action) {
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
    case GET_ADMIN_MAIN:
      return {
        ...state,
        adminMain: [...action.payload.data]
      };
      break;
    case GET_ADMIN_STARTER:
      return {
        ...state,
        adminStarter: [...action.payload.data]
      };
      break;
    case GET_ADMIN_DESSERT:
      return {
        ...state,
        adminDessert: [...action.payload.data]
      };
      break;
    case ADD_MENU_ITEM:
      return {
        ...state
      };
      break;
    case GET_MENU_TAB:
      return {
        ...state,
        tab: action.payload
      };
      break;
    default:
      return state;
  }
}
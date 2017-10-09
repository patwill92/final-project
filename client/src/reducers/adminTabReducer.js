import {GET_ADMIN_TAB, GET_IMAGE_SRC} from "../actions/types";

export default (state = {
  menu: true,
  content: false
}, action) => {
  switch(action.type) {
    case GET_ADMIN_TAB:
      state = {
        ...state,
        ...action.payload
      }; break;
    case GET_IMAGE_SRC:
      state = {
        ...state,
        ...action.payload
      }; break;
  }
  return state;
};


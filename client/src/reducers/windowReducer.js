import {GET_WIDTH, GET_SCROLL} from "../actions/types";

const windowReducer = (state = {
  width: window.innerWidth,
  scroll: window.pageYOffset
}, action) => {
  switch(action.type) {
    case GET_WIDTH:
      state = {
        ...state,
        width: action.payload
      }; break;
    case GET_SCROLL:
      state = {
        ...state,
        scroll: action.payload
      }; break;
  }
  return state;
};

export default windowReducer;
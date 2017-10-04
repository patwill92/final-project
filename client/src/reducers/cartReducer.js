import {GET_CART} from "../actions/types";

export default (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case GET_CART:
      return action.payload || false;
    default:
      return state;
  }
}



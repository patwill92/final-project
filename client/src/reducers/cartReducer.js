import {GET_CART, UPDATE_CART, EDIT_CART} from "../actions/types";
import isEmpty from 'lodash/isEmpty';

export default (state = {
  items: []
}, action) => {
  switch (action.type) {
    case GET_CART:
      if (isEmpty(action.payload)) {
        return {
          ...state,
          totalQty: 0
        };
      } else {
        return {
          ...state,
          ...action.payload
        };
      }
    case UPDATE_CART:
      return {
        ...state,
        ...action.payload
      };
    case EDIT_CART:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}



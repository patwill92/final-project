import {ADD_CART_ITEM, DELETE_CART_ITEM} from "./types";

export function addCartItem(item) {
  return {
    type: ADD_CART_ITEM,
    payload: item
  }
}

export function deleteCartItem(item) {
  return {
    type: DELETE_CART_ITEM,
    payload: item
  }
}

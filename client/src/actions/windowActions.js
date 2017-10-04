import {GET_WIDTH, GET_SCROLL} from "./types";

export function getWidth() {
  return {
    type: GET_WIDTH,
    payload: window.innerWidth
  }
}

export function getScroll() {
  return {
    type: GET_SCROLL,
    payload: window.pageYOffset
  }
}
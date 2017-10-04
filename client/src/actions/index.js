import axios from 'axios';
import {GET_MAIN_MENU, GET_DESSERT_MENU, GET_STARTER_MENU,
  GET_USER, GET_SCROLL, GET_WIDTH, GET_CART, DELETE_CART_ITEM
} from "./types";

export const getMainMenu = (param) => async dispatch => {
  dispatch({type: GET_MAIN_MENU, payload: await axios.get('/api/menu/main')})
};

export const getStarterMenu = (param) => async dispatch => {
  dispatch({type: GET_STARTER_MENU, payload: await axios.get('/api/menu/starter')})
};

export const getDessertMenu = (param) => async dispatch => {
  dispatch({type: GET_DESSERT_MENU, payload: await axios.get('/api/menu/dessert')})
};

export const getUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({type: GET_USER, payload: res.data})
};

export const getWidth = () => {
  return {
    type: GET_WIDTH,
    payload: window.innerWidth
  }
};

export const getScroll = () => {
  return {
    type: GET_SCROLL,
    payload: window.pageYOffset
  }
};

export const getCart = () => async dispatch => {
  const res = await axios.get('/api/cart');
  dispatch({type: GET_CART, payload: res.data})
};

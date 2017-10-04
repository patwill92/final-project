import axios from 'axios';
import {GET_MAIN_MENU, GET_DESSERT_MENU, GET_STARTER_MENU} from "./types";

export const getMainMenu = (param) => async dispatch => {
  dispatch({type: GET_MAIN_MENU, payload: await axios.get('/api/menu/main')})
};

export const getStarterMenu = (param) => async dispatch => {
  dispatch({type: GET_STARTER_MENU, payload: await axios.get('/api/menu/starter')})
};

export const getDessertMenu = (param) => async dispatch => {
  dispatch({type: GET_DESSERT_MENU, payload: await axios.get('/api/menu/dessert')})
};
import axios from 'axios';
import {
  GET_MAIN_MENU, GET_DESSERT_MENU, GET_STARTER_MENU,
  GET_USER, GET_SCROLL, GET_WIDTH, GET_CART, UPDATE_CART,
  EDIT_CART, GET_ADMIN_TAB, GET_IMAGE_SRC, ADD_MENU_ITEM,
  GET_MENU_TAB, GET_ADMIN_DESSERT, GET_ADMIN_MAIN, GET_ADMIN_STARTER
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

export const getAdminMenu = (param) => async dispatch => {
  switch (param) {
    case 'dessert':
      dispatch({type: GET_ADMIN_DESSERT, payload: await axios.get(`/api/menu/admin/${param}`)});
      break;
    case 'main':
      dispatch({type: GET_ADMIN_MAIN, payload: await axios.get(`/api/menu/admin/${param}`)});
      break;
    case 'starter':
      dispatch({type: GET_ADMIN_STARTER, payload: await axios.get(`/api/menu/admin/${param}`)});
      break;
  }
};

export const updateMenuItem = (param, id) => async dispatch => {
  console.log(param);
  console.log(id);
  switch (param.category) {
    case 'dessert':
      dispatch({type: GET_ADMIN_DESSERT, payload: await axios.post(`/api/menu/admin/update/${id}`, {
        available: param.available,
        category: param.category
      })});
      break;
    case 'main':
      dispatch({type: GET_ADMIN_MAIN, payload: await axios.post(`/api/menu/admin/update/${id}`, {
        available: param.available,
        category: param.category
      })});
      break;
    case 'starter':
      dispatch({type: GET_ADMIN_STARTER, payload: await axios.post(`/api/menu/admin/update/${id}`, {
        available: param.available,
        category: param.category
      })});
      break;
  }
};

export const addMenuItem = (formData, history) => async dispatch => {
  let res = await axios.post('/api/menu_form', formData,
    {headers: {'Content-Type': 'multipart/form-data'}});
  history.push('/menu');
  console.log(res.data);
  switch (res.data.category) {
    case 'main':
      dispatch({type: GET_MAIN_MENU, payload: res.data});
      break;
    case 'dessert':
      dispatch({type: GET_DESSERT_MENU, payload: res.data});
      break;
    case 'starter':
      dispatch({type: GET_STARTER_MENU, payload: res.data});
      break;
  }
};

export const getMenuTab = (tab) => {
  return {
    type: GET_MENU_TAB,
    payload: tab
  }
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

export const updateCart = (id, item) => async dispatch => {
  const res = await axios.post(`/api/add_cart/${id}`, item);
  dispatch({type: UPDATE_CART, payload: res.data})
};

export const editCart = (id, item) => async dispatch => {
  const res = await axios.post(`/api/edit_cart/${id}`, item);
  dispatch({type: EDIT_CART, payload: res.data})
};

export const getAdminTab = (tab) => {
  return {
    type: GET_ADMIN_TAB,
    payload: tab
  }
};

export const getImageSrc = (blob) => {
  return {
    type: GET_IMAGE_SRC,
    payload: blob
  }
};
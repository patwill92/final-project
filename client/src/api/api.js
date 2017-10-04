import axios from 'axios';

export const getMenu = (param) => axios.get(`/api/menu/${param}`);


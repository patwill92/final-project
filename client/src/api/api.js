import axios from 'axios';

export const getCurrentUser = () => axios.get('/api/current_user');

export const getMenu = (param) => axios.get(`/api/menu/${param}`);


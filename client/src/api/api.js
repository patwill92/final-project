import axios from 'axios';

export const getCurrentUser = () => axios.get('/api/current_user');

export const getMenu = () => axios.get('/api/menu');

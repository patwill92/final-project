import {combineReducers} from 'redux';

import window from './windowReducer';
import user from './userReducer';
import menu from './menuReducer';
import cart from './cartReducer';

export default combineReducers({
    window,
    user,
    menu,
    cart
  }
);

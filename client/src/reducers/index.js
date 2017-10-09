import {combineReducers} from 'redux';

import {reducer as reduxForm} from 'redux-form';
import window from './windowReducer';
import user from './userReducer';
import menu from './menuReducer';
import cart from './cartReducer';
import adminTab from './adminTabReducer';

export default combineReducers({
    window,
    user,
    menu,
    cart,
    adminTab,
    form: reduxForm
  }
);

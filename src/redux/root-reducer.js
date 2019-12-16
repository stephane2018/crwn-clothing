import {combineReducers} from 'redux';
import userReducer from './user/user-reducer';
import cardReducer from './cart/cart-reducer'
import { cartActionTypes } from './cart/cart.types';

export default combineReducers({
    user: userReducer,
    cart: cardReducer
})
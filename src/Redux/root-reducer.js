 import {combineReducers} from  'redux'
import userReducer from './User/user-reducer'
import cartReducer from './Cart/cart_reducer'

 export default combineReducers({
     user: userReducer,
     cart: cartReducer
 })
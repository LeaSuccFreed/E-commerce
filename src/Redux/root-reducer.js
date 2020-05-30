 import {combineReducers} from  'redux'
import userReducer from './User/user-reducer'
import cartReducer from './Cart/cart_reducer'
import directoryReducer from './Directory/directory-reducer';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer
})

 export default persistReducer(persistConfig, rootReducer)
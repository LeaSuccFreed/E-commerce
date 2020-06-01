import {combineReducers} from  'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import userReducer from './User/user-reducer'
import cartReducer from './Cart/cart_reducer'
import directoryReducer from './Directory/directory-reducer';
import shopReducer from './shop/shop_reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

 export default persistReducer(persistConfig, rootReducer)
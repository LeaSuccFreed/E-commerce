import SHOP_DATA from "./shop_data";
import ShopActionTypes from "./shop_type";


const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action){
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return{
                ...state,
                collections: action.payload
            }
        default: return state
    }
}

export default shopReducer
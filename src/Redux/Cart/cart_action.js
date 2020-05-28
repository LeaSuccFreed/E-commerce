import CartActionTypes from './cart_types'

export const toggleCartHidden = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_HIDDEN
    }
}

export const addItem = (item) =>({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})
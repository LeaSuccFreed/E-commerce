
import React from 'react'
import CustomButton from '../custom-button/custom-button_component'
import './cart-dropdown_style.scss'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item_component'


function CartDropdown({cartItems}) {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' >
                {
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                    ))
                }
            </div>

            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = ({cart: { cartItems }}) => {
    return {
        cartItems
    }
}

export default connect(mapStateToProps)(CartDropdown) 



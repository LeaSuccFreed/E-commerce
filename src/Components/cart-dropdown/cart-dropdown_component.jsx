
import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './cart-dropdown_style.scss'

import CustomButton from '../custom-button/custom-button_component'
import CartItem from '../cart-item/cart-item_component'
import { selectCartItems } from '../../Redux/Cart/cart-selector'




function CartDropdown({cartItems , history}) {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' >
                {
                    cartItems.length ?(
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                    ))
                    ) : ( <span className='empty-message'>Your cart is empty</span> )
                }
            </div>

            <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
        cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown) )



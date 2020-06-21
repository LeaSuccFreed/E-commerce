
import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CartItem from '../cart-item/cart-item_component'
import { selectCartItems } from '../../Redux/Cart/cart-selector'
import { toggleCartHidden } from '../../Redux/Cart/cart_action'

import {CartDropdownContainer, CartDropdownButton, EmptyMessageContainer, CartItemsContainer} from './cart-dropdown.styles'

function CartDropdown({cartItems , history, dispatch }) {
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?(
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                    ))
                    ) : ( <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer> )
                }
            </CartItemsContainer>

            <CartDropdownButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }}>
                GO TO CHECKOUT
            </CartDropdownButton>
        </CartDropdownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
        cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown) )



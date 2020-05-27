import React from 'react'
import { connect } from 'react-redux'

import {toggleCartHidden} from '../../Redux/Cart/cart_action';

import {ReactComponent as ShoppingIcon} from '../../assets/shopingBag.svg'

import './cart-icon_style.scss'

function CartIcon({toggleCartHidden}) {
    return (
        <div onClick={toggleCartHidden} className='cart-icon'>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'> 0 </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

export default connect(null, mapDispatchToProps)(CartIcon)

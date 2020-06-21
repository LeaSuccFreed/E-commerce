import React from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {toggleCartHidden} from '../../Redux/Cart/cart_action';
import { selectCartItemsCount } from '../../Redux/Cart/cart-selector';

import {ReactComponent as ShoppingIcon} from '../../assets/shopingBag.svg'



import './cart-icon_style.scss'

function CartIcon({toggleCartHidden, itemCount}) {
    return (
        <div onClick={toggleCartHidden} className='cart-icon'>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'> {itemCount} </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)

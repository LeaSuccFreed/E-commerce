import React from 'react'
import{Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {auth} from '../../firebase/firebase.utils'

import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon_component'
import CartDropdown from '../cart-dropdown/cart-dropdown_component'

import './header_style.scss'

import { selectCurrentUser } from '../../Redux/User/user-selector'
import { selectCartHidden } from '../../Redux/Cart/cart-selector'


const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/contact'>
                Contact
            </Link>
            {
                currentUser ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> 
                            : <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
)

const mapStateToProps = createStructuredSelector( 
     {
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
    }
)
export default connect(mapStateToProps)(Header)
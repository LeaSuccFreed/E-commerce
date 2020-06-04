import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {auth} from '../../firebase/firebase.utils'

import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon_component'
import CartDropdown from '../cart-dropdown/cart-dropdown_component'

import { selectCurrentUser } from '../../Redux/User/user-selector'
import { selectCartHidden } from '../../Redux/Cart/cart-selector'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'


const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to='/shop'>
                Shop
            </OptionLink>
            <OptionLink to='/contact'>
                Contact
            </OptionLink>
            {
                currentUser ? <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink> 
                            : <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector( 
     {
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
    }
)
export default connect(mapStateToProps)(Header)
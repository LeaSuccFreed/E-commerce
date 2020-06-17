import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon_component'
import CartDropdown from '../cart-dropdown/cart-dropdown_component'

import { selectCurrentUser } from '../../Redux/User/user-selector'
import { selectCartHidden } from '../../Redux/Cart/cart-selector'
import { signOutStart } from '../../Redux/User/user-action'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'

const Header = ({currentUser, hidden, signOutStart}) => (
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
                currentUser ? <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink> 
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

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
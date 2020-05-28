import React from 'react'

import './custom-button_style.scss'

const CustomButton =({children, isGoogleSignIn, inverted, ...otheProps})=>(
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button` } {...otheProps}>
        {children}
    </button>
)

export default CustomButton
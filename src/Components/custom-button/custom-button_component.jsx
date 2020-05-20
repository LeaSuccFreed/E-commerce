import React from 'react'

import './custom-button_style.scss'

const CustomButton =({children, isGoogleSignIn, ...otheProps})=>(
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button` } {...otheProps}>
        {children}
    </button>
)

export default CustomButton
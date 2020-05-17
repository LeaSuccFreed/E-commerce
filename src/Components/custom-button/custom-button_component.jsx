import React from 'react'

import './custom-button_style.scss'

const CustomButton =({children, ...otheProps})=>(
    <button className='custom-button' {...otheProps}>
        {children}
    </button>
)

export default CustomButton
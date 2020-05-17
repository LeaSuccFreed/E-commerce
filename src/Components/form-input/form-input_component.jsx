import React from 'react'

import './form-input_style.scss'

const FormInput = ({handleChange, label, ...otherProps})=>(
    <div>
        <div className="group">
            <input className='form-input' onChange={handleChange} {...otherProps}></input>
            {
                label ? 
                (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label> )
                : null
            }
        </div>
    </div>
)

export default FormInput
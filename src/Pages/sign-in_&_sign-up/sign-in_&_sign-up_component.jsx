import React from 'react'


import SignIn from '../../Components/sign-in/sign-in_component'
import SignUp from '../../Components/sign-up/sign-up_component'

import './sign-in_&_sign-up_style.scss'


const SignInAndSignUp = ()=>(
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
    )


export default SignInAndSignUp
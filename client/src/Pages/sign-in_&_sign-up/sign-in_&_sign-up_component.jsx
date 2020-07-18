import React from 'react'


import SignIn from '../../Components/sign-in/sign-in_component'
import SignUp from '../../Components/sign-up/sign-up_component'

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';


const SignInAndSignUp = ()=>(
    <SignInAndSignUpContainer>
        <SignIn/>
        <SignUp/>
    </SignInAndSignUpContainer>
    )


export default SignInAndSignUp
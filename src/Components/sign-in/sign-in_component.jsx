import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input_component';
import CustomButton from '../custom-button/custom-button_component';

import { SignInContainer, SignInTitle, ButtonsBarContainer } from './sign-in_style'

import { googleSignInStart, emailSignInStart } from '../../Redux/User/user-action';


const SignIn = ({emailSignInStart, googleSignInStart}) => {
    
    const [userCredentials, setCredentials] = useState({email: '', password: ''})
    
    const {email,password} = userCredentials

   const handleSubmit = async (e)=>{
        e.preventDefault()

        emailSignInStart(email, password)
    }

  const handleChange = (e)=>{
        const {value, name} = e.target;

        setCredentials({...userCredentials, [name]: value })
    }

    

        return(
            <SignInContainer>
                <SignInTitle>I Already have an account</SignInTitle>
                <span>Sign In with your email and password</span>

                <form onSubmit={handleSubmit}>
                     <FormInput name="email" type="email" value={email} handleChange={handleChange} label="email" required/>
                     
                     <FormInput name="password" type="password" value={password} handleChange={handleChange} label="password" required/>
                     
                     <ButtonsBarContainer>
                        <CustomButton type="submit">SignIn</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>
                     </ButtonsBarContainer>
                </form>
            </SignInContainer>
        )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)
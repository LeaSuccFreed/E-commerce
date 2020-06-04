import React from 'react';

import FormInput from '../form-input/form-input_component';
import CustomButton from '../custom-button/custom-button_component';
import { SignInContainer, SignInTitle, ButtonsBarContainer } from './sign-in_style'

import {auth, signInwithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e)=>{
        e.preventDefault()

        const {email, password} = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password);  
            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
            console.log(error)
        }

      
    }

    handleChange = (e)=>{
        const {value, name} = e.target;

        this.setState({ [name]: value })
    }

    render(){
        return(
            <SignInContainer>
                <SignInTitle>I Already have an account</SignInTitle>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                     <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="email" required/>
                     
                     <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="password" required/>
                     
                     <ButtonsBarContainer>
                        <CustomButton type="submit">SignIn</CustomButton>
                        <CustomButton type="button" onClick={signInwithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                     </ButtonsBarContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn
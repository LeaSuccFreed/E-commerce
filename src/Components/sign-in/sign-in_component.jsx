import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input_component';
import CustomButton from '../custom-button/custom-button_component';

import { SignInContainer, SignInTitle, ButtonsBarContainer } from './sign-in_style'

import { googleSignInStart, emailSignInStart } from '../../Redux/User/user-action';


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
        const {emailSignInStart} = this.props
        const {email, password} = this.state

        emailSignInStart(email, password)
    }

    handleChange = (e)=>{
        const {value, name} = e.target;

        this.setState({ [name]: value })
    }

    render(){
        const {googleSignInStart} = this.props
        return(
            <SignInContainer>
                <SignInTitle>I Already have an account</SignInTitle>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                     <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="email" required/>
                     
                     <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="password" required/>
                     
                     <ButtonsBarContainer>
                        <CustomButton type="submit">SignIn</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>
                     </ButtonsBarContainer>
                </form>
            </SignInContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)
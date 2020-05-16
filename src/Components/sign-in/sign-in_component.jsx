import React from 'react';

import './sign-in_style.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault()

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = (e)=>{
        const {value, name} = e.target;

        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I Already have an account</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                     <input name="email" type="email" value={this.state.email} onChange={this.handleChange} required></input>
                     <label>Email</label>

                     <input name="password" type="password" value={this.state.password} onChange={this.handleChange} required></input>
                     <label>Password</label>

                     <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default SignIn
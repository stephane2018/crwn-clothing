import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {SignInWithGoogle} from '../../firebase/firebase.utils'
import './sign-in.style.scss'

 class SignIn extends React.Component {
     constructor(props) {
       super(props)
     
       this.state = {
          email: '', 
          password: ''
       }
     }
    
     handleSubmit=event=>{
       event.preventDefault();
       this.setState({
           email:'',
           password: ''
        })  
     }
    handleChange= event=>{
        const {value, name}= event.target;
        this.setState({[name]: value})
    }
  render() {
    return (
      <div className='sign-in'>
      <h2> I Already have an account </h2>
      <span>Sign in With your email and password </span>
      <form onSubmit={this.handleSubmit}>
      <FormInput 
       name="email" 
       type="email" 
       label='email'
       values={this.state.email}
        required />
      <FormInput 
      name="password" 
      type="password"
      label='password'
      onChange={this.handleChange}
      values={this.state.password} 
      required />
    <div className='buttons'>
    <CustomButton type="button">Sign Up </CustomButton>
    <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Sign In with google </CustomButton>
    </div>
      </form>
      </div>
    )
  }
}
export default SignIn;
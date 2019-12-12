import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth, CreateUserProfileDocument} from '../../firebase/firebase.utils'
import './sign-up.style.scss'

class SignUp extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         displayName: '',
         email: '',
         password: '',
         confirmPassword: ''
      }
    }
    handleSubmit=async event=>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword}= this.state
        //.log(this.state.displayName);
        if(password!==confirmPassword){
            alert("password is different");
            return; 
        }
        try {
          

           const {user}= await auth.createUserWithEmailAndPassword(email, password);
           console.log(user);
           console.log({displayName});
           await CreateUserProfileDocument(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
             });
        } catch (error) {
           console.log(error); 
        }
    }
    handleChange= event=>{
        const {name,value}= event.target;
        this.setState({[name]: value})
    }
    
  render() {
       const {displayName, email, password, confirmPassword}= this.state
    return (
        <div className="sign-up">
        <h2> I do not have a account  </h2>
        <span>Sign up With your email and password </span>
        <form onSubmit={this.handleSubmit}>
        <FormInput 
         name="displayName" 
         type="text" 
         label='displayName'
         value={displayName}
         onChange={this.handleChange}
          required />
        <FormInput 
         name="email" 
         type="email" 
         label='email'
         value={email}
         onChange={this.handleChange}
          required />
        <FormInput 
        name="password" 
        type="password"
        label='password'
        value={password}
        onChange={this.handleChange}
        required />

        <FormInput 
        name="confirmPassword" 
        type="password"
        label='confirmPassword'
        value={confirmPassword}
        onChange={this.handleChange}
        required />
      <div className='buttons'>
      <CustomButton type="submit">SIGN UP </CustomButton>
      </div>
    </form>
 </div>
    )
  }
}

export default SignUp;

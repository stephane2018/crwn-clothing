import React from 'react';
import './App.css';
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Homepage from  './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component';
import {auth, CreateUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
class  App extends React.Component {
  
  unsubscribeFromAuth=null
  componentDidMount(){
    const {SetCurrentUser}= this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){ 

        const userRef= await CreateUserProfileDocument(userAuth);
      
        userRef.onSnapshot(snapShot=>{
          SetCurrentUser({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      else{
        setCurrentUser(userAuth);
       // console.log(this.state.currentUser);
      }
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
   
     return (
    <div >
    <Header/>
    <Switch>  
     <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path='/checkout' component={CheckoutPage}/>
      <Route exact path='/signin' render={()=>this.props.currentUser? (<Redirect to='/'/>): (<SignInAndSignUpPage/>) }/>
    </Switch>
   
    </div>
  );
  }
 
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  SetCurrentUser: user=>dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

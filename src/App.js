import React from 'react';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import Homepage from  './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth, CreateUserProfileDocument} from './firebase/firebase.utils'
const HatsPage=()=>(
  <div>
    <h1>
    HatsPage
    </h1>
  </div>
)
const TopicsList=()=>(
  <div>
    <h1>
    HatsPage
    </h1>
  </div>
)
const TopicsDetails=(props)=>{
  console.log(props)
  return(
    <div>
   <h1> KList page </h1>
  </div>
  )
}

class  App extends React.Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }
  unsubscribeFromAuth=null
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){ 

        const userRef= await CreateUserProfileDocument(userAuth);
      
         console.log(userRef);
        userRef.onSnapshot(snapShot=>{
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          }, ()=>{
            console.log(this.state);
          });
        });
      }
      else{
        this.setState({currentUser: userAuth});
        console.log(this.state.currentUser);
      }
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
     return (
    <div >
    <Header currentUser={this.state.currentUser}/>
    <Switch>  
     <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInAndSignUpPage}/>
    </Switch>
   
    </div>
  );
  }
 
}

export default App;

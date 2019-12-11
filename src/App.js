import React from 'react';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
//import Homepage from  './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

const Homepage=props=>{
  console.log(props);
  return(
  <div>
    <Link to='/topics'>Topics</Link>
    <h1>
    Home page 
    </h1>
  </div>
)}
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

function App() {
  return (
    <div >
    <Switch>  
     <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route path='/topics/:topicsId' component={TopicsDetails}/>
    </Switch>
   
    </div>
  );
}

export default App;

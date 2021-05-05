import React from 'react';
 import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
 import Nav from './Nav-Bar/Nav';
 import Home from './components/Home/Home';
 import SignUp from './components/SignUp/SignUp';
 import ThankYou from './components/SignUp/ThankYou';
 import Login from './components/Login/Login';
import './App.css';

function App() {
  return (
    <Router>
    <div>
    <Nav/> 
    <Switch>
       <Route path='/' exact component={Home}/> 
        <Route path='/signup' component={SignUp}/>
        <Route path='/thank-you' component={ThankYou}/>
       <Route path='/login' component={Login}/>
     {/*  <Route path='/first' component={First}/>
       <Route path='/sec' component={Sec}/> */}
    </Switch> 
    </div> 
</Router>
  );
}

export default App;

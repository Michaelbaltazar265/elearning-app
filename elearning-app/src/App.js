import React from 'react';
 import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
 import Nav from './Nav-Bar/Nav';
 import Home from './components/Home/Home';
 import SignUp from './components/SignUp/SignUp';
 import ThankYou from './components/SignUp/ThankYou';
 import Login from './components/Login/Login';
 import CategoryMain from './components/Category/CategoryMain';
 import FeedBack from './components/Feedback/Feedback';
 import MyClasses from './components/MyClasses/MyClasses';
import './App.css';

function App(props) {
  return (
    <Router>
    <div>
    <Nav/> 
    <Switch>
       <Route path='/' exact component={Home}/> 
        <Route path='/signup' component={SignUp}/>
        <Route path='/thank-you' component={ThankYou}/>
       <Route path='/login' component={Login}/>
      <Route path='/browser' component={CategoryMain}/>
       <Route path='/feedback' component={FeedBack}/>
       <Route path='/my-classes' component={MyClasses} />
    </Switch> 
    </div> 
</Router>
  );
}

export default App;

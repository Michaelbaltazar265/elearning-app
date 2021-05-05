import React from 'react'; 
import info from './signInInfo';

const ThankYou = (props) => { 
//    function handleLogin(e){ 
//     props.setView("Login")
//     }
    return ( 
        <div className='container'>
            <div className='row'>
                <h1 className='text-center'>{
                `Thank you for signing up ${info.firstName} ${info.lastName}.
                We will be sending you an email at ${info.email}, please make sure to save your password.
                `
                }</h1>
                <h3 className='text-center'>To login please click below</h3>
                <button className='btn btn-outline-success narbar-btn'>Login</button>
            </div>
        </div>
    )
}

export default ThankYou;
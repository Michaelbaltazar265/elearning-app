import React from 'react'; 
import "./login.css";

const WrongInPut = props => {
    console.log(`this is email ${props.email} and inputEmail is ${props.inputEmail}`)
    if (props.email === props.inputEmail) { 
        return <p className='wrong-input'>Wrong Email please try again</p>
    } 
    
    return;
}
export default WrongInPut;
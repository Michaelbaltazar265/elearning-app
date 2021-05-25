import React from 'react'; 
import "./login.css";

const WrongInPut = props => {
  
    if (props.email === props.inputEmail) { 
        return <p className='wrong-input'>Wrong Email please try again</p>
    } 
    
    return;
}
export default WrongInPut;
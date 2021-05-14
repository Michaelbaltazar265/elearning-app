
import info from "./../components/SignUp/signInInfo";

const StudReducer=(state={
    firstName:info.firstName,
    lastName:info.lastName,
    email:info.email, 
    password: info.password},action)=>{
    switch(action.type)
    {
        case 'STUDENT':
            return action.payload;
        default:
            return state;
    }
}

export default StudReducer;
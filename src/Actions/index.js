

export const EmpAction=()=>{
    return{
        type:'EMPLOYEE',
        payload:{empid:'E001',name:'John',contact:225588,dept:'ADMIN'}
    }
} 



export const StudAction=()=>{
    return{
        type:'STUDENT',
        payload:{firstName:'',lastName:'',email:'', password: ''}
    }
}

export const UserAction=(dispatch)=>{
    fetch('http://jsonplaceholder.typicode.com/posts/1/comments')
    .then(res=>res.json())
    .then(res=>dispatch({type:'USER',payload:res}))
}
import React from "react";
import info from "./../SignUp/signInInfo";
import { Link } from "react-router-dom";
import "./login.css";
import yellow from './../../images/yellow-tape.jpg'
// import WrongInput from './WrongInput'; 

class Login extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: info.email,
      password: info.password,
      inputEmail: "", 
      inputPw: ""
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePW = this.handleChangePW.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChangeEmail = (e)=> { 
    this.setState({ 
      inputEmail: e.target.value, 
    });
  }
  handleChangePW = (e)=> { 
    this.setState({ 
      inputPw: e.target.value, 
    });
  }

  handleSubmit = (e)=> { 
    e.preventDefault();  
    const email = this.state.email; 
    const inputEmail = this.state.inputEmail;
    const password = this.state.password;
    const inputPw = this.state.inputPw;
  if (email === inputEmail){ 
    console.log("right")
  }
  else if (inputEmail !== email) { 
    alert("Wrong email please try again")
  }   
  }

  

  render() {
    if (this.state.email === "" && this.state.password === "") {
        
      return (
        <div className="container">
          <section>
            <img src={yellow} alt="yellow" className='yellow-tape'/>
            <h1 className='text-login'>
              We do not have your information at this time can you please sign
              up
            </h1>
            <Link to="/signup">
              <button className="btn btn-lg text-logins">Sign up</button>
            </Link>
          </section>
        </div>
      );
      
    }

    return (
      <div className="container">
        <section>
          <form onSubmit={this.handleSubmit}>
            <div className="row form-layout">
              <div className="col">
                <h1 className="text-center">Login</h1>
              </div>
              <div className="form-group">
                <label for="inputFirstName">Email</label>
                
                <input
                  onChange={this.handleChangeEmail}
                  type="text"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
             
                <label for="inputLastName">Password</label>
              
                <input
                  onChange={this.handleChangePW}
                  type="text"
                  className="form-control"
                  required
                />
              </div>
              <div className="row">
                <button onSubmit={this.handleSubmit} className="btn btn-success narbar-btn">Submit</button>
              </div>
            </div>
          </form>
        </section>
      </div>
    );
  }
}
export default Login;

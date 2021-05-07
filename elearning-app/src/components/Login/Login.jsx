import React from "react";
import info from "./../SignUp/signInInfo";
import { Link } from "react-router-dom";
import "./login.css";

// let emailOutcome;
// let pwOutcome;

class Login extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: info.email,
      password: info.password,
      emailOutcome: false,
      pwOutcome: false,
    };
    // this.inputEmailLogin = this.inputEmailLogin.bind(this);
    // this.inputPwLogin = this.inputPwLogin.bind(this);
    // this.handleLogin = this.handleLogin.bind(this);
  }
  // inputEmailLogin (e){
  //      emailOutcome = e.target.value === this.state.email ? true : false;
  // }
  // inputPwLogin (e){
  //     pwOutcome = e.target.value === this.state.password ? true : false;
  // }

  // handleLogin(){

  // }

  render() {
    if (this.state.email === "" && this.state.password === "") {
        
      return (
        <div className="container">
          <section>
            <h1>
              We do not have your information at this time can you please sign
              up
            </h1>
            <Link to="/signup">
              <button className="btn btn-lg">Sign up</button>
            </Link>
          </section>
        </div>
      );
    }

    return (
      <div className="container">
        <section>
          <form>
            <div className="row form-layout">
              <div className="col">
                <h1 className="text-center">Login</h1>
              </div>
              <div className="form-group">
                <label for="inputFirstName">Email</label>
                <input
                  onChange={this.inputEmailLogin}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="inputLastName">PassWord</label>
                <input
                  onChange={this.inputPwLogin}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="row">
                <button className="btn btn-success narbar-btn">Submit</button>
              </div>
            </div>
          </form>
        </section>
      </div>
    );
  }
}
export default Login;

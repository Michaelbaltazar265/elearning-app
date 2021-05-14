import './signup.css';
import React from 'react'; 
import info from "./signInInfo";
import { Link } from "react-router-dom"; 

class SignUp extends React.Component {
    constructor(props) {
      super();
      this.state = {
        firstName: "",
        lastName: "", 
        email: "", 
        password: "", 
        address: "", 
        city: "",
        state: "",
        zip: 0
      };

      this.inputFirstName = this.inputFirstName.bind(this); 
      this.inputLastName = this.inputLastName.bind(this);
      this.inputEmail = this.inputEmail.bind(this);
      this.inputPassword = this.inputPassword.bind(this);
      this.inputAddress = this.inputAddress.bind(this);
      this.inputAddress2 = this.inputAddress2.bind(this);
      this.inputCity = this.inputCity.bind(this);
      this.inputState = this.inputState.bind(this);
      this.inputZip = this.inputZip.bind(this);
      this.buttonSubmitSignUp = this.buttonSubmitSignUp.bind(this); 
    }

    inputFirstName (e){ 
       info.firstName = e.target.value;
    }
    inputLastName (e){ 
        info.lastName = e.target.value;
    }
    inputEmail (e){ 
        info.email = e.target.value;
    }
    inputPassword (e){ 
        info.password = e.target.value;
    }
    inputAddress(e){ 
        info.address = e.target.value;
    }
    inputAddress2 (e){ 
        info.address2 = e.target.value;
    }
    inputCity (e){ 
        info.city = e.target.value;
    }
    inputState (e){ 
        info.state = e.target.value;
    }
    inputZip (e){ 
        info.zip = parseInt(e.target.value);
    }

    buttonSubmitSignUp(){
       
        this.setState({
            firstName: info.firstName,
            lastName: info.lastName,
            email: info.email,
            password: info.password,
            address: info.address, 
            address2: info.address2,
            city: info.city, 
            state: info.state, 
            zip: info.zip
        });
        
    }

    render (props){ 
    return ( 
        <div className='container'>
            
            
        <section className='form-layout'>
        <div className='col'>
            <h1 className='text-center'>Sign Up</h1> 
            </div>
            <form>
                <div className='row'>
                    <div className='form-group col-md-6'>
                        <label for='inputFirstName'>First Name</label>
                        <input onChange={this.inputFirstName} type="text" className='form-control' placeholder="First Name"/>
                    </div>
                    <div className='form-group col-md-6'>
                        <label for='inputLastName'>Last Name</label>
                        <input onChange={this.inputLastName} type="text" className='form-control' placeholder="Last Name"/>
                    </div>
                </div>

                <div className='row'>
                    <div className='form-group col-md-6'>
                        <label for='inputEMail'>Email</label>
                        <input onChange={this.inputEmail} type="text" className='form-control' placeholder="Email"/>
                    </div>
                    <div className='form-group col-md-6'>
                        <label for='inputPassword'>Password</label>
                        <input onChange={this.inputPassword} type="text" className='form-control' placeholder="Password"/>
                    </div>
                </div>
                <div className='form-group'>
                    <label for='inputAddress'>Address</label>
                    <input onChange={this.inputAddress}  type="text" className='form-control' placeholder="1234 Main St"/>
                </div>
                <div className='form-group'>
                    <label for='inputAddress'>Address 2</label>
                    <input onChange={this.inputAddress2}  type="text" className='form-control' placeholder="Apartment, studio, or floor"/>
                </div>
                <div className='row'>
                    <div className='form-group col-md-6'>
                        <label for='inputCity'>City</label>
                        <input onChange={this.inputCity}  type="text" className='form-control' />
                    </div>
                    <div className='form-group col-md-4'>
                        <label for='inputState'>State</label>
                        <input onChange={this.inputState}  type="text" className='form-control' />
                    </div>
                    <div className='form-group col-md-2'>
                        <label htmlFor="" for='inputZip'>Zip</label>
                        <input onChange={this.inputZip}  type="text" className='form-control' />
                    </div>
                </div>
                <div className='form-group col button-col'>
                    <Link to='/thank-you'>
                    <button onClick={this.buttonSubmitSignUp} type="button" className="btn btn-lg">Submit</button>
                    </Link>
                </div>
                
            </form>
            </section>
        </div>
    )

}
}

export default   SignUp;
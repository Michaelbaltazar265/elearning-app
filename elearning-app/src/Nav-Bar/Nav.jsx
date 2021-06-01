import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
//import info from './../components/SignUp/signInInfo';


function Nav(props) { 
// const success = info.firstName ? info.firstName : false;
// const success = (login)=> { 
//   // if (login === true){ 
//   //   return info.
//   // }

// }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/">
            <img
              className="icon-nav"
              src="https://img.icons8.com/nolan/64/e-learning.png"
              alt="E-Learning"
            />
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/my-classes"  className='nav-links'>
                <li className="nav-item">My Classes</li>
              </Link>

              <Link to="/browser" className='nav-links' >
                <li className="nav-item">Browser</li>
              </Link>
            </ul>
                {/* <p>{`Hi ${success}`}</p> */}
            <Link to="/login" className='nav-links-2'>
              <button
                type="button"
                className="btn btn-success narbar-btn log-in-btn login"
              >
                {" "}
                Log in
              </button>
            </Link>
            <Link to="/signup" className='nav-links-2'>
              <button
                type="button"
                className="btn btn-outline-success narbar-btn"
              >
                {" "}
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;

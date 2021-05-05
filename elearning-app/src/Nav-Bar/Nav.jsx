import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/">
            <img
              className="icon"
              src="https://img.icons8.com/nolan/64/e-learning.png"
              alt="E-Learning"
            />
            E-Learning
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/my-classes" className="link">
                <li className="nav-item">My Classes</li>
              </Link>
              <Link to="/browser" className="link">
                <li className="nav-item">Browser</li>
              </Link>
            </ul>
            <Link to="/login">
              <button
                type="button"
                className="btn btn-success narbar-btn log-in-btn"
              >
                {" "}
                Log in
              </button>
            </Link>
            <Link to="/signup">
              <button
                type="button"
                className="btn btn-outline-success narbar-btn"
              >
                {" "}
                Sign up
              </button>
            </Link>
            <ul className="navbar-nav">
              <Link to="/like">
                <li className="nav-item">
                  <img
                    className="icon"
                    src="https://img.icons8.com/small/30/000000/like.png"
                    alt='like'
                  />
                </li>
              </Link>
              <Link to="/shopping-cart">
                <li className="nav-item">
                  <img
                    className="icon"
                    src="https://img.icons8.com/android/30/000000/shopping-cart-loaded.png"
                    alt='shopping-cart'
                  />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;

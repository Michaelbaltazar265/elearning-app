import React from "react";
import Hero from "../../images/kid-learning.jpg";
import "./home.css";
import { Link } from "react-router-dom";

const MainImage = (props) => {
  return (
    <>
      <div className="row">
        <img src={Hero} alt="" className="main-image " />
        <h1 className="centered">{props.title}</h1>
        <Link to="/browser" >
        <button className="bottom">See All Classes</button>
        </Link>
        
      </div>
    </>
  );
};

export default MainImage;

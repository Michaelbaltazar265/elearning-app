import React from "react";
import Hero from "../../images/kid-learning.jpg";
import "./home.css";

const MainImage = (props) => {
  return (
    <>
      <div className="row">
        <img src={Hero} alt="" className="main-image " />
        <h1 className="centered">{props.title}</h1>
        <button className="bottom">See All Classes</button>
      </div>
    </>
  );
};

export default MainImage;

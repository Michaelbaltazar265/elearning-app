import React from "react";
import "./cards.css";
import reactCards from "./reactCards";
import jsCards from "./jsCards";
import htmlCards from './htmlCards';
import cssCards from './cssCards';

/* Copy the map part    */
const Cards = (props) => {
  console.log(props.view);
  if (props.view === "React") {
    return reactCards.map((react) => (
      <div className="col card-col">
        <div className="card text-center">
          <img className="card-img-top" src=".../gls" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{react.class}</h5>
            <p className="card-text">{` by ${react.description}`}</p>
            <a
              href="#"
              className="btn btn-outline-success"
            >{`Price ${react.hours}`}</a>
          </div>
        </div>
      </div>
    ));
  } 
  else if (props.view === "JavaScript"){ 
    return jsCards.map((js) => (
      <div className="col card-col">
        <div className="card text-center">
          <img className="card-img-top" src=".../gls" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{js.class}</h5>
            <p className="card-text">{` by ${js.description}`}</p>
            <a
              href="#"
              className="btn btn-outline-success"
            >{`Price ${js.hours}`}</a>
          </div>
        </div>
      </div>
    ));
  } 
  else if (props.view === "HTML"){ 
    return htmlCards.map((h) => (
      <div className="col card-col">
        <div className="card text-center">
          <img className="card-img-top" src=".../gls" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{h.class}</h5>
            <p className="card-text">{`by ${h.description}`}</p>
            <a
              href="#"
              className="btn btn-outline-success"
            >{`Price ${h.hours}`}</a>
          </div>
        </div>
      </div>
    ));
  }
  else if (props.view === "CSS"){ 
    return cssCards.map((c) => (
      <div className="col card-col">
        <div className="card text-center">
          <img className="card-img-top" src=".../gls" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{c.class}</h5>
            <p className="card-text">{` by ${c.description}`}</p>
            <a
              href="#"
              className="btn btn-outline-success"
            >{`Price ${c.hours}`}</a>
          </div>
        </div>
      </div>
    ));
  }
};

export default Cards;

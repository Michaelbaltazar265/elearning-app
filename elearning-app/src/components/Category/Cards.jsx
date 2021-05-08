import React from "react";
import "./cards.css";
import reactCards from "./reactCards";
import jsCards from "./jsCards";
import htmlCards from "./htmlCards";
import cssCards from "./cssCards";

/* Copy the map part    */
const Cards = (props) => {
  console.log(props.view);
  if (props.view === "React") {
    return reactCards.map((react) => (
      <div key={react.num} className="col card-col">
        <div className="card text-center">
          <div className="image-container ">
            <img
              className="card-img-top image"
              src={react.image}
              alt={react.class}
            />
            <div className="overlay">
              <a href="#" className="icon">
                <img
                  src="https://img.icons8.com/flat-round/64/000000/play--v1.png"
                  alt="play-icon"
                />
              </a>
            </div>
          </div>
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
  } else if (props.view === "JavaScript") {
    return jsCards.map((js) => (
      <div key={js.num} className="col card-col">
        <div className="card text-center">
        <div className="image-container ">
            <img
              className="card-img-top image"
              src={js.image}
              alt={js.class}
            />
            <div className="overlay">
              <a href="#" className="icon">
                <img
                  src="https://img.icons8.com/flat-round/64/000000/play--v1.png"
                  alt="play-icon"
                />
              </a>
            </div>
          </div>
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
  } else if (props.view === "HTML") {
    return htmlCards.map((h) => (
      <div key={h.num} className="col card-col">
        <div className="card text-center">
        <div className="image-container ">
            <img
              className="card-img-top image"
              src={h.image}
              alt={h.class}
            />
            <div className="overlay">
              <a href="#" className="icon">
                <img
                  src="https://img.icons8.com/flat-round/64/000000/play--v1.png"
                  alt="play-icon"
                />
              </a>
            </div>
          </div>
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
  } else if (props.view === "CSS") {
    return cssCards.map((c) => (
      <div key={c.num} className="col card-col">
        <div className="card text-center">
        <div className="image-container ">
            <img
              className="card-img-top image"
              src={c.image}
              alt={c.class}
            />
            <div className="overlay">
              <a href="#" className="icon">
                <img
                  src="https://img.icons8.com/flat-round/64/000000/play--v1.png"
                  alt="play-icon"
                />
              </a>
            </div>
          </div>
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

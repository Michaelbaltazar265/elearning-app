import React from "react";

import "./course.css";

const Course = (props) => {
  const courseLayout = ["week 1", "week 2", "week 3", "week 4"];

  return (
    <>
    <div className="container">
      <div className="row text-center">
        <div className="col-12">
          <h1>{`Welcome to your course on ${props.name}`} </h1>
        </div>
        <div className="col-12">
          <h3 className='line'>{props.courseType} </h3>
        </div>
        <div className="col-12 align-item-center video-frame">
          <iframe
          title="HTML Course"
            width="620"
            height="345"

            src={props.video}
            // "https://www.youtube.com/embed/pQN-pnXPaVg"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 list-of-schedule">
          <br />
          <h4 className='line'>Here is your schedule</h4>
          <ul className="ul-course-list">
            {courseLayout.map((el) => (
              <li className="li-course-list" key={el}>
                {el}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
   </>
  );
};

export default Course;

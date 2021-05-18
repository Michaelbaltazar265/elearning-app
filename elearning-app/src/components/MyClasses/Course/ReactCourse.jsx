import React from "react";

import "./course.css";

const ReactCourse = (props) => {
  const courseLayout = ["week 1", "week 2", "week 3", "week 4"];

  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-12">
          <h1>Welcome to your course on React </h1>
        </div>
        <div className="col-12">
          <h3>{props.courseType} </h3>
        </div>
        <div className="col-12 align-item-center video-frame">
          <iframe
          title="React Course"
            width="620"
            height="345"

            src="https://www.youtube.com/embed/w7ejDZ8SWv8"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 list-of-schedule">
          <br />
          <h4>Here is your schedule</h4>
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
  );
};

export default ReactCourse;

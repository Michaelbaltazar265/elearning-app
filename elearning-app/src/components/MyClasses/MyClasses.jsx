import React from "react";
import myClassesArr from "./myClassesArr";
// import Test from "./Test";
import ReactTest from "./Test/ReactTest";
import JsTest from "./Test/JsTest";
import HtmlTest from "./Test/HtmlTest";
import CssTest from "./Test/CssTest";
import './Test/test.css';
import ReactCourse from './Course/ReactCourse';
import JsCourse from './Course/JsCourse';
import HtmlCourse from './Course/HtmlCourse';
import CssCourse from './Course/CssCourse';

class MyClasses extends React.Component {
  constructor(props) {
    super();
    this.state = {
      classes: myClassesArr,
      type: "",
      course: "",
      courseType: "",
    };

    this.DeleteClasses = this.DeleteClasses.bind(this);
    
  }

  /// removing the classes
  DeleteClasses(index) {
    
    let list = this.state.classes;
    list.splice(index, 1);
    this.setState({ list });
  } 
 

  render() {
    const classes = this.state.classes;
    const type = this.state.type;
    const course = this.state.course;
    

    if (type === "react") {
      return <ReactTest />;
    } else if (type === "js") {
      return <JsTest />;
    } else if (type === "html") {
      return <HtmlTest />;
    } else if (type === "css") {
      return <CssTest />;
    } else if (course === "react"){ 
      return < ReactCourse courseType={this.state.courseType} />
    }
    else if (course === "js"){ 
      return < JsCourse courseType={this.state.courseType} />
    }
    else if (course === "html"){ 
      return < HtmlCourse courseType={this.state.courseType} />
    }
    else if (course === "css"){ 
      return < CssCourse courseType={this.state.courseType} />
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>My Classes</h1>
          </div>
          <div className="col-12">
            <h3>You are taking {classes.length} classes</h3>
          </div>
        </div>
        <div className="row">
          {classes.map((item) => (
            <div key={item.num} className="col-4 col-4-my-classes ">
              <div className="card text-center">
                <div className="card-body">
                  <div className="card-title">{item.type}</div>
                  <div className="card-subtitle mb-2 text-muted">
                    {item.class}
                  </div>
                  <div className="button-row">
                    <button
                      onClick={this.DeleteClasses}
                      className="btn btn-outline-danger btn-myClasses"
                    >
                      {" "}
                      Delete
                    </button>
                    <button
                      onClick={() =>
                        this.setState({
                          type: item.type,
                        })
                      }
                      className="btn btn-outline-success btn-myClasses"
                    >
                      {" "}
                      Test{" "}
                    </button>
                  </div>
                  <div className='start-class'>
                    <br/>
                    <button onClick={() => this.setState({course: item.type, courseType:item.class})} className="btn btn-info">Begin Course</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MyClasses;

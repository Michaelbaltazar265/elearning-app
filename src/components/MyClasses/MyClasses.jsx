import React from "react";
import myClassesArr from "./myClassesArr";
import './Test/test.css';
import Course from './Course/Course';
import Test from './Test/Test';
import Reactquestions from './Test/Reactquestions';
import Jsquestions from './Test/Jsquestions';
import Htmlquestions from "./Test/Htmlquestions";
import Cssquestions from './Test/Cssquestions';
import info from './../SignUp/signInInfo';




class MyClasses extends React.Component {
  constructor(props) {
    super();
    this.state = {
      classes: myClassesArr,
      type: "",
      course: "",
      courseType: "",
      login: info.login,
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
      return <Test name="React" questions={Reactquestions} />;
    } else if (type === "js") {
      return <Test name='JavaScript' questions={Jsquestions} />;
    } else if (type === "html") {
      return <Test name='HTML' questions={Htmlquestions} />;
    } else if (type === "css") {
      return <Test name='CSS' questions={Cssquestions} />;
    } else if (course === "react"){ 
      return < Course courseType={this.state.courseType} name="React" video="https://www.youtube.com/embed/w7ejDZ8SWv8" />
    }
    else if (course === "js"){ 
      return < Course courseType={this.state.courseType} name='JavaScript' video="https://www.youtube.com/embed/Qqx_wzMmFeA" />
    }
    else if (course === "html"){ 
      return < Course courseType={this.state.courseType} name='HTML' video="https://www.youtube.com/embed/pQN-pnXPaVg" />
    }
    else if (course === "css"){ 
      return < Course courseType={this.state.courseType} name="CSS" video="https://www.youtube.com/embed/1Rs2ND1ryYc" />
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

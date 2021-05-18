import React from "react";
import myClassesArr from "./myClassesArr";
// import Test from "./Test";
import ReactTest from "./Test/ReactTest";
import JsTest from "./Test/JsTest";
import HtmlTest from "./Test/HtmlTest";
import CssTest from "./Test/CssTest";
import './Test/test.css';

class MyClasses extends React.Component {
  constructor(props) {
    super();
    this.state = {
      classes: myClassesArr,
      type: "",
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

    if (type === "react") {
      return <ReactTest />;
    } else if (type === "js") {
      return <JsTest />;
    } else if (type === "html") {
      return <HtmlTest />;
    } else if (type === "css") {
      return <CssTest />;
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
                    <button className="btn btn-info">Begin Course</button>
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

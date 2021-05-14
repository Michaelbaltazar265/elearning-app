import React from "react";
import './feedback.css'
import { UserAction } from "./../../Actions/index";
import {StudAction} from "./../../Actions/index";
import { connect } from "react-redux";

  

const FeedBack = (props) => {
const renderUAct = () => props.UAct();
renderUAct()
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Feedback from our Students </h1>
          </div>
          <div className="col-12 text-center">
            Read what are students have to say
          </div>
          <div className="row">
            {props.ur.map((val) => (
              <div key={val.id} className="col-4">
                <div className="card">
                  <div className="card-header">{val.name}</div>
                  <div className="card-body">
                    <h5 className="card-title">{`From: ${val.email}`}</h5>
                    <p className="card-text">{val.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};


const mapStateToProps = (state) => {
  return {
    ur: state.user,
    sd:state.stud,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UAct: () => {
      dispatch(UserAction);
    }, 
    SAct:()=>{dispatch(StudAction())}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedBack);

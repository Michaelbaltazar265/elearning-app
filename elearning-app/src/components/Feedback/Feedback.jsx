import React from "react";
import './feedback.css'
import { UserAction } from "./../../Actions/index";
import { connect } from "react-redux";

const FeedBack = (props) => {
  console.log(props.ur);
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
          <button type="button" className='btn btn-success narbar-btn feeback-btn' onClick={props.UAct}>
            Show Feedback
          </button>
          <div className="row">
            {props.ur.map((val) => (
              <div className="col-4">
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UAct: () => {
      dispatch(UserAction);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedBack);

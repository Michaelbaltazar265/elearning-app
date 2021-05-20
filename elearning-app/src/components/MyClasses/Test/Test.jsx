import React, {useState} from "react";
import imageCongrats from "./../../../images/congrats.jpeg";
import "./test.css";
import info from "./../../SignUp/signInInfo";
import testResult from './testResult'; 

const Test = (props) => {


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [view, setView] = useState("");
  
  const handleAnswerOptionClick = (isCorrect) => {  
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < props.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    
  };

  const handleReturnOption = (currentQuestion) => {
    if (currentQuestion) {
      const goBack = currentQuestion - 1;
      setCurrentQuestion(goBack);
    }
  };
  const handleResult = () => { 
    setView("result")
  }

  const percentage = (score/props.questions.length) * 100;
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>{`${props.name} Test`}</h1>
        </div>
        <div className="col-12">
          <div className="app">
            {showScore ? (
              <>
                <div className="score-section">
                  
                  <button onClick={() => handleResult() } className="btn btn-primary">View Result</button>
                </div>
                { 
                view === "result" ? ( 
                  <>
                  <div className='score-section'>
                    You scored {score} out of {props.questions.length}
                  </div>
                  <div className='col-12'>
                    {
                      
                      testResult.map((result) => ( 
                       
                   <p key={result.answerNum} className={result.isCorrect.toString()}> {`${result.answerNum}. ${result.answerText}`} </p>
                  

                        
                      
                      ))
                    }
                  </div>
                  <br/>
                  <p>{ percentage + "%" }</p>
                  <p className='false'>Anything in Red is wrong</p>

                  {percentage >= 65 ?( 
        <div className="image-container-test">
        <img src={imageCongrats} alt="congrats" />
        <p className="image-text">{`${info.firstName} ${info.lastName}`}</p>
        <p className='image-course'>{`${props.name}`}</p> 
      </div>
    ) : ( 
         
        <div className='row'>
            <h4>Please try again later and remember to study</h4>
        </div>
    ) 
}

                  </>
                ): false
                }
              </>
            ) : (
              <>
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/
                    {props.questions.length}
                  </div>
                  <div className="question-text">
                    {props.questions[currentQuestion].questionText}
                  </div>
                </div>
                <div className="answer-section">
                  {props.questions[currentQuestion].answerOptions.map(
                    (answerOption) => (
                      <button
                        key={answerOption.id}
                        value={answerOption.isCorrect}
                        onClick={(currentanswer) => {
                          testResult.push(answerOption);
                          handleAnswerOptionClick(answerOption.isCorrect, answerOption);
                        }}
                      >
                        {answerOption.answerText}
                      </button>

                    ) 
                  )}
                </div> 



                {currentQuestion > 0 ? (
                  <div className="return">
                    <button onClick={() => handleReturnOption(currentQuestion)}>
                      Back
                    </button>
                  </div>
                ) : (
                  false
                )}
              </>
            )} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test; 
import React, {useState} from "react";
import imageCongrats from "./../../../images/congrats.jpeg";
import "./test.css";
import info from "./../../SignUp/signInInfo";
import testResult from './testResult'; 

const ReactTest = () => {
  const questions = [
    {
      id: 1,
      answer: [],
      questionText: "What is Babel and what does it do?",
      answerOptions: [
        { answerText: "It has nothing to do with React", isCorrect: false ,answerNum: 1 },
        { answerText: "Its a Song", isCorrect: false ,answerNum: 1 },
        {
          answerText:
            "Babel is a great tool for transpiling our React code (which is JSX) and our ES6 code at the same time.",
          isCorrect: true,
          answerNum: 1,
        },
        { answerText: "Its state", isCorrect: false ,answerNum: 1 },
      ],
    },
    {
      id: 2,
      answer: [],
      questionText: "What is package.JSON?",
      answerOptions: [
        { answerText: "React file", isCorrect: false , answerNum: 2 },
        {
          answerText:
            "It outlines all the dependencies a project needs to run.",
          isCorrect: true,
           answerNum: 2
        },
        { answerText: "Call an API", isCorrect: false , answerNum: 2 },
        { answerText: "Main file for your project", isCorrect: false , answerNum: 2 },
      ],
    },
    {
      id: 3,
      answer: [],
      questionText: "Everything in React is a ______?",
      answerOptions: [
        { answerText: "Component", isCorrect: true , answerNum: 3  },
        { answerText: "Package", isCorrect: false , answerNum: 3  },
        { answerText: "Class", isCorrect: false , answerNum: 3  },
        { answerText: "Module", isCorrect: false  , answerNum: 3 },
      ],
    },
    {
      id: 4,
      answer: [],
      questionText: "What is state in React?",
      answerOptions: [
        { answerText: "A persistant storage", isCorrect: false , answerNum: 4  },
        { answerText: "Nothing", isCorrect: false , answerNum: 4  },
        { answerText: "A call back", isCorrect: false , answerNum: 4  },
        {
          answerText: "An internal data store (object) of a component",
          isCorrect: true,
           answerNum: 4 
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [view, setView] = useState("");
  
  const handleAnswerOptionClick = (isCorrect) => {  
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
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

  const percentage = (score/questions.length) * 100;
  console.log(percentage)
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>React Test</h1>
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
                    You scored {score} out of {questions.length}
                  </div>
                  <div className='col-12'>
                    {
                      
                      testResult.map((result) => ( 
                       
                   <p className={result.isCorrect.toString()}> {`${result.answerNum}. ${result.answerText}`} </p>
                  

                        
                      
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
        <p className='image-course'>React</p>
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
                    {questions.length}
                  </div>
                  <div className="question-text">
                    {questions[currentQuestion].questionText}
                  </div>
                </div>
                <div className="answer-section">
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption) => (
                      <button
                        key={questions.id}
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

export default ReactTest; 
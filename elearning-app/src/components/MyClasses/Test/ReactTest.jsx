import React, { useState } from "react";
import imageCongrats from "./../../../images/congrats.jpeg";
import "./test.css";
import info from "./../../SignUp/signInInfo";

const ReactTest = () => {
  const questions = [
    {
      id: 1,
      answer: [],
      questionText: "What is Babel and what does it do?",
      answerOptions: [
        { answerText: "It has nothing to do with React", isCorrect: false },
        { answerText: "Its a Song", isCorrect: false },
        {
          answerText:
            "Babel is a great tool for transpiling our React code (which is JSX) and our ES6 code at the same time.",
          isCorrect: true,
        },
        { answerText: "Its state", isCorrect: false },
      ],
    },
    {
      id: 2,
      answer: [],
      questionText: "What is package.JSON?",
      answerOptions: [
        { answerText: "React file", isCorrect: false },
        {
          answerText:
            "It outlines all the dependencies a project needs to run.",
          isCorrect: true,
        },
        { answerText: "Call an API", isCorrect: false },
        { answerText: "Main file for your project", isCorrect: false },
      ],
    },
    {
      id: 3,
      answer: [],
      questionText: "Everything in React is a ______?",
      answerOptions: [
        { answerText: "Component", isCorrect: true },
        { answerText: "Package", isCorrect: false },
        { answerText: "Class", isCorrect: false },
        { answerText: "Module", isCorrect: false },
      ],
    },
    {
      id: 4,
      answer: [],
      questionText: "What is state in React?",
      answerOptions: [
        { answerText: "A persistant storage", isCorrect: false },
        { answerText: "Nothing", isCorrect: false },
        { answerText: "A call back", isCorrect: false },
        {
          answerText: "An internal data store (object) of a component",
          isCorrect: true,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  
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
                  You scored {score} out of {questions.length}
                </div>
                <p className='image-course'>React</p>

                { 
                
                    score >= questions.length -1 ?( 
                        <div className="image-container-test">
                        <img src={imageCongrats} alt="congrats" />
                        <p className="image-text">{`${info.firstName} ${info.lastName}`}</p>
                      </div>
                    ) : ( 

                        <div className='row'>
                            <h4>Please try again later and remember to study</h4>
                        </div>
                    )
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

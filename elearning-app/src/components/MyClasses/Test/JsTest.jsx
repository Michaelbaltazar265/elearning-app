import React, {useState} from "react";
import imageCongrats from "./../../../images/congrats.jpeg";
import "./test.css";
import info from "./../../SignUp/signInInfo";

const JsTest = (props) => { 
console.log(props.type)
const questions = [
    {
        questionText: 'What must a variable begin with?',
        answerOptions: [
            { answerText: 'HTML tag', isCorrect: false },
            { answerText: 'CSS tag', isCorrect: false },
            { answerText: 'A letter, $ or _', isCorrect: true },
            { answerText: 'Nothing', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a variable?',
        answerOptions: [
            { answerText: 'A loop', isCorrect: false },
            { answerText: 'Container for a piece of data', isCorrect: true },
            { answerText: 'Nothing', isCorrect: false },
            { answerText: 'A file', isCorrect: false },
        ],
    },
    {
        questionText: 'How do you declare variables?',
        answerOptions: [
            { answerText: 'var, let and const keywords', isCorrect: true },
            { answerText: 'variable', isCorrect: false },
            { answerText: 'A = sign', isCorrect: false },
            { answerText: 'A keyword', isCorrect: false },
        ],
    },
    {
        questionText: 'DOM stands for?',
        answerOptions: [
            { answerText: 'Document Out Matter', isCorrect: false },
            { answerText: 'Document Outter Mammals', isCorrect: false },
            { answerText: 'Document Other Meaning', isCorrect: false },
            { answerText: 'Document Object Model', isCorrect: true },
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
          <h1>JavaScript Test</h1>
        </div>
        <div className="col-12">
          <div className="app">
            {showScore ? (
              <>
                <div className="score-section">
                  You scored {score} out of {questions.length}
                </div>

                { 
                
                    score >= questions.length -1 ?( 
                        <div className="image-container-test">
                        <img src={imageCongrats} alt="congrats" />
                        <p className="image-text">{`${info.firstName} ${info.lastName}`}</p>
                        <p className='image-course'>JavaScript</p>
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

export default JsTest;

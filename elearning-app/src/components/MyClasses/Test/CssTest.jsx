import React, {useState} from "react";
import imageCongrats from "./../../../images/congrats.jpeg";
import "./test.css";
import info from "./../../SignUp/signInInfo";

const CssTest = (props) => { 

const questions = [
    {
        questionText: 'What does CSS stand for?',
        answerOptions: [
            { answerText: 'Creative Style Sheets', isCorrect: false },
            { answerText: 'Computer Style Sheets', isCorrect: false },
            { answerText: 'Cascading Style Sheets', isCorrect: true },
            { answerText: 'Colorful Style Sheets ', isCorrect: false },
        ],
    },
    {
        questionText: 'Why Use CSS?',
        answerOptions: [
            { answerText: 'To show content on the web pages', isCorrect: false },
            { answerText: 'CSS is used to define styles for your web pages', isCorrect: true },
            { answerText: 'To write code', isCorrect: false },
            { answerText: 'To display a form', isCorrect: false },
        ],
    },
    {
        questionText: 'Linking your HTML and CSS files.',
        answerOptions: [
            { answerText: '<link href="file.css">', isCorrect: true },
            { answerText: '<link hre="file.CSS">', isCorrect: false },
            { answerText: '<link href="css">', isCorrect: false },
            { answerText: '<link "css">', isCorrect: false },
        ],
    },
    {
        questionText: 'What does this * mean on a CSS sheet? ',
        answerOptions: [
            { answerText: 'For all H1 elements', isCorrect: false },
            { answerText: 'For all <div> elements', isCorrect: false },
            { answerText: 'To display nothing', isCorrect: false },
            { answerText: 'Selects all elements', isCorrect: true },
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
          <h1>CSS Test</h1>
        </div>
        <div className="col-12">
          <div className="app">
            {showScore ? (
              <>
                <div className="score-section">
                  You scored {score} out of {questions.length}
                </div>
                <p className='image-course'>CSS</p>

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

export default CssTest;
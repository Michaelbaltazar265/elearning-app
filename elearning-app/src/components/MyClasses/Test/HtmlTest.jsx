import React, {useState} from "react";
import imageCongrats from "./../../../images/congrats.jpeg";
import "./test.css";
import info from "./../../SignUp/signInInfo";

const HtmlTest = (props) => { 
console.log(props.type)
const questions = [
    {
        questionText: 'What does HTML stand for?',
        answerOptions: [
            { answerText: 'Human Text Mark Language', isCorrect: false },
            { answerText: 'Hyper Language', isCorrect: false },
            { answerText: 'Hyper Text Markup Language', isCorrect: true },
            { answerText: 'Hands Talk Mask Long', isCorrect: false },
        ],
    },
    {
        questionText: 'What does <!DOCTYPE html> mean?',
        answerOptions: [
            { answerText: 'HTML tag', isCorrect: false },
            { answerText: 'declaration defines this document to be HTML5', isCorrect: true },
            { answerText: 'HTML4', isCorrect: false },
            { answerText: 'declaration defines this HTML5', isCorrect: false },
        ],
    },
    {
        questionText: 'The <html> element is?',
        answerOptions: [
            { answerText: 'The root element of an HTML page', isCorrect: true },
            { answerText: 'Title element', isCorrect: false },
            { answerText: 'Opening element for a paragrapgh', isCorrect: false },
            { answerText: 'declaration defines this HTML5', isCorrect: false },
        ],
    },
    {
        questionText: '<h1> heading tags?',
        answerOptions: [
            { answerText: 'A break in a parapgrapgh', isCorrect: false },
            { answerText: 'A Heading image tag', isCorrect: false },
            { answerText: 'A Form tag', isCorrect: false },
            { answerText: 'Start from 1 to 6. But you can always adjust the size', isCorrect: true },
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
          <h1>HTML Test</h1>
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
                        <p className='image-course'>HTML</p>
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

export default HtmlTest;

import React, {useState} from "react";
import imageCongrats from "./../../../images/congrats.jpeg";
import "./test.css";
import info from "./../../SignUp/signInInfo";
import testResult from './testResult'; 

const JsTest = (props) => { 

const questions = [
    {
        questionText: 'What must a variable begin with?',
        answerOptions: [
            { answerText: 'HTML tag', isCorrect: false ,answerNum: 1 },
            { answerText: 'CSS tag', isCorrect: false,answerNum: 1 },
            { answerText: 'A letter, $ or _', isCorrect: true ,answerNum: 1},
            { answerText: 'Nothing', isCorrect: false,answerNum: 1 },
        ],
    },
    {
        questionText: 'What is a variable?',
        answerOptions: [
            { answerText: 'A loop', isCorrect: false , answerNum: 2 },
            { answerText: 'Container for a piece of data', isCorrect: true  , answerNum: 2},
            { answerText: 'Nothing', isCorrect: false , answerNum: 2 },
            { answerText: 'A file', isCorrect: false , answerNum: 2 },
        ],
    },
    {
        questionText: 'How do you declare variables?',
        answerOptions: [
            { answerText: 'var, let and const keywords', isCorrect: true , answerNum: 3  },
            { answerText: 'variable', isCorrect: false , answerNum: 3  },
            { answerText: 'A = sign', isCorrect: false , answerNum: 3  },
            { answerText: 'A keyword', isCorrect: false , answerNum: 3  },
        ],
    },
    {
        questionText: 'DOM stands for?',
        answerOptions: [
            { answerText: 'Document Out Matter', isCorrect: false , answerNum: 4  },
            { answerText: 'Document Outter Mammals', isCorrect: false , answerNum: 4 },
            { answerText: 'Document Other Meaning', isCorrect: false , answerNum: 4  },
            { answerText: 'Document Object Model', isCorrect: true , answerNum: 4  },
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
        <p className='image-course'>JavaScript</p>
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

export default JsTest; 
import React, {useState} from "react";
import imageCongrats from "./../../../images/congrats.jpeg";
import "./test.css";
import info from "./../../SignUp/signInInfo";
import testResult from './testResult'; 

const HtmlTest = (props) => { 
console.log(props.type)
const questions = [
    {
        questionText: 'What does HTML stand for?',
        answerOptions: [
            { answerText: 'Human Text Mark Language', isCorrect: false ,answerNum: 1},
            { answerText: 'Hyper Language', isCorrect: false ,answerNum: 1 },
            { answerText: 'Hyper Text Markup Language', isCorrect: true ,answerNum: 1 },
            { answerText: 'Hands Talk Mask Long', isCorrect: false ,answerNum: 1 },
        ],
    },
    {
        questionText: 'What does <!DOCTYPE html> mean?',
        answerOptions: [
            { answerText: 'HTML tag', isCorrect: false , answerNum: 2 },
            { answerText: 'declaration defines this document to be HTML5', isCorrect: true  , answerNum: 2},
            { answerText: 'HTML4', isCorrect: false , answerNum: 2 },
            { answerText: 'declaration defines this HTML5', isCorrect: false  , answerNum: 2},
        ],
    },
    {
        questionText: 'The <html> element is?',
        answerOptions: [
            { answerText: 'The root element of an HTML page', isCorrect: true, answerNum: 3 },
            { answerText: 'Title element', isCorrect: false , answerNum: 3  },
            { answerText: 'Opening element for a paragrapgh', isCorrect: false , answerNum: 3  },
            { answerText: 'declaration defines this HTML5', isCorrect: false , answerNum: 3  },
        ],
    },
    {
        questionText: '<h1> heading tags?',
        answerOptions: [
            { answerText: 'A break in a parapgrapgh', isCorrect: false , answerNum: 4  },
            { answerText: 'A Heading image tag', isCorrect: false , answerNum: 4 },
            { answerText: 'A Form tag', isCorrect: false  , answerNum: 4 },
            { answerText: 'Start from 1 to 6. But you can always adjust the size', isCorrect: true , answerNum: 4  },
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
          <h1>HTML Test</h1>
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
        <p className='image-course'>HTML</p>
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

export default HtmlTest; 
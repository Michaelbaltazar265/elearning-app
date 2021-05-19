import React, {useState} from "react";
import imageCongrats from "./../../../images/congrats.jpeg";
import "./test.css";
import info from "./../../SignUp/signInInfo";
import testResult from './testResult'; 

const CssTest = (props) => { 

const questions = [
    {

        questionText: 'What does CSS stand for?',
        answerOptions: [
            { answerText: 'Creative Style Sheets', isCorrect: false, answerNum: 1 },
            { answerText: 'Computer Style Sheets', isCorrect: false , answerNum: 1},
            { answerText: 'Cascading Style Sheets', isCorrect: true , answerNum: 1},
            { answerText: 'Colorful Style Sheets ', isCorrect: false , answerNum: 1},
        ],
    },
    {

        questionText: 'Why Use CSS?',
        answerOptions: [
            { answerText: 'To show content on the web pages', isCorrect: false , answerNum: 2},
            { answerText: 'CSS is used to define styles for your web pages', isCorrect: true , answerNum: 2},
            { answerText: 'To write code', isCorrect: false , answerNum: 2},
            { answerText: 'To display a form', isCorrect: false, answerNum: 2 },
        ],
    },
    {

        questionText: 'Linking your HTML and CSS files.',
        answerOptions: [
            { answerText: '<link href="file.css">', isCorrect: true , answerNum: 3},
            { answerText: '<link hre="file.CSS">', isCorrect: false, answerNum: 3 },
            { answerText: '<link href="css">', isCorrect: false , answerNum: 3},
            { answerText: '<link "css">', isCorrect: false, answerNum: 3 },
        ],
    },
    {

        questionText: 'What does this * mean on a CSS sheet? ',
        answerOptions: [
            { answerText: 'For all H1 elements', isCorrect: false, answerNum: 4 },
            { answerText: 'For all <div> elements', isCorrect: false, answerNum: 4 },
            { answerText: 'To display nothing', isCorrect: false , answerNum: 4},
            { answerText: 'Selects all elements', isCorrect: true , answerNum: 4},
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
          <h1>CSS Test</h1>
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
        <p className='image-course'>CSS</p>
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

export default CssTest; 




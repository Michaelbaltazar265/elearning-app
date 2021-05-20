
 
 


 const Reactquestions = [
    {
      id: 1,
      answer: [],
      questionText: "What is Babel and what does it do?",
      answerOptions: [
        { answerText: "It has nothing to do with React", isCorrect: false ,answerNum: 10 },
        { answerText: "Its a Song", isCorrect: false ,answerNum: 10 },
        {
          answerText:
            "Babel is a great tool for transpiling our React code (which is JSX) and our ES6 code at the same time.",
          isCorrect: true,
          answerNum: 10,
        },
        { answerText: "Its state", isCorrect: false ,answerNum: 10 },
      ],
    },
    {
      id: 2,
      answer: [],
      questionText: "What is package.JSON?",
      answerOptions: [
        { answerText: "React file", isCorrect: false , answerNum: 20 },
        {
          answerText:
            "It outlines all the dependencies a project needs to run.",
          isCorrect: true,
           answerNum: 20
        },
        { answerText: "Call an API", isCorrect: false , answerNum: 20 },
        { answerText: "Main file for your project", isCorrect: false , answerNum: 20 },
      ],
    },
    {
      id: 3,
      answer: [],
      questionText: "Everything in React is a ______?",
      answerOptions: [
        { answerText: "Component", isCorrect: true , answerNum: 30  },
        { answerText: "Package", isCorrect: false , answerNum: 30  },
        { answerText: "Class", isCorrect: false , answerNum: 30  },
        { answerText: "Module", isCorrect: false  , answerNum: 30 },
      ],
    },
    {
      id: 4,
      answer: [],
      questionText: "What is state in React?",
      answerOptions: [
        { answerText: "A persistant storage", isCorrect: false , answerNum: 40  },
        { answerText: "Nothing", isCorrect: false , answerNum: 40  },
        { answerText: "A call back", isCorrect: false , answerNum: 40  },
        {
          answerText: "An internal data store (object) of a component",
          isCorrect: true,
           answerNum: 40 
        },
      ],
    },
  ]; 


  

  export default Reactquestions;


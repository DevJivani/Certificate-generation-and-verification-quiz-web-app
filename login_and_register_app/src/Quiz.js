// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Quiz.css';
// import Certificate from './components/certificate/Certificate';

// const Quiz = () => {
//   const history = useNavigate();

//   const [questions] = useState([
//     {
//       question: 'What is the capital of France?',
//       answers: ['Paris', 'London', 'Berlin', 'Madrid'],
//       correctAnswer: 'Paris',
//     },
//     {
//       question: 'Who painted the Mona Lisa?',
//       answers: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Claude Monet'],
//       correctAnswer: 'Leonardo da Vinci',
//     },
//     {
//       question: 'Which planet is known as the Red Planet?',
//       answers: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
//       correctAnswer: 'Mars',
//     },
//     {
//       question: 'What is the largest mammal?',
//       answers: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
//       correctAnswer: 'Blue Whale',
//     },
//     {
//       question: 'Who wrote "Romeo and Juliet"?',
//       answers: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
//       correctAnswer: 'William Shakespeare',
//     },
//     {
//       question: 'What is the chemical symbol for gold?',
//       answers: ['Au', 'Ag', 'Fe', 'Cu'],
//       correctAnswer: 'Au',
//     },
//     {
//       question: 'Which country is famous for the Great Wall?',
//       answers: ['China', 'Japan', 'India', 'Russia'],
//       correctAnswer: 'China',
//     },
//     {
//       question: 'What is the largest ocean on Earth?',
//       answers: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
//       correctAnswer: 'Pacific Ocean',
//     },
//     {
//       question: 'Who invented the telephone?',
//       answers: ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Albert Einstein'],
//       correctAnswer: 'Alexander Graham Bell',
//     },
//     {
//       question: 'What is the main ingredient in guacamole?',
//       answers: ['Tomato', 'Avocado', 'Onion', 'Lemon'],
//       correctAnswer: 'Avocado',
//     },
//   ]);

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [showCertificate, setShowCertificate] = useState(false);

//   useEffect(() => {
//     startQuiz();
//   }, []);

//   const startQuiz = () => {
//     setShowScore(false);
//     setShowCertificate(false);
//     setCurrentQuestionIndex(0);
//     setScore(0);
//   };

//   const handleAnswerButtonClick = (selectedAnswer) => {
//     const currentQuestion = questions[currentQuestionIndex];
//     if (selectedAnswer === currentQuestion.correctAnswer) {
//       setScore(score + 1);
//     }

//     const nextQuestionIndex = currentQuestionIndex + 1;
//     if (nextQuestionIndex < questions.length) {
//       setCurrentQuestionIndex(nextQuestionIndex);
//     } else {
//       setShowScore(true);
//     }
//   };

//   const handleGetCertificate = () => {
//     setShowCertificate(true);
//     // history("/Certificate");
//   };

//   return (
//     <div className="quiz">
//       {showScore && !showCertificate ? (
//         <div className="score-section">
//           <p>Your score: {score}</p>
//           <button onClick={handleGetCertificate} className="cer">Get Certificate</button>
//         </div>
//       ) : showCertificate ? (
//         <Certificate score={score} totalQuestions={questions.length} />
//       ) : (
//         <>
//           <div className="question-section">
//             <div className="question-count">
//               <span>Question {currentQuestionIndex + 1}</span>/{questions.length}
//             </div>
//             <div className="question-text">{questions[currentQuestionIndex].question}</div>
//           </div>
//           <div className="answer-section">
//             {questions[currentQuestionIndex].answers.map((answer, index) => (
//               <button key={index} onClick={() => handleAnswerButtonClick(answer)}>
//                 {answer}
//               </button>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Quiz;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Quiz.css';
// import Certificate from './components/certificate/Certificate';

// const Quiz = () => {
//   const history = useNavigate();

//   const [questions] = useState([
    // {
    //   question: 'What is the capital of France?',
    //   answers: ['Paris', 'London', 'Berlin', 'Madrid'],
    //   correctAnswer: 'Paris',
    // },
    // {
    //   question: 'Who painted the Mona Lisa?',
    //   answers: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Claude Monet'],
    //   correctAnswer: 'Leonardo da Vinci',
    // },
    // {
    //   question: 'Which planet is known as the Red Planet?',
    //   answers: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    //   correctAnswer: 'Mars',
    // },
    // {
    //   question: 'What is the largest mammal?',
    //   answers: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    //   correctAnswer: 'Blue Whale',
    // },
    // {
    //   question: 'Who wrote "Romeo and Juliet"?',
    //   answers: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
    //   correctAnswer: 'William Shakespeare',
    // },
    // {
    //   question: 'What is the chemical symbol for gold?',
    //   answers: ['Au', 'Ag', 'Fe', 'Cu'],
    //   correctAnswer: 'Au',
    // },
    // {
    //   question: 'Which country is famous for the Great Wall?',
    //   answers: ['China', 'Japan', 'India', 'Russia'],
    //   correctAnswer: 'China',
    // },
    // {
    //   question: 'What is the largest ocean on Earth?',
    //   answers: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    //   correctAnswer: 'Pacific Ocean',
    // },
    // {
    //   question: 'Who invented the telephone?',
    //   answers: ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Albert Einstein'],
    //   correctAnswer: 'Alexander Graham Bell',
    // },
    // {
    //   question: 'What is the main ingredient in guacamole?',
    //   answers: ['Tomato', 'Avocado', 'Onion', 'Lemon'],
    //   correctAnswer: 'Avocado',
    // },
//   ]);

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [showCertificate, setShowCertificate] = useState(false);

//   useEffect(() => {
//     startQuiz();
//   }, []);

//   const startQuiz = () => {
//     setShowScore(false);
//     setShowCertificate(false);
//     setCurrentQuestionIndex(0);
//     setScore(0);
//   };

//   const handleAnswerButtonClick = (selectedAnswer) => {
//     const currentQuestion = questions[currentQuestionIndex];
//     if (selectedAnswer === currentQuestion.correctAnswer) {
//       setScore(score + 1);
//     }

//     const nextQuestionIndex = currentQuestionIndex + 1;
//     if (nextQuestionIndex < questions.length) {
//       setCurrentQuestionIndex(nextQuestionIndex);
//     } else {
//       setShowScore(true);
//     }
//   };

//   const handleGetCertificate = () => {
//     setShowCertificate(true);
//     // history("/Certificate");
//   };

//   const handleNextQuestion = () => {
//     const nextQuestionIndex = currentQuestionIndex + 1;
//     if (nextQuestionIndex < questions.length) {
//       setCurrentQuestionIndex(nextQuestionIndex);
//     } else {
//       setShowScore(true);
//     }
//   };

//   const handlePreviousQuestion = () => {
//     const prevQuestionIndex = currentQuestionIndex - 1;
//     if (prevQuestionIndex >= 0) {
//       setCurrentQuestionIndex(prevQuestionIndex);
//     }
//   };

//   return (
//     <div className="quiz">
//       {showScore && !showCertificate ? (
//         <div className="score-section">
//           <p>Your score: {score}</p>
//           <button onClick={handleGetCertificate} className="cer">Get Certificate</button>
//         </div>
//       ) : showCertificate ? (
//         <Certificate score={score} totalQuestions={questions.length} />
//       ) : (
//         <>
//           <div className="question-section">
//             <div className="question-count">
//               <span>Question {currentQuestionIndex + 1}</span>/{questions.length}
//             </div>
//             <div className="question-text">{questions[currentQuestionIndex].question}</div>
//           </div>
//           <div className="answer-section">
//             {questions[currentQuestionIndex].answers.map((answer, index) => (
//               <button key={index} onClick={() => handleAnswerButtonClick(answer)}>
//                 {answer}
//               </button>
//             ))}
//           </div>
//           <div className="navigation-buttons">
//             <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
//               Previous
//             </button>
//             <button onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
//               Next
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Quiz;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Quiz.css';
// import Certificate from './components/certificate/Certificate';

// const Quiz = () => {
//   const history = useNavigate();

//   const [questions] = useState([
    // {
    //   question: 'What is the capital of France?',
    //   answers: ['Paris', 'London', 'Berlin', 'Madrid'],
    //   correctAnswer: 'Paris',
    // },
    // {
    //   question: 'Who painted the Mona Lisa?',
    //   answers: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Claude Monet'],
    //   correctAnswer: 'Leonardo da Vinci',
    // },
    // {
    //   question: 'Which planet is known as the Red Planet?',
    //   answers: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    //   correctAnswer: 'Mars',
    // },
    // {
    //   question: 'What is the largest mammal?',
    //   answers: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    //   correctAnswer: 'Blue Whale',
    // },
    // {
    //   question: 'Who wrote "Romeo and Juliet"?',
    //   answers: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
    //   correctAnswer: 'William Shakespeare',
    // },
    // {
    //   question: 'What is the chemical symbol for gold?',
    //   answers: ['Au', 'Ag', 'Fe', 'Cu'],
    //   correctAnswer: 'Au',
    // },
    // {
    //   question: 'Which country is famous for the Great Wall?',
    //   answers: ['China', 'Japan', 'India', 'Russia'],
    //   correctAnswer: 'China',
    // },
    // {
    //   question: 'What is the largest ocean on Earth?',
    //   answers: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    //   correctAnswer: 'Pacific Ocean',
    // },
    // {
    //   question: 'Who invented the telephone?',
    //   answers: ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Albert Einstein'],
    //   correctAnswer: 'Alexander Graham Bell',
    // },
    // {
    //   question: 'What is the main ingredient in guacamole?',
    //   answers: ['Tomato', 'Avocado', 'Onion', 'Lemon'],
    //   correctAnswer: 'Avocado',
    // },
//   ]);

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [showCertificate, setShowCertificate] = useState(false);

//   useEffect(() => {
//     startQuiz();
//   }, []);

//   const startQuiz = () => {
//     setShowScore(false);
//     setShowCertificate(false);
//     setCurrentQuestionIndex(0);
//     setScore(0);
//   };

//   const handleAnswerButtonClick = (selectedAnswer) => {
//     const currentQuestion = questions[currentQuestionIndex];
//     if (selectedAnswer === currentQuestion.correctAnswer) {
//       setScore(score + 1);
//     }

//     const nextQuestionIndex = currentQuestionIndex + 1;
//     if (nextQuestionIndex < questions.length) {
//       setCurrentQuestionIndex(nextQuestionIndex);
//     } else {
//       setShowScore(true);
//     }
//   };

//   const handleSkipQuestion = () => {
//     const nextQuestionIndex = currentQuestionIndex + 1;
//     if (nextQuestionIndex < questions.length) {
//       setCurrentQuestionIndex(nextQuestionIndex);
//     } else {
//       setShowScore(true);
//     }
//   };

//   const handleGetCertificate = () => {
//     setShowCertificate(true);
//    // history("/Certificate");
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex === questions.length - 1) {
//       setShowScore(true);
//     } else {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const handlePreviousQuestion = () => {
//     const prevQuestionIndex = currentQuestionIndex - 1;
//     if (prevQuestionIndex >= 0) {
//       setCurrentQuestionIndex(prevQuestionIndex);
//     }
//   };

//   return (
//     <div className="quiz">
//       {showScore && !showCertificate ? (
//         <div className="score-section">
//           <p>Your score: {score}</p>
//           <button onClick={handleGetCertificate} className="cer">Get Certificate</button>
//         </div>
//       ) : showCertificate ? (
//         <Certificate score={score} totalQuestions={questions.length} />
//       ) : (
//         <>
//           <div className="question-section">
//             <div className="question-count">
//               <span>Question {currentQuestionIndex + 1}</span>/{questions.length}
//             </div>
//             <div className="question-text">{questions[currentQuestionIndex].question}</div>
//           </div>
//           <div className="answer-section">
//             {questions[currentQuestionIndex].answers.map((answer, index) => (
//               <button key={index} onClick={() => handleAnswerButtonClick(answer)}>
//                 {answer}
//               </button>
//             ))}
//           </div>
//           <div className="navigation-buttons">
//             <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
//               Previous
//             </button>
//             <button onClick={handleSkipQuestion} disabled={currentQuestionIndex === questions.length - 1}>
//               Skip
//             </button>
//             <button onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
//               Next
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Quiz;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Quiz.css';
// import Certificate from './components/certificate/Certificate';
// import Navbar from './components/navbar';
// import axios from 'axios';

// const Quiz = () => {
//   const history = useNavigate();

//   const [questions] = useState([
//     {
//       question: 'What is the capital of France?',
//       answers: ['Paris', 'London', 'Berlin', 'Madrid'],
//       correctAnswer: 'Paris',
//     },
//     {
//       question: 'Who painted the Mona Lisa?',
//       answers: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Claude Monet'],
//       correctAnswer: 'Leonardo da Vinci',
//     },
//     {
//       question: 'Which planet is known as the Red Planet?',
//       answers: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
//       correctAnswer: 'Mars',
//     },
//     {
//       question: 'What is the largest mammal?',
//       answers: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
//       correctAnswer: 'Blue Whale',
//     },
//     {
//       question: 'Who wrote "Romeo and Juliet"?',
//       answers: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
//       correctAnswer: 'William Shakespeare',
//     },
//     {
//       question: 'What is the chemical symbol for gold?',
//       answers: ['Au', 'Ag', 'Fe', 'Cu'],
//       correctAnswer: 'Au',
//     },
//     {
//       question: 'Which country is famous for the Great Wall?',
//       answers: ['China', 'Japan', 'India', 'Russia'],
//       correctAnswer: 'China',
//     },
//     {
//       question: 'What is the largest ocean on Earth?',
//       answers: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
//       correctAnswer: 'Pacific Ocean',
//     },
//     {
//       question: 'Who invented the telephone?',
//       answers: ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Albert Einstein'],
//       correctAnswer: 'Alexander Graham Bell',
//     },
//     {
//       question: 'What is the main ingredient in guacamole?',
//       answers: ['Tomato', 'Avocado', 'Onion', 'Lemon'],
//       correctAnswer: 'Avocado',
//     },
//   ]);
//   const navigate = useNavigate();
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   let [score, setScore] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [showCertificate, setShowCertificate] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(true); // Assuming the user is initially logged in

//   const finalAns = async()=>{
//     const res = await axios.post("http://localhost:9002/setscore",{
//       score,
//       user: localStorage.getItem('email')
//     })
//     setShowScore(true);
//   }
//   useEffect(() => {
//     startQuiz();
//   }, []);

//   const startQuiz = () => {
//     setShowScore(false);
//     setShowCertificate(false);
//     setCurrentQuestionIndex(0);
//     setScore(0);
//   };

//   // const handleAnswerButtonClick = (selectedAnswer) => {
//   //   console.log("YEs"); 
//   //   const currentQuestion = questions[currentQuestionIndex];
//   //   if (selectedAnswer === currentQuestion.correctAnswer) {
//   //     setScore(score + 1);
//   //   }

//   //   const nextQuestionIndex = currentQuestionIndex + 1;
//   //   if (nextQuestionIndex < questions.length) {
//   //     setCurrentQuestionIndex(nextQuestionIndex);
//   //   } else {

//   //     finalAns();
//   //   }
//   // };
//   const handleAnswerButtonClick = (selectedAnswer) => {
//     console.log("YEs"); 
//     const currentQuestion = questions[currentQuestionIndex];
//     if (selectedAnswer === currentQuestion.correctAnswer) {
//       score=score+1;
//       setScore(score);
//       console.log(score);
//     }

//     const nextQuestionIndex = currentQuestionIndex + 1;
//     if (nextQuestionIndex < questions.length) {
//       setCurrentQuestionIndex(nextQuestionIndex);
//     } else {

//       finalAns();
//     }
//   };
  
//   const handleSkipQuestion = () => {
//     const nextQuestionIndex = currentQuestionIndex + 1;
//     if (nextQuestionIndex < questions.length) {
//       setCurrentQuestionIndex(nextQuestionIndex);
//     } else {
//       setShowScore(true); 
//     }
//   };

//   const handleGetCertificate = () => {
//     const email= localStorage.getItem('email');
//     navigate("/certificate/"+email, {state : {score}});
//   };

//   const handleLogout = () => {
//     // Implement your logout logic here
//     // For example, clear session/local storage, reset user state, etc.
//     setIsLoggedIn(false);
//     // history("/login"); // No need to redirect here since Navbar handles it
//   };

//   const handleNextQuestion = async() => {

//     if (currentQuestionIndex === questions.length - 1) {
//       finalAns();
//     } else {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const handlePreviousQuestion = () => {
//     const prevQuestionIndex = currentQuestionIndex - 1;
//     if (prevQuestionIndex >= 0) {
//       setCurrentQuestionIndex(prevQuestionIndex);
//     }
//   };

//   return (
//     <>
//     <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
//     <div className="quiz">
//       {showScore && !showCertificate ? (
//         <div className="score-section">
//           <p>Your score: {score}</p>
//           <button onClick={handleGetCertificate}>Get Certificate</button>
//         </div>
//       ) : showCertificate ? (
//         <Certificate score={score} totalQuestions={questions.length} />
//       ) : (
//         <>
//           <div className="question-section">
//             <div className="question-count">
//               <span>Question {currentQuestionIndex + 1}</span>/{questions.length}
//             </div>
//             <div className="question-text">{questions[currentQuestionIndex].question}</div>
//           </div>
//           <div className="answer-section">
//             {questions[currentQuestionIndex].answers.map((answer, index) => (
//               <button key={index} onClick={() => handleAnswerButtonClick(answer)}>
//                 {answer}
//               </button>
//             ))}
//           </div>
//           <div className="navigation-buttons">
//             <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
//               Previous
//             </button>
//             <button onClick={handleSkipQuestion}>
//               Skip
//             </button>
//             <button onClick={handleNextQuestion}>
//               Next
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//     </>
//   );
// };

// export default Quiz;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';
import Certificate from './components/certificate/Certificate';
import Navbar from './components/navbar';
import axios from 'axios';

const Quiz = () => {
  const history = useNavigate();

  const [questions] = useState([
    {
      question: 'What is the capital of France?',
      answers: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Who painted the Mona Lisa?',
      answers: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Claude Monet'],
      correctAnswer: 'Leonardo da Vinci',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      answers: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
    },
    {
      question: 'What is the largest mammal?',
      answers: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      correctAnswer: 'Blue Whale',
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      answers: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
      correctAnswer: 'William Shakespeare',
    },
    {
      question: 'What is the chemical symbol for gold?',
      answers: ['Au', 'Ag', 'Fe', 'Cu'],
      correctAnswer: 'Au',
    },
    {
      question: 'Which country is famous for the Great Wall?',
      answers: ['China', 'Japan', 'India', 'Russia'],
      correctAnswer: 'China',
    },
    {
      question: 'What is the largest ocean on Earth?',
      answers: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      correctAnswer: 'Pacific Ocean',
    },
    {
      question: 'Who invented the telephone?',
      answers: ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Albert Einstein'],
      correctAnswer: 'Alexander Graham Bell',
    },
    {
      question: 'What is the main ingredient in guacamole?',
      answers: ['Tomato', 'Avocado', 'Onion', 'Lemon'],
      correctAnswer: 'Avocado',
    },
  ]);
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  let [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assuming the user is initially logged in

  const finalAns = async()=>{
    const res = await axios.post("http://localhost:9002/setscore",{
      score,
      user: localStorage.getItem('email')
    })
    setShowScore(true);
  }
  useEffect(() => {
    startQuiz();
  }, []);

  const startQuiz = () => {
    setShowScore(false);
    setShowCertificate(false);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  // const handleAnswerButtonClick = (selectedAnswer) => {
  //   console.log("YEs"); 
  //   const currentQuestion = questions[currentQuestionIndex];
  //   if (selectedAnswer === currentQuestion.correctAnswer) {
  //     setScore(score + 1);
  //   }

  //   const nextQuestionIndex = currentQuestionIndex + 1;
  //   if (nextQuestionIndex < questions.length) {
  //     setCurrentQuestionIndex(nextQuestionIndex);
  //   } else {

  //     finalAns();
  //   }
  // };
  const handleAnswerButtonClick = (selectedAnswer) => {
    console.log("YEs"); 
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      score=score+1;
      setScore(score);
      console.log(score);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {

      finalAns();
    }
  };
  
  const handleSkipQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true); 
    }
  };

  const handleGetCertificate = () => {
    const email= localStorage.getItem('email');
    navigate("/certificate/"+email, {state : {score}});
  };

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear session/local storage, reset user state, etc.
    setIsLoggedIn(false);
    // history("/login"); // No need to redirect here since Navbar handles it
  };

  const handleNextQuestion = async() => {

    if (currentQuestionIndex === questions.length - 1) {
      finalAns();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    const prevQuestionIndex = currentQuestionIndex - 1;
    if (prevQuestionIndex >= 0) {
      setCurrentQuestionIndex(prevQuestionIndex);
    }
  };

  return (
    <>
    <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
    <div className="quiz">
      {showScore && !showCertificate ? (
        <div className="score-section">
          <p>Your score: {score}</p>
          <button onClick={handleGetCertificate}>Get Certificate</button>
        </div>
      ) : showCertificate ? (
        <Certificate score={score} totalQuestions={questions.length} />
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestionIndex + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestionIndex].question}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestionIndex].answers.map((answer, index) => (
              <button key={index} onClick={() => handleAnswerButtonClick(answer)}>
                {answer}
              </button>
            ))}
          </div>
          <div className="navigation-buttons">
            <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
              Previous
            </button>
            <button onClick={handleSkipQuestion}>
              Skip
            </button>
            <button onClick={handleNextQuestion}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default Quiz;



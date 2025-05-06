import { useState } from "react";

const questions = [
  {
    question: "Who is the author of *The Origin of Species*?",
    options: ["Isaac Newton", "Charles Darwin", "Albert Einstein", "Galileo"],
    answer: "Charles Darwin"
  },
  {
    question: "What is the capital of France?",
    options: ["Rome", "Berlin", "Paris", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Earth", "Jupiter", "Venus"],
    answer: "Mars"
  }
];

const QuizApp = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        {showResult ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Quiz Finished!</h2>
            <p className="text-lg mb-4">
              Your Score: {score} / {questions.length}
            </p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={resetQuiz}
            >
              Try Again
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-3">
              Question {current + 1} of {questions.length}
            </h2>
            <p className="mb-4">{questions[current].question}</p>
            <div className="flex flex-col gap-2">
              {questions[current].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className="bg-blue-200 hover:bg-blue-400 px-3 py-2 rounded"
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizApp;

import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const questions = [
  {
    type: "plural",
    question: 'What is the plural of "cat"?',
    options: ["cats", "catz", "cates", "cat"],
    correct: "cats",
  },
  {
    type: "fill",
    question: "She ___ eating.",
    options: ["is", "are", "was", "be"],
    correct: "is",
  },
  {
    type: "plural",
    question: 'What is the plural of "fox"?',
    options: ["foxes", "foxs", "foxx", "fox"],
    correct: "foxes",
  },
  {
    type: "fill",
    question: "They ___ playing football.",
    options: ["are", "is", "was", "be"],
    correct: "are",
  },
  {
    type: "plural",
    question: 'What is the plural of "baby"?',
    options: ["babys", "babies", "babes", "baby"],
    correct: "babies",
  },
  {
    type: "fill",
    question: "I ___ a book yesterday.",
    options: ["read", "reads", "reading", "have"],
    correct: "read",
  },
  {
    type: "plural",
    question: 'What is the plural of "leaf"?',
    options: ["leafs", "leaves", "leafes", "leaf"],
    correct: "leaves",
  },
  {
    type: "fill",
    question: "We ___ going to the park.",
    options: ["are", "is", "am", "were"],
    correct: "are",
  },
  {
    type: "plural",
    question: 'What is the plural of "child"?',
    options: ["childs", "children", "childes", "child"],
    correct: "children",
  },
  {
    type: "fill",
    question: "He ___ a big dog.",
    options: ["has", "have", "is", "was"],
    correct: "has",
  },
];

export default function EnglishQuiz() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isQuizEnded, setIsQuizEnded] = useState(false);
  const timeoutRef = useRef(null);

  const playSound = (type, volume = 0.5) => {
    const audio = new Audio(`/sounds/${type}.mp3`);
    audio.volume = volume;
    audio.play();
  };

  const current = questions[currentIndex];

  const handleAnswer = (answer) => {
    if (answer === current.correct) {
      setScore((prev) => prev + 1);
      setFeedback("✅ Correct!");
      playSound("yes");
    } else {
      setFeedback("❌ Incorrect!");
      playSound("no");
    }

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setFeedback("");
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setIsQuizEnded(true);
        playSound("winner");
      }
    }, 1000);
  };

  const restart = () => {
    clearTimeout(timeoutRef.current);
    setCurrentIndex(0);
    setScore(0);
    setFeedback("");
    setIsQuizEnded(false);
  };

  const EndScreen = () => (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-xl w-full text-center animate-fade-in">
      <p className="text-3xl text-green-700 font-bold mb-6">
        🎉 Congratulations!
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Your final score is <strong>{score}</strong> / {questions.length}
      </p>
      <button
        onClick={restart}
        className="bg-[#87CEEB] text-white px-6 py-3 rounded-full hover:bg-[#5eb9d6] transition font-bold"
      >
        🔁 Try Again
      </button>
    </div>
  );

  return (
    <div>
      <div className=" flex flex-col min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
        <div className="flex-grow flex flex-col items-center justify-center px-4 py-12 font-sans relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-40 left-5 bg-[#bb4fa9] text-white font-bold px-5 py-2 rounded-full shadow-lg hover:bg-[#a13d93] transition z-50"
          >
            Back
          </button>

          {isQuizEnded ? (
            <EndScreen />
          ) : (
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-xl w-full text-center animate-fade-in">
              <h1 className="text-4xl font-extrabold text-[#bb4fa9] mb-4">
                📚 English Quiz
              </h1>

              <div className="text-sm text-gray-700 font-semibold mb-6">
                ✅ Score: {score} / {questions.length}
              </div>

              <p className="text-xl text-gray-800 mb-6 font-semibold">
                {current.question}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {current.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(opt)}
                    className="bg-[#bb4fa9] text-white py-3 rounded-full hover:bg-[#a13d93] transition font-bold text-lg"
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <p className="text-green-700 font-semibold text-lg mb-2">
                {feedback}
              </p>

              <div className="text-sm text-gray-600">
                🧩 Level: {currentIndex + 1} / {questions.length}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

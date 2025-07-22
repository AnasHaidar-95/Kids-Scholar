import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const questions = [
  {
    question: "What planet is known as the Red Planet?",
    options: ["Mars", "Earth", "Jupiter", "Venus"],
    correct: "Mars",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "NaCl", "O2"],
    correct: "H2O",
  },
  {
    question: "What force keeps us on the ground?",
    options: ["Gravity", "Magnetism", "Friction", "Electricity"],
    correct: "Gravity",
  },
  {
    question: "What gas do plants absorb from the air?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    correct: "Carbon Dioxide",
  },
  {
    question: "What part of the plant conducts photosynthesis?",
    options: ["Leaves", "Roots", "Stem", "Flowers"],
    correct: "Leaves",
  },
  {
    question: "What planet is the largest in our solar system?",
    options: ["Jupiter", "Saturn", "Neptune", "Earth"],
    correct: "Jupiter",
  },
  {
    question: "What do bees collect from flowers?",
    options: ["Nectar", "Pollen", "Honey", "Water"],
    correct: "Nectar",
  },
  {
    question: "What is the process by which plants make food?",
    options: ["Photosynthesis", "Respiration", "Digestion", "Transpiration"],
    correct: "Photosynthesis",
  },
  {
    question: "Which organ pumps blood through the body?",
    options: ["Heart", "Lungs", "Brain", "Kidneys"],
    correct: "Heart",
  },
  {
    question: "What is the center of an atom called?",
    options: ["Nucleus", "Electron", "Proton", "Neutron"],
    correct: "Nucleus",
  },
];

// دالة لترتيب مصفوفة بشكل عشوائي (Fisher-Yates Shuffle)
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function ScienceQuiz() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isQuizEnded, setIsQuizEnded] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const timeoutRef = useRef(null);

  const playSound = (type, volume = 0.5) => {
    const audio = new Audio(`/sounds/${type}.mp3`);
    audio.volume = volume;
    audio.play();
  };

  // عند تغيير السؤال، نقوم بترتيب الخيارات عشوائياً
  useEffect(() => {
    const optionsShuffled = shuffle(questions[currentIndex].options);
    setShuffledOptions(optionsShuffled);
  }, [currentIndex]);

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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <Navbar />

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
          <div className="min-h-110 bg-white rounded-2xl shadow-2xl p-8 max-w-xl w-full text-center animate-fade-in">
            <h1 className="text-4xl font-extrabold text-[#bb4fa9] mb-4">
              🧪 Science Quiz
            </h1>

            <div className="text-sm text-gray-700 font-semibold mb-6">
              ✅ Score: {score} / {questions.length}
            </div>

            <p className="text-xl text-gray-800 mb-6 font-semibold">
              {current.question}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {shuffledOptions.map((opt, idx) => (
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

      <Footer />
    </div>
  );
}

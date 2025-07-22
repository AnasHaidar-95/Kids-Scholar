import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";

const Mines = () => {
  const [question, setQuestion] = useState({ a: 0, b: 0 });
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  const playSound = (type, volume = 0.5) => {
    const audio = new Audio(`/sounds/${type}.mp3`);
    audio.volume = volume;
    audio.play();
  };

  const generateQuestion = () => {
    let a = Math.floor(Math.random() * 20) + 1;
    let b = Math.floor(Math.random() * 20) + 1;
    if (b > a) [a, b] = [b, a]; // Ensure result is not negative
    const correct = a - b;

    const options = [
      correct,
      correct + Math.floor(Math.random() * 5) + 1,
      Math.max(correct - (Math.floor(Math.random() * 4) + 1), 0),
      correct + Math.floor(Math.random() * 3) + 2,
    ]
      .filter((opt, i, arr) => arr.indexOf(opt) === i)
      .sort(() => Math.random() - 0.5);

    setQuestion({ a, b });
    setOptions(options);
    setFeedback("");
  };

  const handleAnswer = (answer) => {
    const correct = question.a - question.b;
    if (answer === correct) {
      setScore((prev) => prev + 1);
      setFeedback("✅ Correct!");
      playSound("yes");
    } else {
      setFeedback("❌ Incorrect!");
      playSound("no");
    }
    setTimeout(() => generateQuestion(), 800);
  };

  useEffect(() => {
    generateQuestion();
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setGameOver(true);
          playSound("winner");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  const resetGame = () => {
    setScore(0);
    setTimeLeft(60);
    setGameOver(false);
    generateQuestion();
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setGameOver(true);
          playSound("winner");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">

        <div className="flex-grow flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-xl">
            <div className="mb-4">
              <button
                onClick={() => navigate(-1)}
                className="bg-red-400 text-white py-2 px-4 rounded hover:bg-red-500 transition duration-200"
              >
                ⬅️ Back
              </button>
            </div>

            <div className="bg-white shadow-2xl rounded-2xl p-8 text-center">
              <h1 className="text-3xl font-extrabold text-purple-700 mb-6">
                ➖ Subtraction Game
              </h1>

              {gameOver ? (
                <div>
                  <p className="text-green-600 text-3xl font-bold mb-2">
                    🎉 Time's Up!
                  </p>
                  <p className="text-lg">
                    Your Score:{" "}
                    <span className="font-semibold">{score} points</span>
                  </p>
                  <button
                    onClick={resetGame}
                    className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-xl hover:bg-blue-600 transition duration-200"
                  >
                    🔁 Play Again
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-xl mb-4">
                    What is{" "}
                    <span className="text-purple-800 font-bold">
                      {question.a} - {question.b}
                    </span>
                    ?
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(opt)}
                        className="bg-purple-500 hover:bg-purple-700 text-white py-3 rounded-xl text-lg transition duration-200"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  <p className="text-green-700 font-medium h-6">{feedback}</p>

                  <div className="mt-4 text-gray-700 text-sm">
                    ⏱️ Time Left:{" "}
                    <span className="font-semibold">{timeLeft}</span> seconds
                    <br />
                    📊 Score: <span className="font-semibold">{score}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

      </div>
        <Footer />
    </div>
  );
};

export default Mines;

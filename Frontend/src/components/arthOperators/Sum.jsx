import { useState, useEffect, useRef } from "react";

const Sum = () => {
  const [question, setQuestion] = useState({ num1: 0, num2: 0 });
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const timerRef = useRef(null);

  // تشغيل صوت حسب نوع الإجابة
  const playSound = (type) => {
    const audio = new Audio(`/sounds/${type}.mp3`);
    audio.play();
  };

  // توليد سؤال واختيارات (جمع بدلاً من ضرب)
  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 20) + 1; // أرقام من 1 إلى 20
    const num2 = Math.floor(Math.random() * 20) + 1;
    const correct = num1 + num2;

    const options = [
      correct,
      correct + Math.floor(Math.random() * 5) + 1,
      correct - Math.floor(Math.random() * 3),
      correct + Math.floor(Math.random() * 2) + 3,
    ]
      .filter((opt, i, arr) => arr.indexOf(opt) === i && opt >= 0) // نتجنب الخيارات السالبة
      .sort(() => Math.random() - 0.5);

    setQuestion({ num1, num2 });
    setOptions(options);
    setFeedback("");
  };

  // التعامل مع الإجابة
  const handleAnswer = (answer) => {
    const correct = question.num1 + question.num2;
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

  // بدء اللعبة والمؤقت
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

  // إعادة تشغيل اللعبة
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
    <div className="bg-yellow-50 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10 text-center font-bold text-xl">
      <h1 className="text-2xl text-purple-700 mb-4">➕ Addition Challenge</h1>

      {gameOver ? (
        <div>
          <p className="text-green-700 text-3xl">🎉 Time's Up!</p>
          <p className="text-lg mt-2">Your Score: {score} points</p>
          <button
            onClick={resetGame}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            🔁 Play Again
          </button>
        </div>
      ) : (
        <>
          <p className="mb-2 text-lg">
            What is {question.num1} + {question.num2}?
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(opt)}
                className="bg-purple-600 text-white py-2 rounded hover:bg-purple-800 transition duration-200"
              >
                {opt}
              </button>
            ))}
          </div>
          <p className="mt-4 text-green-700">{feedback}</p>
          <div className="mt-2 text-gray-700">
            ⏱️ Time Left: {timeLeft} seconds <br />
            📊 Score: {score}
          </div>
        </>
      )}
    </div>
  );
};

export default Sum;

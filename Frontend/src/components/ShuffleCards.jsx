import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

// مراحل متعددة
const levels = [
  [
    { word: "Cat", image: "https://i.pinimg.com/736x/c4/3a/3f/c43a3f0edf0638790cbe1c25de300318.jpg" },
    { word: "Dog", image: "https://i.pinimg.com/736x/aa/a0/87/aaa0878bdefba43e5f43c1fcb043533d.jpg" },
    { word: "Bear", image: "https://i.pinimg.com/736x/46/c5/8b/46c58b65d95e9b65b68663919ca26311.jpg" },
    { word: "Fish", image: "https://i.pinimg.com/1200x/e2/22/4b/e2224b1b710b029f3a718f27ec916963.jpg" },
  ],
  [
    { word: "Moon", image: "https://i.pinimg.com/736x/f7/7a/67/f77a67aac6036bde3e676c7c049f3644.jpg" },
    { word: "Sun", image: "https://i.pinimg.com/736x/67/cd/30/67cd302805533e6b1f5a9d7ed0605e9a.jpg" },
    { word: "Cloud", image: "https://i.pinimg.com/736x/7a/bd/94/7abd94b7f092ae9cf0a3f8556eceec7d.jpg" },
    { word: "Rain", image: "https://i.pinimg.com/1200x/03/1f/80/031f80a02383f31bdd57ae24b3cdde2f.jpg" },
    { word: "Snow", image: "https://i.pinimg.com/736x/e0/79/10/e07910aa711420fe34ec0054c9db5cac.jpg" },
    { word: "Lightning", image: "https://i.pinimg.com/1200x/f0/1c/63/f01c63016ada8e2b94dd79340e5c2480.jpg" },
  ],
  [
    { word: "Apple", image: "https://i.pinimg.com/736x/93/ee/ae/93eeae50f268042e49cb8cec649f9c9e.jpg" },
    { word: "Banana", image: "https://i.pinimg.com/736x/31/32/28/3132282b47cbb87e424f8f6e306e0111.jpg" },
    { word: "Orange", image: "https://i.pinimg.com/736x/84/bf/31/84bf31a8776c4894b62220dd4623a21a.jpg" },
    { word: "Grapes", image: "https://i.pinimg.com/736x/8f/b6/84/8fb684759dc8aae9c4bcdcfea1b11eda.jpg" },
    { word: "Strawberry", image: "https://i.pinimg.com/1200x/a1/0e/52/a10e52cb57137b069ff844410b03995e.jpg" },
    { word: "Pineapple", image: "https://i.pinimg.com/1200x/18/71/4c/18714cf4d7724dfa5c6fb0a191aa3f37.jpg" },
    { word: "Watermelon", image: "https://i.pinimg.com/736x/27/9d/ba/279dba53d1d1c03fd1f95a961fb1aa98.jpg" },
    { word: "Mango", image: "https://i.pinimg.com/1200x/f6/b1/ad/f6b1ad38ad8f7fd6ac19993f3b79110d.jpg" },
  ],
];

// تعديل shuffleLevel لإنشاء معرف ثابت لكل بطاقة
function shuffleLevel(levelCards) {
  const doubleCards = [...levelCards, ...levelCards];
  return doubleCards
    .map((card, index) => ({
      ...card,
      id: card.word + "-" + Math.floor(index / 2), // معرف ثابت للزوج
      matched: false,
    }))
    .sort(() => Math.random() - 0.5);
}

export default function MemoryGame() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matchedCount, setMatchedCount] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isShuffling, setIsShuffling] = useState(true);
  const [isChecking, setIsChecking] = useState(false); // منع النقر أثناء الفحص

  const navigate = useNavigate();

  const flipSound = useRef(null);
  const yesSound = useRef(null);
  const noSound = useRef(null);
  const winSound = useRef(null);

  useEffect(() => {
    const shuffled = shuffleLevel(levels[currentLevel]);
    setCards(shuffled);
    setSelected([]);
    setMatchedCount(0);
    setFeedback("");
    setIsShuffling(true);

    const timer = setTimeout(() => {
      setIsShuffling(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentLevel]);

  const handleCardClick = (card) => {
    if (
      isChecking || // منع النقر أثناء الفحص
      selected.length === 2 ||
      selected.some((c) => c.id === card.id) ||
      card.matched
    )
      return;

    flipSound.current?.play();
    const newSelected = [...selected, card];
    setSelected(newSelected);

    if (newSelected.length === 2) {
      setIsChecking(true);
      const [first, second] = newSelected;
      if (first.word === second.word) {
        setCards((prev) =>
          prev.map((c) => (c.word === first.word ? { ...c, matched: true } : c))
        );
        setMatchedCount((prev) => prev + 1);
        setFeedback("✅ Correct!");
        yesSound.current?.play();

        if (matchedCount + 1 === levels[currentLevel].length) {
          setTimeout(() => winSound.current?.play(), 600);
        }
      } else {
        setFeedback("❌ Try again!");
        noSound.current?.play();
      }

      setTimeout(() => {
        setSelected([]);
        setFeedback("");
        setIsChecking(false);
      }, 1000);
    }
  };

  const resetGame = () => {
    setCurrentLevel(0);
    setCards(shuffleLevel(levels[0]));
    setSelected([]);
    setMatchedCount(0);
    setFeedback("");
  };

  const nextLevel = () => {
    if (currentLevel + 1 < levels.length) {
      setCurrentLevel(currentLevel + 1);
    }
  };

  const isCardFlipped = (card) => selected.includes(card) || card.matched;

  const levelCompleted = matchedCount === levels[currentLevel].length;

  return (
    <div>
      <Navbar />
      <div
        className="min-h-screen flex flex-col items-center justify-center px-6 py-10 font-sans relative overflow-hidden"
        style={{
          background: `linear-gradient(to left, #d0eaf5 0%, #87CEEB 25%, #d0eaf5 50%, #87CEEB 75%, #d0eaf5 100%)`,
        }}
      >
        {/* زر الرجوع */}
        <button
          onClick={() => navigate(-1)}
          className="fixed top-40 left-5 bg-[#bb4fa9] text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-[#a13d93] transition z-50"
        >
          Back
        </button>

        <h1 className="text-4xl font-extrabold text-[#bb4fa9] mb-4">
          🧠 Memory <span className="text-[#FFFACD]">Challenge</span>
        </h1>

        {/* الصوتيات */}
        <audio ref={flipSound} src="/sounds/flipcard.mp3" />
        <audio ref={yesSound} src="/sounds/yes.mp3" />
        <audio ref={noSound} src="/sounds/no.mp3" />
        <audio ref={winSound} src="/sounds/winner.mp3" />

        {/* خريطة المراحل */}
        <div className="flex justify-center items-center gap-3 mt-2 mb-6">
          {levels.map((_, index) => (
            <div
              key={index}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                index === currentLevel
                  ? "bg-purple-600 animate-bounce"
                  : index < currentLevel
                  ? "bg-green-400"
                  : "bg-gray-300"
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>

        {/* البطاقات */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6 z-10">
          {cards.map((card) => {
            const flipped = isCardFlipped(card);

            return (
              <div
                key={card.id}
                className={`w-32 h-36 sm:w-36 sm:h-40 perspective cursor-pointer transition-transform duration-700 ${
                  levelCompleted ? "animate-pulse opacity-70" : ""
                }`}
                onClick={() => handleCardClick(card)}
              >
                <div
                  className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ${
                    flipped ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front Side */}
                  <div className="absolute w-full h-full bg-[#bb4fa9] text-white text-3xl rounded-xl flex items-center justify-center shadow-md backface-hidden">
                    ❓
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full bg-white transform rotate-y-180 flex flex-col items-center justify-center rounded-xl shadow-md backface-hidden p-2">
                    <img
                      loading="lazy"
                      src={card.image}
                      alt={card.word}
                      className="w-24 h-24 sm:w-28 sm:h-28 mb-2 object-contain rounded"
                    />
                    <span className="text-[#bb4fa9] font-bold text-base sm:text-lg">
                      {card.word}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feedback message */}
        <p className="text-xl font-semibold mb-2 text-green-700">{feedback}</p>

        {/* End of level actions */}
        {levelCompleted && (
          <div className="text-center mt-4 animate-fade-in">
            {currentLevel + 1 === levels.length ? (
              <>
                <p className="text-2xl text-green-600">🎉 All Levels Completed!</p>
                <button
                  onClick={resetGame}
                  className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition"
                >
                  🔁 Restart
                </button>
              </>
            ) : (
              <>
                <p className="text-xl text-blue-600">⭐ Level {currentLevel + 1} complete!</p>
                <button
                  onClick={nextLevel}
                  className="mt-3 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
                >
                  🚀 Next Level
                </button>
              </>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

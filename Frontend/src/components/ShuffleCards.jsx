import { useEffect, useState, useRef } from "react";
import Footer from "./footer"; // تأكد أن مسار الفوتر صحيح

const words = ["Cat", "Dog", "Sun", "Moon", "House", "Book"];

function shuffleCards() {
  const doubleWords = [...words, ...words];
  return doubleWords
    .map((word) => ({ word, id: Math.random(), matched: false }))
    .sort(() => Math.random() - 0.5);
}

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matchedCount, setMatchedCount] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  const flipSound = useRef(null);
  const yesSound = useRef(null);
  const noSound = useRef(null);
  const winSound = useRef(null);

  useEffect(() => {
    setCards(shuffleCards());
  }, []);

  const handleCardClick = (card) => {
    if (
      isChecking ||
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

        if (matchedCount + 1 === words.length) {
          setTimeout(() => winSound.current?.play(), 700);
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
    setCards(shuffleCards());
    setSelected([]);
    setMatchedCount(0);
    setFeedback("");
  };

  const isCardFlipped = (card) => selected.includes(card) || card.matched;

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">
        🧠 Memory Game
      </h1>

      {/* الصوتيات */}
      <audio ref={flipSound} src="/sounds/flipcard.mp3" />
      <audio ref={yesSound} src="/sounds/yes.mp3" />
      <audio ref={noSound} src="/sounds/no.mp3" />
      <audio ref={winSound} src="/sounds/winner.mp3" />

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-6">
        {cards.map((card) => {
          const flipped = isCardFlipped(card);

          return (
            <div
              key={card.id}
              className="w-24 h-24 perspective cursor-pointer"
              onClick={() => handleCardClick(card)}
            >
              <div
                className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ${
                  flipped ? "rotate-y-180" : ""
                }`}
              >
                {/* وجه البطاقة الأمامي */}
                <div className="absolute w-full h-full bg-purple-400 rounded-xl backface-hidden flex items-center justify-center shadow-md text-white text-2xl">
                  ❓
                </div>

                {/* وجه البطاقة الخلفي */}
                <div className="absolute w-full h-full bg-white rounded-xl backface-hidden transform rotate-y-180 flex items-center justify-center text-xl font-bold shadow-md text-purple-700">
                  {card.word}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-lg font-semibold text-green-700 min-h-[2rem]">
        {feedback}
      </p>

      {matchedCount === words.length && (
        <div className="text-center mt-6">
          <p className="text-2xl text-green-600 mb-3">
            🎉 تهانينا! أنهيت اللعبة!
          </p>
          <button
            onClick={resetGame}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition"
          >
            🔁 إعادة اللعب
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}

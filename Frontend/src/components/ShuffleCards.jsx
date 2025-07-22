import { useEffect, useState, useRef } from "react";

const words = ["Cat", "Dog", "Sun", "Moon", "House", "Book"];

function shuffleCards() {
  const doubleWords = [...words, ...words];
  return doubleWords
    .map((word) => ({ word, id: Math.random(), matched: false }))
    .sort(() => Math.random() - 0.5);
}

export default function MemoryGame() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matchedCount, setMatchedCount] = useState(0);
  const [feedback, setFeedback] = useState("");

  const flipSound = useRef(null);
  const yesSound = useRef(null);
  const noSound = useRef(null);
  const winSound = useRef(null);

  useEffect(() => {
    setCards(shuffleCards());
  }, []);

  const handleCardClick = (card) => {
    if (
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
    setCurrentLevel(0);
    setCards(shuffleLevel(levels[0]));
    setSelected([]);
    setMatchedCount(0);
    setFeedback("");
  };

  const isCardFlipped = (card) => selected.includes(card) || card.matched;

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">
        🧠 Memory Game
      </h1>

      {/* عناصر الصوت */}
      <audio ref={flipSound} src="/sounds/flipcard.mp3" />
      <audio ref={yesSound} src="/sounds/yes.mp3" />
      <audio ref={noSound} src="/sounds/no.mp3" />
      <audio ref={winSound} src="/sounds/winner.mp3" />

      <div className="grid grid-cols-4 gap-4 mb-4">
        {cards.map((card) => {
          const flipped = isCardFlipped(card);

          return (
            <div
              key={card.id}
              className="w-24 h-24 perspective"
              onClick={() => handleCardClick(card)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
                  flipped ? "rotate-y-180" : ""
                }`}
              >
                {/* الوجه الأمامي */}
                <div className="absolute w-full h-full bg-purple-400 rounded-xl backface-hidden flex items-center justify-center shadow-md cursor-pointer text-white text-2xl">
                  ❓
                </div>

                {/* الوجه الخلفي */}
                <div className="absolute w-full h-full bg-white rounded-xl backface-hidden transform rotate-y-180 flex items-center justify-center text-xl font-bold shadow-md text-purple-700">
                  {card.word}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-xl font-semibold mb-2 text-green-700">{feedback}</p>

      {matchedCount === words.length && (
        <div className="text-center mt-4">
          <p className="text-2xl text-green-600">🎉 تهانينا! أنهيت اللعبة!</p>
          <button
            onClick={resetGame}
            className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition"
          >
            🔁 إعادة اللعب
          </button>
        </div>
      )}
    </div>

    <Footer />
  </div>
)}
